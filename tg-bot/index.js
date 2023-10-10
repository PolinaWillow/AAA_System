import { Telegraf} from 'telegraf';
//import {Extra} from 'telegraf/';
//import {Markup} from 'telegraf/markup';
import config from 'config';
import fetch from 'node-fetch';
//import {Markup} from 


const bot = new Telegraf(config.get('TELEGRAM_BOT')) //Создание бота

bot.start(ctx=>{
    const helloText = "Hello\nI am Bot-helper, and i can give you your secret code to login\nLet`s go!\n\nYou must know, that this code isn`t eternal and it will be disappear in a 1 minute"
    ctx.reply(helloText)
    ctx.reply("Enter /Get_code")
})

//Обработчики команд
bot.command('Get_code', async(ctx)=>{
    //Получение кода из БД
    const userId = ctx.chat.id
    const tgname = ctx.chat.username
    try {
        const url = `http://localhost:7000/api/user/upgatetgcode`//?tgname=${tgname}`
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({tgname: tgname})
        };
        const response = await fetch(url, requestOptions)
        const data = await response.json()
        if(!response.ok){
            throw new Error(data.message ?? 'Что-то пошло не так')
        }
        const message = await ctx.reply("Code: "+data.tgcode+"\nPlease, don't tell enyone your code\nThis code will be removed in a 1 minute")


        //Удаление кода по истечениею минуты
        setTimeout(() => {
            ctx.deleteMessage(message.message_id);
          }, 60000);

    } catch (error) {
        await ctx.reply("Что-то пошло не так, попробуй позже")
    }
    
})

//Запуск бота
bot.launch()

process.once('SIGINT', ()=>bot.stop('SIGINT'))
process.once('SIGTERM', ()=>bot.stop('SIGTERM'))

