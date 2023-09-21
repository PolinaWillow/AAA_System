const Pi = [ 0xFC, 0xEE, 0xDD, 0x11, 0xCF, 0x6E, 0x31, 0x16, 0xFB, 0xC4, 0xFA, 0xDA, 0x23, 0xC5, 0x04, 0x4D,
    0xE9, 0x77, 0xF0, 0xDB, 0x93, 0x2E, 0x99, 0xBA, 0x17, 0x36, 0xF1, 0xBB, 0x14, 0xCD, 0x5F, 0xC1,
    0xF9, 0x18, 0x65, 0x5A, 0xE2, 0x5C, 0xEF, 0x21, 0x81, 0x1C, 0x3C, 0x42, 0x8B, 0x01, 0x8E, 0x4F,
    0x05, 0x84, 0x02, 0xAE, 0xE3, 0x6A, 0x8F, 0xA0, 0x06, 0x0B, 0xED, 0x98, 0x7F, 0xD4, 0xD3, 0x1F,
    0xEB, 0x34, 0x2C, 0x51, 0xEA, 0xC8, 0x48, 0xAB, 0xF2, 0x2A, 0x68, 0xA2, 0xFD, 0x3A, 0xCE, 0xCC,
    0xB5, 0x70, 0x0E, 0x56, 0x08, 0x0C, 0x76, 0x12, 0xBF, 0x72, 0x13, 0x47, 0x9C, 0xB7, 0x5D, 0x87,
    0x15, 0xA1, 0x96, 0x29, 0x10, 0x7B, 0x9A, 0xC7, 0xF3, 0x91, 0x78, 0x6F, 0x9D, 0x9E, 0xB2, 0xB1,
    0x32, 0x75, 0x19, 0x3D, 0xFF, 0x35, 0x8A, 0x7E, 0x6D, 0x54, 0xC6, 0x80, 0xC3, 0xBD, 0x0D, 0x57,
    0xDF, 0xF5, 0x24, 0xA9, 0x3E, 0xA8, 0x43, 0xC9, 0xD7, 0x79, 0xD6, 0xF6, 0x7C, 0x22, 0xB9, 0x03,
    0xE0, 0x0F, 0xEC, 0xDE, 0x7A, 0x94, 0xB0, 0xBC, 0xDC, 0xE8, 0x28, 0x50, 0x4E, 0x33, 0x0A, 0x4A,
    0xA7, 0x97, 0x60, 0x73, 0x1E, 0x00, 0x62, 0x44, 0x1A, 0xB8, 0x38, 0x82, 0x64, 0x9F, 0x26, 0x41,
    0xAD, 0x45, 0x46, 0x92, 0x27, 0x5E, 0x55, 0x2F, 0x8C, 0xA3, 0xA5, 0x7D, 0x69, 0xD5, 0x95, 0x3B,
    0x07, 0x58, 0xB3, 0x40, 0x86, 0xAC, 0x1D, 0xF7, 0x30, 0x37, 0x6B, 0xE4, 0x88, 0xD9, 0xE7, 0x89,
    0xE1, 0x1B, 0x83, 0x49, 0x4C, 0x3F, 0xF8, 0xFE, 0x8D, 0x53, 0xAA, 0x90, 0xCA, 0xD8, 0x85, 0x61,
    0x20, 0x71, 0x67, 0xA4, 0x2D, 0x2B, 0x09, 0x5B, 0xCB, 0x9B, 0x25, 0xD0, 0xBE, 0xE5, 0x6C, 0x52,
    0x59, 0xA6, 0x74, 0xD2, 0xE6, 0xF4, 0xB4, 0xC0, 0xD1, 0x66, 0xAF, 0xC2, 0x39, 0x4B, 0x63, 0xB6];

