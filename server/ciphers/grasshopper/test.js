import Grasshopper from "./main.js"

let Grass = new Grasshopper();
console.log("Алгоритм шифрования Кузнечик")
let testStr = "Дедушка304";
console.log("Шифруемая строка: " + testStr)
let in_str = Grass.messageTransform(testStr)

console.log("Представление в числовой форме: " + in_str)


let en=Grass.Encription(in_str);
console.log("\nen = "+en);
let de= Grass.Decription(en)
console.log("de = "+de);
console.log("or = "+in_str)
if(toString(de)==toString(in_str)){
    console.log("Расшифровка прошла успешно")
}
else{
    console.log("Ошибка расшифровки")
}