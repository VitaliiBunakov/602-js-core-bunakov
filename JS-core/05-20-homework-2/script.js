// //task 1
// let x = 1;
// let y = 2;
//
// let res1 = String(x) + y;// Допишіть код, необхідно використовувати змінні x і y
//     console.log(res1); // "12"
// console.log(typeof res1); // "string"
//
// let res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
//     console.log(res2); // "true2"
// console.log(typeof res2); // "string"
//
// let res3 = Boolean(x + y);// Допишіть код, необхідно використовувати змінні x і y
//     console.log(res3); // true
// console.log(typeof res3); // "boolean"
//
// let res4 = String(x) * 'y' // Допишіть код, необхідно використовувати змінні x і y
//     console.log(res4); // NaN
// console.log(typeof res4); // "number"


//task 2
// let x = prompt('enter number');
// console.log(x);
// if(!(x%2)){
//     console.log('x odd')
// };
// if(!(x%7)){
//     console.log('x multiplies to 7')
// };


//task 3
// const myArr = [1,'str', true, null];
// console.log(myArr.length);
// myArr[4] =prompt('enter number please');
// console.log(myArr[4]);
// myArr.shift()
// console.log(myArr);


//task 4
// const cities = ["Rome", "Lviv", "Warsaw"];
// let str='';
// str.concat(cities[0])
// for (let i = 0; i < cities.length; i++) {
//     if(i>0){
//         str+= '*';
//     }
//     str += cities[i];
// }
// console.log(str);

//task 5
// const isAdult = Number(prompt('How old are you?');
// if (isAdult  < 10) {
//     console.log('You are young')
// } else {
//     console.log('You are old')
// }


// // task 6----wtf
const a = prompt('set a');
console.log(typeof 5);
if ((typeof a) != "number") {
    console.log('Incorrect data');
}
const b = prompt('set b');
if (typeof (b) !== 'number' || b <= 0) {
    console.log('Incorrect data');
}
const c = prompt('set c');
if (typeof c !== 'number' || c <= 0) {
    console.log('Incorrect data');
}
let p, s, isRight;

p = (a + b + c) / 2;
s = (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(3);
isRight = (((a ** 2) + (b ** 2) == (c ** 2)) || ((a ** 2) + (c ** 2) == (b ** 2)) || ((b ** 2) + (c ** 2) == (a ** 2)));

console.log(`Trianle with sigdhts ${a}, ${b}, ${c} have square ${s} an may be right - ${isRight}`)


//task 7
// const nowTime = new Date();
// const nowHour = nowTime.getHours();
// // const nowHour = 21;
// console.log(nowHour);
// if (nowHour<=5 || nowHour>=23){
//     console.log('Доброї ночі');
// } else if (nowHour <= 11){
//     console.log('Доброго ранку');
// }else if (nowHour <= 17){
//     console.log('Доброго дня');
// }else if (nowHour <= 23){
//     console.log('Доброго вечора');
// }