const reverse_Pi = [ 0xA5, 0x2D, 0x32, 0x8F, 0x0E, 0x30, 0x38, 0xC0, 0x54, 0xE6, 0x9E, 0x39, 0x55, 0x7E, 0x52, 0x91,
            0x64, 0x03, 0x57, 0x5A, 0x1C, 0x60, 0x07, 0x18, 0x21, 0x72, 0xA8, 0xD1, 0x29, 0xC6, 0xA4, 0x3F,
            0xE0, 0x27, 0x8D, 0x0C, 0x82, 0xEA, 0xAE, 0xB4, 0x9A, 0x63, 0x49, 0xE5, 0x42, 0xE4, 0x15, 0xB7,
            0xC8, 0x06, 0x70, 0x9D, 0x41, 0x75, 0x19, 0xC9, 0xAA, 0xFC, 0x4D, 0xBF, 0x2A, 0x73, 0x84, 0xD5,
            0xC3, 0xAF, 0x2B, 0x86, 0xA7, 0xB1, 0xB2, 0x5B, 0x46, 0xD3, 0x9F, 0xFD, 0xD4, 0x0F, 0x9C, 0x2F,
            0x9B, 0x43, 0xEF, 0xD9, 0x79, 0xB6, 0x53, 0x7F, 0xC1, 0xF0, 0x23, 0xE7, 0x25, 0x5E, 0xB5, 0x1E,
            0xA2, 0xDF, 0xA6, 0xFE, 0xAC, 0x22, 0xF9, 0xE2, 0x4A, 0xBC, 0x35, 0xCA, 0xEE, 0x78, 0x05, 0x6B,
            0x51, 0xE1, 0x59, 0xA3, 0xF2, 0x71, 0x56, 0x11, 0x6A, 0x89, 0x94, 0x65, 0x8C, 0xBB, 0x77, 0x3C,
            0x7B, 0x28, 0xAB, 0xD2, 0x31, 0xDE, 0xC4, 0x5F, 0xCC, 0xCF, 0x76, 0x2C, 0xB8, 0xD8, 0x2E, 0x36,
            0xDB, 0x69, 0xB3, 0x14, 0x95, 0xBE, 0x62, 0xA1, 0x3B, 0x16, 0x66, 0xE9, 0x5C, 0x6C, 0x6D, 0xAD,
            0x37, 0x61, 0x4B, 0xB9, 0xE3, 0xBA, 0xF1, 0xA0, 0x85, 0x83, 0xDA, 0x47, 0xC5, 0xB0, 0x33, 0xFA,
            0x96, 0x6F, 0x6E, 0xC2, 0xF6, 0x50, 0xFF, 0x5D, 0xA9, 0x8E, 0x17, 0x1B, 0x97, 0x7D, 0xEC, 0x58,
            0xF7, 0x1F, 0xFB, 0x7C, 0x09, 0x0D, 0x7A, 0x67, 0x45, 0x87, 0xDC, 0xE8, 0x4F, 0x1D, 0x4E, 0x04,
            0xEB, 0xF8, 0xF3, 0x3E, 0x3D, 0xBD, 0x8A, 0x88, 0xDD, 0xCD, 0x0B, 0x13, 0x98, 0x02, 0x93, 0x80,
            0x90, 0xD0, 0x24, 0x34, 0xCB, 0xED, 0xF4, 0xCE, 0x99, 0x10, 0x44, 0x40, 0x92, 0x3A, 0x01, 0x26,
            0x12, 0x1A, 0x48, 0x68, 0xF5, 0x81, 0x8B, 0xC7, 0xD6, 0x20, 0x0A, 0x08, 0x00, 0x4C, 0xD7, 0x74];

//Вектор линейного преобразования
const Buffer_Line = [1, 148, 32, 133, 16, 194, 192, 1, 251, 1, 192, 194, 16, 133, 32, 148 ];//[148, 32, 133, 16, 194, 192, 1, 251, 1, 192, 194, 16, 133, 32, 148, 1];  
 
//Размер блока
const BLOCK_SIZE = 16;


class Grasshopper{
    iter_key;
    constructor(){
        this.iter_key = this.Get_Key();
    }

    //Преобразование входного сообщения в Unicod
    TransformToUTF = (message)=>{
        //console.log(message)
        const byteArr = new TextEncoder().encode(message);
        return byteArr
    }

    TransformToString(message){    
        //console.log(message)   
        let string = new TextDecoder().decode(message);
        return string;
    }

    //XOR двух массивов
    XOR = (a, b)=>{   
        let c = new Uint8Array(BLOCK_SIZE)
        for (let i = 0; i < BLOCK_SIZE; i++){
            c[i] = a[i] ^ b[i];
        }
        return c;
    }

