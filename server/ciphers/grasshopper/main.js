import {Pi} from "./Constants.js"
import {reverse_Pi} from "./Constants.js"
import {Buffer_Line} from "./Constants.js"
import {BLOCK_SIZE} from "./Constants.js"

export default class Grasshopper{
    iter_key;
    constructor(){
        this.iter_key = this.Get_Key();
    }

    //Преобразование входного сообщения в Unicod
    messageTransform = (in_str)=>{
        let out_str = [];
        for(let i=0; i<in_str.length; i++){
            out_str.push(in_str.charCodeAt(i) & 0xFF);
        }
        return out_str;
    }

    //XOR двух массивов
    XOR = (value1, value2)=>{   
        let c = []
        for (let i = 0; i < BLOCK_SIZE; i++){
            c[i] = value1[i] ^ value2[i];
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
        let out_str = []
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
        let r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
        let out_str = in_str.slice();
        for(let i = 0; i < BLOCK_SIZE; i++){
            out_str = this.R(out_str);
        }
        return out_str;
    }

    //Обратное преобразование R
    R_Rev=(a)=>{
        let a_0= a[15];
        let r_inv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0];
        for(let i = 1; i < BLOCK_SIZE; i++){
            r_inv[i] = a[i-1];
            a_0 = a_0 ^ this.GaloisMult(r_inv[i], Buffer_Line[i]);
        }
        r_inv[0] = a_0;
        return r_inv;
    }

    //Обратное линейное преобразование
    L_Rev=(in_str)=>{
        let res = in_str.slice();
        for(let j = 0; j < BLOCK_SIZE; j++){
            res = this.R_Rev(res);
        }
        return res;	
    }

    //Генератор констант
    Get_C=()=>{
        let C = []
    
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
        let internal = [];
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
        console.log("Начальные ключи:"+"\nkey_1: "+key_1+"\nkey_2: "+key_2)

        let C = this.Get_C();
        console.log("\nКонстанты:")
        for(let i=0;i<C.length;i++){
            console.log("C-"+i+": "+C[i])
        }
        console.log("\n")

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

        console.log("Итерационные ключи:")
        for(let i=0;i<10;i++){
            console.log("iter_key-"+i+": "+iter_key[i])
        }

        return iter_key
    }

    //Шифрация исходной строки
    Encription=(in_str)=>{
        let out_str=[]
        out_str = in_str;

        for (let i=0;i<9;i++){
            out_str = this.XOR(this.iter_key[i],out_str)
            out_str = this.S(out_str);
            out_str = this.L(out_str);
        }
        out_str = this.XOR(out_str, this.iter_key[9])

        return out_str;
    }

    //Дешифрация
    Decription = (in_str)=>{
        let out_str=[]
        out_str = in_str.slice();

        out_str = this.XOR(out_str, this.iter_key[9])
        for(let i=8; i>=0; i--){
            out_str = this.L_Rev(out_str)
            out_str = this.S_Rev(out_str)
            out_str = this.XOR(this.iter_key[i], out_str)
        }
        return out_str
    }
}