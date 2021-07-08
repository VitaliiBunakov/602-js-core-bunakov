//task1
/**
 * Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
 Приклад роботи:
 upperCase('regexp');
 upperCase('RegExp');
 String's not starts with uppercase character
 String's starts with uppercase character


 */

// let regExp = /[A-Z]/
//
// function upperCase(str){
//     let firstChar = str.search(regExp);
//     if (firstChar === 0) {console.log("String's starts with uppercase character")}
//     else   {console.log("String's not starts with uppercase character")}
// }
// upperCase('regexp');
// upperCase('RegExp');


//task2+
/**
 * Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі
 * символи на різних позиціях.
 Приклад роботи:
 checkEmail("Qmail2@gmail.com");
 true

 */
// function checkEmail(email){
//     return /@/.test(email)
// }
// console.log(checkEmail("Qmail2@gmail.com"));


//task3
/**
 * Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d.
 * Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
 Приклад роботи:
 Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]

 */





//task4
/**
 *Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
 Приклад роботи:
 Вхідний рядок    "Java Script"
 Вихід    “Script, Java”

 */
function replaceTwo(str){
    let tmparr = [];
    
}

console.log(replaceTwo("Java Script"));




//task5
/**
 *Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
 */




//task6
/**
 *Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
 Вимоги:
 •  Цифри (0-9).
 •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
 •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
 •  Символ “-” не може повторюватися.

 checkEmail('my_mail@gmail.com');
 Email is correct!
 checkEmail('#my_mail@gmail.com');
 Email is not correct!
 checkEmail('my_ma--il@gmail.com');
 Email is not correct!


 */





//task7
/**
 *Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та цифри, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
 Приклад роботи:
 checkLogin('ee1.1ret3');
 true
 1.1, 3

 checkLogin('ee1*1ret3');
 false
 1, 1, 3

 */