    //Нелинейное преобразование S
    S=(in_str)=>{
        let out_str = []
        for(let i=0;i<BLOCK_SIZE;i++){
            let data = in_str[i];
            if(data<0){
                data = data+ 256
            }
            out_str[i]=Pi[data]
        }
        return out_str;
    }

    //Обратное нелинейное преобразование S
    S_Rev=(in_str)=>{
        let out_str = new Uint8Array(BLOCK_SIZE)
        for(let i=0;i<BLOCK_SIZE;i++){
            let data = in_str[i];
            if(data<0){
                data = data+ 256
            }
            out_str[i]= reverse_Pi[data]
        }
        return out_str;
    }

    //Умножение в поле Галуа
    GaloisMult=(value1, value2)=>{
        let gm = 0 & 0xFF;
        let hi_bit;
        for(let i = 0; i < 8; i++){
            if((value2 & 1)==1){
                gm=gm ^ value1;
            }
            hi_bit = value1 & 0x80;
            value1 <<= 1;
            if(hi_bit){
                value1 = value1^ 0xc3;
            }
            value2 >>= 1;
        }
        return gm & 0xFF;
    }

    //Вспомогательное преобразование R
    R=(in_str)=>{
        let r = new Uint8Array(BLOCK_SIZE);
        let a15 = 0;
        //Сдвиг
        for(let i = 15; i >= 0; i--){
            if(i == 0){
                r[15] = in_str[i];
            }else{	    	
                r[i - 1] = in_str[i]
            }

            a15 = a15^this.GaloisMult(in_str[i], Buffer_Line[i]);
        }
        r[15] = a15;

        return r;
    }

    //Линейное преобразование
    L=(in_str)=>{
        let out_str = new Uint8Array(BLOCK_SIZE)
        out_str = in_str.slice();
        for(let i = 0; i < BLOCK_SIZE; i++){
            out_str = this.R(out_str);
        }
        return out_str;
    }

    //Обратное преобразование R
    R_Rev=(a)=>{
        let a_0= a[BLOCK_SIZE-1];
        let r_inv = new Uint8Array(BLOCK_SIZE);
        for(let i = 1; i < BLOCK_SIZE; i++){
            r_inv[i] = a[i-1];
            a_0 = a_0 ^ this.GaloisMult(r_inv[i], Buffer_Line[i]);
        }
        r_inv[0] = a_0;
        return r_inv;
    }

    //Обратное линейное преобразование
    L_Rev=(in_str)=>{
        let res =new Uint8Array(BLOCK_SIZE) 
        res = in_str.slice();
        for(let j = 0; j < BLOCK_SIZE; j++){
            res = this.R_Rev(res);
        }
        return res;	
    }

    //Генератор констант
    Get_C=()=>{
        let C = new Uint8Array(BLOCK_SIZE*2)
    
        let iter_num = []
        for(let i=0; i< 32; i++){
            iter_num[i] = []
        }

        for(let i = 0; i < 32; i++){
            for(let j=0; j<BLOCK_SIZE; j++){
                iter_num[i][j] = 0;           
            }
            iter_num[i][0] = i+1;
        }
        for(let i=0; i<32;i++){
            C[i] = this.L(iter_num[i]);
        }
        return C;
    }

    //Преобразования ячейки Фейстеля
    F=(key1, key2, C)=>{
        let internal = new Uint8Array(BLOCK_SIZE);
        let outKey2 = key1;
        internal = this.XOR(key1, C);
        internal = this.S(internal);
        internal = this.L(internal);

        let outKey1 = this.XOR(internal, key2);

        let key = [];
        key[0] = outKey1;
        key[1] = outKey2;
        return key;
    }

    //Генерация начальных ключей
    KeyGen=()=>{

        let temp = new Array();
        for(let i = 0; i < 16; ++i){
            temp.push(Math.floor(Math.random() * 255)&0xFF)
        }
        return temp
    }

