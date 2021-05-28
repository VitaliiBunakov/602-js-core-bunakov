const arr1 = [2, 3, 4, 5];


//task 1
// let mult = 1;
// for (let i of arr1){
//     mult *= i;
// }
// console.log(mult);
//
// mult = 1;
// let count1 = 0;
// while (count1 < arr1.length){
//     mult *= arr1[count1];
//     count1++
// }
// console.log('=====');
// console.log(mult);

//task 2
// for (let i = 0; i<=15;i++) {
//     if(i%2){
//         console.log(`${i} is odd`);
//     }else {
//         console.log(`${i} is even`);
//     }
// }

//task  3
// function randArray( k){
//     let arr =[];
//     for ( let i= 1; i < k; i++){
//         arr.push(Math.floor(Math.random() * (500 - 1) + 1))
//     }
//     return arr;
// }
// let outArr = randArray(5);
// console.log(`Random array is  ${outArr}`);

//task  4
// function raiseToDegree(a,b){
//     let c = a;
//     for (let i=1; i< b; i++){
//         c*=a;
//     }
//     return c;
// }
// console.log(raiseToDegree(3, 2));
// console.log(raiseToDegree(3, 3));
// console.log(raiseToDegree(3, 4));
// console.log(raiseToDegree(3, 5));


//task  5
// function findMin() {
//     let min = arguments[0];
//     if (arguments.length < 1) {
//         return 'need some args'
//     }
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) {
//             min = arguments[i]
//         }
//     }
//     return min;
// }
//
// const xxx = findMin(-2,5,-100,5,78,2,4);
// console.log(xxx);

//task  6
// function  findUnique(arr){
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let x = i+1; x < arr.length; x++) {
//             // console.log(arr[i]);
//             // console.log(arr[x]);
//             // console.log('=======');
//             if (arr[i]== arr[x]){return false}
//         }
//     }
//     return true;
// }
// console.log(findUnique([1,2, 3, 4, 4]));

//task  7
// function returnArrayLastNPositions(arr, n) {
//     let arrToReturn = [];
//
//     function returnLastOne() {
//         arrToReturn = arr[arr.length - 1];
//     }
//
//     function returnLastN() {
//         while (n > 0) {
//             arrToReturn.push(arr[arr.length - n]);
//             n--;
//         }
//
//     }
//
//     if (n === undefined) {
//         returnLastOne();
//         return arrToReturn;
//     } else {
//         returnLastN();
//         return arrToReturn;
//
//     }
// }
//
// console.log(returnArrayLastNPositions([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
// console.log(returnArrayLastNPositions([1, 2, 3, 4, 5, 6, 7, 8, 9]));


//task  8
// function anyFirstLetterToUpper(str) {
//     let s ;
//     for (let i = 0; i < str.length; i++) {
//         if((str[i-1]==' ') || str[i-1]=='.' || str[i-1]==','){
//              s += str[i].toUpperCase();
//         }else if (i==0  ){
//             s= str[0].toUpperCase();
//         }else{
//             s+= str[i];
//         }
//
//     }
//     return s;
//
//
//
// }
//
// console.log(anyFirstLetterToUpper('this is.the,string'));