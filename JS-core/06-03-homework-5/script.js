//task 1
/**
 * Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
 Наприклад для об’єкта
 let mentor = {
            course: "JS fundamental",
            duration: 3,
            direction: "web-development"
        };
 Результат має бути 3.
 propsCount(mentor);  // 3

 */
// function propsCount(currentObject){
//     let counter = 0;
//     for (key in currentObject) {
//         if (currentObject.hasOwnProperty(key)) {counter++}
//     }
//     return counter;
// }
//
// console.log(propsCount({"key1": 1, "key2": 2, "key3": 3}));
// console.log(propsCount({"key1": 1, "key2": 2, "key3": 3, "key4":4}));


//task 2
/**
 * Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj),
 * яка приймає даний об’єкт і виводить список його властивостей записаних в масив.
 * Виведіть також масив значень властивостей об’єкта.
 */

//
// let object1 = {
//     'key1':1,
//     'key2':2,
//     'key3':3,
//     'key4':4,
//     'key5':5,
// }
// function showProps(obj){
//     let keys = [];
//     let props = [];
//     for (ke in obj) {
//         keys.push(ke);
//         props.push(obj[ke]);
//     };
//     console.log('Keys in object: ');
//     console.log(keys);
//     console.log('Props in object: ')
//     console.log(props);
//
// }
//
// showProps(object1);


//task 3
/**
 * Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(),
 * який виводить ім’я і прізвище особи.
 *
 * Від класу Person наслідується клас Student, конструктор якого крім name і surname,
 * приймає параметр year (рік вступу до університету).
 * В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я,
 * прізвище, але і по-батькові (midleName) студента.
 *
 * Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6).
 * Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.
 * Приклад результату:
 *
 * let stud1 = new Student("Petro", "Petrenko", 2015);
 * console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
 * console.log("Current course: " + stud1.showCourse()); //Current course: 6

 */
// class Person{
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//
//     showFullName(){
//         return this.name + ' ' + this.surname;
//     }
//
// }
// class Student extends Person{
//     constructor(name, surname, year) {
//         super( name, surname);
//         this.year = year;
//     }
//
//     showFullName(midleName){
//         this.midleName = midleName;
//         return this.name + ' '+ midleName + ' ' + this.surname;
//     }
//
//     showCourse(){
//         let currYear = new Date().getFullYear()
//         if((currYear - this.year) > 6){
//             return "already got degree!"
//         }
//         return currYear - this.year
//     }
// }
//
// let stud1 = new Student("Petro", "Petrenko", 2015);
//  console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
//  console.log("Current course: " + stud1.showCourse()); //Current course: 6
//


//task 4
/**
 * Створіть клас Worker який буде мати конструктор, який приймає наступні властивості:
 * fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
 1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника.
 Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
 2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при
 визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
 3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
 4) Вивести значення зарплати з новим experience.

 5) Створити кілька екземплярів класу (працівників) з різними зарплатами. Посортувати зарплату працівників із
 найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value ………..

 Example usage:
 let worker1 = new Worker("John Johnson", 20, 23);
 console.log(worker1.fullName);
 worker1.showSalary();
 console.log("New experience: " + worker1.showExp);
 worker1.showSalaryWithExperience();
 worker1.setExp = 1.5;
 console.log("New experience: " + worker1.showExp);
 worker1.showSalaryWithExperience();

 let worker2 = new Worker("Tom Tomson", 48, 22);
 . . . . . .

 let worker3 = new Worker("Andy Ander", 29, 23);
 . . . . . .

 Output example:
 John Johnson
 John Johnson salary: 460
 New experience: 1.2
 John Johnson salary: 552
 New experience: 1.5
 John Johnson salary: 690

 Tom Tomson
 Tom Tomson salary: 1056
 . . . . . .

 Sorted salary:
 John Johnson: 690
 Andy Ander: 1000.5
 Tom Tomson: 1584


 */

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    _experience = 1.2;

    get showExp() {
        return this._experience
    };

    set setExp(experience) {
        this._experience = experience
    };


    showSalary() {
        // console.log(this.dayRate * this.workingDays);
        return this.dayRate * this.workingDays
    };

    showSalaryWithExperience() {
        // console.log(this.showSalary() * this._experience);
        return (this.showSalary() * this._experience);
    }


}

let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Tomson", 48, 23);
let worker3 = new Worker("Andy Ander", 29, 23);
let worker4 = new Worker("En Der", 15, 23);

console.log(worker1.fullName);
console.log(`${worker1.fullName}salary:  ${worker1.showSalary()}`);
console.log("New experience: " + worker1.showExp);
console.log(`${worker1.fullName}salary:  ${worker1.showSalaryWithExperience()}`);
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(`${worker1.fullName}salary:  ${worker1.showSalaryWithExperience()}`);

/*СПЕЦІАЛЬНО виставив однакову кількість робочих днів - тоді наглядно, по  коефіцієнту,
видно в кого більша зп*/
let employeeList = [worker1, worker2, worker3,worker4];
employeeList.sort((a, b) => {
    return ( a.showSalaryWithExperience() > b.showSalaryWithExperience()) ? 1 : -1
})
console.log('Sorted salary:')
for (let emp of employeeList) {
    console.log(`${emp.fullName}: ${emp.showSalary()}`)
}


//task 5
/**
 * Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та
 * метод toString() для виведення назви класу.

 Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure.

 Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури.
 В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури,
 наприклад для кола - радіус r.

 Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures,
 перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування,
 виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур.
 Для реалізації функції можете використати метод reduce().
 class GeometricFigure {
			getArea() {
	return 0;
}
toString() {
     return Object.getPrototypeOf(this).constructor.name;
}
     }
 Your code . . .

 const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
 console.log(handleFigures(figures));

 Приклад результату:
 Geometric figure: Triangle - area: 10
 Geometric figure: Square - area: 49
 Geometric figure: Circle - area: 78.53981633974483
 137.53981633974485 // total area


 */
//
// class GeometricFigure {
//     constructor() {
//     }
//
//     getArea() {
//     };
//
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
//
// }
//
// class Triangle extends GeometricFigure {
//     constructor(a, b, c) {
//         super();
//         this.a = a;
//         this.b = b;
//         this.c = c;
//         super.toString();
//     };
//
//
//     getArea() {
//         this.halfP = (this.a + this.b + this.c) / 2;
//         return Math.sqrt(this.halfP * (this.halfP - this.a) * (this.halfP - this.b) * (this.halfP - this.c))
//     };
//
// }
//
// class Square extends GeometricFigure {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//         super.toString();
//     }
//
//     getArea() {
//         return this.width * this.height
//     };
// }
//
// class Circle extends GeometricFigure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//         super.toString();
//     }
//
//     const
//     PI = 3.1415;
//
//     getArea() {
//         return this.PI * (this.radius ** 2);
//     };
//
//
// }
//
// function handleFigures(figures) {
//     let sumOfAllSquare = 0;
//     for (let curfigure of figures) {
//         sumOfAllSquare += curfigure.getArea();
//         console.log(`GeometricFigure: ${curfigure}  - area: ${curfigure.getArea()}  `)
//
//     }
// }
//
// console.log(`${sumOfAllSquare} // total area`);
//
// let triangle = new Triangle(3, 4, 5);
// let square = new Square(2, 4);
// let circle = new Circle(5);
//
// let figures = [triangle, square, circle];
//
// handleFigures(figures);