    //Расчет раундовых ключей
    Get_Key=()=>{
        let iter_key = []
        for(let k=0; k<iter_key.length; k++){
            iter_key[k] = []
        }
        let key_1 = this.KeyGen()//[0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11, 0x00, 0xff, 0xee, 0xdd, 0xcc, 0xbb, 0xaa, 0x99, 0x88];
        let key_2 = this.KeyGen()//[0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01, 0x10, 0x32, 0x54, 0x76, 0x98, 0xba, 0xdc, 0xfe];
        //console.log("Начальные ключи:"+"\nkey_1: "+key_1+"\nkey_2: "+key_2)

        let C = this.Get_C();
        /*console.log("\nКонстанты:")
        for(let i=0;i<C.length;i++){
            console.log("C-"+i+": "+C[i])
        }
        console.log("\n")*/

        let iter12 = []
        let iter34 = []
        for (let k = 0; k < iter12.length; k++) {
            iter12[k] = []
            iter34[k] = []
        }

        iter_key[0]= key_1
        iter_key[1] = key_2
        iter12[0] = key_1
        iter12[1] = key_2

        for(let i=0; i<4;i++){
            iter34 = this.F(iter12[0], iter12[1], C[0 + 8 * i]);
            iter12 = this.F(iter34[0], iter34[1], C[1 + 8 * i]);
            iter34 = this.F(iter12[0], iter12[1], C[2 + 8 * i]);
            iter12 = this.F(iter34[0], iter34[1], C[3 + 8 * i]);
            iter34 = this.F(iter12[0], iter12[1], C[4 + 8 * i]);
            iter12 = this.F(iter34[0], iter34[1], C[5 + 8 * i]);
            iter34 = this.F(iter12[0], iter12[1], C[6 + 8 * i]);
            iter12 = this.F(iter34[0], iter34[1], C[7 + 8 * i]);

            iter_key[2 * i + 2] = iter12[0];
            iter_key[2 * i + 3] = iter12[1];           
        }

        return iter_key
    }

    //Шифрация исходной строки
    Encription=(in_str, iter_key)=>{
        //Преобразование входной строки в 16й код
        let in_str_utf = this.TransformToUTF(in_str)


        //Выходная строка шифра
        let out_string = ""
        //Кодируемы блок
        let encr_string

        for(let j=0;j<=in_str_utf.byteLength;j+=16){
            if(j+16<in_str_utf.byteLength) encr_string = in_str_utf.slice(j,j+16)
            else encr_string = in_str_utf.slice(j,in_str_utf.byteLength)

            //Кодируем блок
            for (let i=0;i<9;i++){
                encr_string = this.XOR(iter_key[i],encr_string)
                encr_string = this.S(encr_string);
                encr_string = this.L(encr_string);
                
            }
            encr_string = this.XOR(encr_string, iter_key[9])
            //Добавляем блок к итоговому шифру
            out_string+= encr_string.join(', ') 
            out_string+=', '
        }

        return out_string;
    }

    //Дешифрация
    Decription = (in_str, iter_key)=>{
        //Преобразование входной строки в массив байтов
        let input_mas = in_str.split(', ');      
        for(let i=0;i<input_mas.length;i++){
            if(input_mas[i]!="") input_mas[i] = Number(input_mas[i])
        }
        if(input_mas[input_mas.length-1]==='') input_mas.pop()
        let input_str_byte= Uint8Array.from(input_mas)

        let dencr_string
        let out_string=""
        for(let j=0;j<input_str_byte.byteLength;j+=16){
            if(j+16<input_str_byte.byteLength)dencr_string = input_str_byte.slice(j,j+16)
            else dencr_string = input_str_byte.slice(j,input_str_byte.byteLength)
            
            //Декодировка блока
            dencr_string = this.XOR(dencr_string,iter_key[9])
            for(let i=8; i>=0; i--){
                dencr_string = this.L_Rev(dencr_string)
                dencr_string = this.S_Rev(dencr_string)
                dencr_string = this.XOR(iter_key[i], dencr_string)
            }
            
            out_string+=this.TransformToString(dencr_string)
            
        }

        out_string = out_string.split('')
        let k = out_string.length-1
        while(out_string[k]=='\x00'){
            out_string.pop()
            k--
        }
        return out_string.join('')
    }
}

module.exports = new Grasshopper();