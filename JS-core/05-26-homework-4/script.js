//task 1
/**
 *
 * That function counts rectangle area.
 * @param width  - of rectangle, may be number, positive
 * @param height - of rectangle, may be number, positive
 * @returns {boolean} - calculated area of rectangle
 *
 * Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width
 * і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми
 * і генерацію винятку у випадку, якщо функції передано не числові параметри.
 Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
 */

// function calcRectangleArea(width, height) {
//     if (typeof width !== "number" || typeof height !== "number") {
//         throw new Error('Width and height parameters can be only numbers.');
//     } else if (width <= 0 || height <= 0) {
//         throw new Error('Width or height are scalar, not vector,so must be positive ;) ')
//     }
//     return width * height;x
// }
//
// try {
//     console.log(calcRectangleArea("dd", "gdfyhjtdy"));
// } catch (error) {
//     if (error.name === "Error") {
//         console.log(('I got you! '))
//         console.log(error.name);
//         console.log(error.message);
//         console.log(error.stack);
//     } else {
//
//         console.log("Why did you do that??");
//         console.log(error.name);
//         console.log(error.message);
//         console.log(error.stack);
//     }
//
// } finally {
//     console.log("its still alive!!")
// }


//task 2

/**
 *  This function check age of user to permit film watching, in case user is younger - reject and throw exception
 *  in case entering empty string - reject and throw exception
 *  in case entering  string - reject and throw exception
 * @returns {boolean} or throw exception
 *
 * Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки
 * у випадку, коли:
 - юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”),
 - нечислове значення
 - вік юзера менше 14 років.
 В іншому разі юзер отримує доступ до перегляду фільму.
 В блокові catch передбачити виведення назви і опису помилки.


 *
 */

// function checkAge(){
//     const userAge = prompt(' Type your age please!');
//     console.log(`User entered as age: ${userAge}`);
//     switch (true) {
//         case userAge === '' :
//             alert(' God damn it"s Jason Born!');
//             throw new Error(' God damn it"s Jason Born!');
//             break;
//
//
//         case (+userAge < 14) :
//             alert('Mom  says no!');
//             throw new Error('Mom  says no!');
//             break;
//
//         case isNaN(userAge) :
//             alert('English! Do you speak it?(we need a number)');
//             throw new Error('English! Do you speak it?(we need a number)')
//             break;
//
//         default :
//             console.log('all fine');
//             return true;
//     }
//
// }
//
// try {
//     checkAge();
// } catch (error){
//     console.log(error.name);
//     console.log(error.message);
//
// }

//task 3
/**
 *Створіть клас MonthException, конструктор якого приймає параметр message і
 * ініціалізує поле name значенням 'MonthException'.
 *
 * Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
 * Функція повертає назву місяця відповідно до введеного номера місяця.
 *
 * У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з
 * повідомленням 'Incorrect month number'.
 *
 * Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
 * Приклад роботи програми:
 * > console.log(showMonthName(5));  May
 * > console.log(showMonthName(14)); MonthException Incorrect month number
 *
 */
//
// class MonthException{
//
//     constructor(message) {
//         this.message = message;
//         this.name = 'MonthException';
//     }
// }
//
// function showMonthName(month){
//     let monthList =
//         ['January','February','March','April','May','June','July','August','September','October','November','December'];
//
//     if(isNaN(month) || month < 1 || month > 12){
//         throw new MonthException('Incorrect month number');
//     }
//     return monthList[month-1];
// }
//
// try {
//     console.log(showMonthName(12));
//
// } catch (exception){
//     if (exception.name === 'MonthException'){
//
//         console.log('Try to learn month"s again...')
//         console.log(exception.name);
//         console.log(exception.message);
//     }else{
//         console.log(exception.name);
//         console.log(exception.message);
//         console.log(exception.stack);
//     }
// }


//task 4
/**
 *Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт,
 * який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
 *
 * Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
 * перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
 * в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів,
 * де значеннями ключів є коректні елементи ids.
 *
 * Приклад роботи програми:
 * showUsers([7, -12, 44, 22]);
 * Error: ID must not be negative: -12
 * [ {id: 7}, {id: 44}, {id: 22} ]
 */

//validate single id
// function showUser(id){
//     if(id < 0){throw new Error('ID must be positive')}
//
//     return {id};
// }

//validate  multiple ids be prev function
// function showUsers(ids){
//     let usersIDCorrectArray = []; //output ids(array of objects)
//
//     try{
//         for (let key in ids){
//             usersIDCorrectArray.push(showUser(ids[key])); //chek id, if valid - put into array
//         }
//     }catch (err){
//         if(err.name === 'Error'){
//             console.log(err.name);
//             console.log(err.message);
//         }
//     }
//     return usersIDCorrectArray;
// }
//
//
// console.log(showUsers([7, -12, 44, 22]));
