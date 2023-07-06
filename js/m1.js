// const name = Number('fnvkn');
// console.log(Number.isNaN(name));

// const age = 65;
// console.log(Number.isNaN(age));

// const raw = '12.56lbl9mjm';
// console.log(Number.parseFloat(raw));
// console.log(Number.parseInt(raw));

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);
// const message = `Your order is ${orderedQuantity} droids with a total cost ${totalPrice} `;
// console.log(message);

// const price = 12.369;
// console.log(Math.round(price));
// console.log(Math.floor(price));
// console.log(Math.ceil(price));

// console.log(Math.min(10, 4, 36, 18, 96));
// console.log(Math.max(10, 4, 36, 18, 96));

// console.log((Math.random()*(100-10)+10).toFixed(0));

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message.length);
// console.log(message.indexOf('to'));
// console.log(message.includes('Tai'));
// console.log(message.endsWith('!'));
// console.log(message.replace('Bahamas', 'Tai'));
// console.log(message.slice(6, 17))

// const age = 16;
// console.log(age > 10 && age < 30);
// console.log(age > 15 || age <18);
// console.log(!age < 10);

// const age = 15;
// // if(age > 18){
// //     console.log('adult');
// // };

// // if(age < 11){
// //     console.log('adult');
// // } else {
// //     console.log('child')
// // }

// if(age >= 18){
//     console.log('adult');
// } else if(age >= 12 && age <18){
//     console.log('teen')
// } else {
//     console.log('child')
// }

// console.log(age >= 18 ? "adult": "child")

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost);

// for (let i = 0; i < 5; i += 1) {
//     console.log(i)
// }

// let sum = 0;
// const target = 10;
// for (let i = 0; i < target; i += 1){
//     sum += i;
// }
// console.log(sum);

// for(let i = 0; i<10; i+=1){
//     if( i === 3){
//         console.log('pyfqltyj 5')
//         break;
//     }
// }

// for(let i = 0; i < 20; i +=1 ){
//     if(i % 2 ===0){
//     continue;
// }
// console.log(i);
// }












// // Виведіть на екран загальну кількість яблук і винограду. Різницю яблук та винограда.
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff =  apples - grapes;
// console.log(diff)



// // Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// // students = students + 50;
// students += 50;

// console.log(students);




// // Розбери пріоритет операторів в інструкції надання
//  значення змінної result.
// const result = 108 + 223 - 2 * 5;
//                 // 331    -     //    10
// console.log(result);


// // Напиши скрипт, який виводить у консоль заокруглені
//  вгору/вниз і т.д. Значення змінної value.
// //  Використовуй методи Math.floor(), Math.ceil()
// та Math.round(). Перевірте, що буде в консолі при
// значеннях 27.3 і 27.9.


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
//const value = Math.floor(27.5);// Округлення в низ до цілого числа
//const value = Math.ceil(27.001) // Округлення до першого більшо числа
// const value = Math.round(27.5)// Звичайне математичне округлення
// console.log(value);


// // Склади речення за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
//const message = `${companyName} has ${repairBots+ defenceBots} bots in stock`;// Новий синтаксис
//const message = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock';//Старий синтаксис
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. 
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

// Вага та висота зберігаються в змінних weight і height, але не як числа,
//  а у вигляді рядків (спеціально для завдання). 
// Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, 
// тобто як роздільник дробової частини може бути кома.

// Індекс масії тіла необхідно округлити до однієї цифри після коми;


// let weight = '88,30';
// Замінюємо кому на крапку
// Приводимо Стрінгу до числа
// let height = '1.75';
// weight = Number(weight.replace(',','.'))
// height = Number(height)
// // const bmi = (weight/ Math.pow(height,2)).toFixed(1);
// const bmi =(Number(weight.replace(',','.')) / Math.pow(Number(height),2)).toFixed(1)//
// console.log(bmi); // 28.8

// Яким буде результат виразів?
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0_%E2%80%94_A

// console.log(10 >= '7'); //true

// console.log('2' > '12'); // true

// console.log('2' < '12'); //false

// console.log('4' == 4); //true

// console.log('6' === 6);//false

// console.log('false' === false); // false

// console.log(1 == true); // true

// console.log(1 === true);//false

// console.log('0' == false);//true

// console.log('0' === false);//false

// console.log('Papaya' < 'papaya');//true

// console.log('Papaya' === 'papaya'); // false

// console.log(undefined == null);//true

// console.log(undefined === null);//false


// Використовуючи конструкцію if..else та prompt, напиши код, який запитуватиме: 
// "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Вірно!", 
// інакше - "Не знаєте? ECMAScript!"


// const value = prompt("Яка офіційна назва JavaScript?").toLocaleLowerCase()
// const ecma = 'ECMAScript'

// if(value === ecma.toLocaleLowerCase()){
//     alert("Вірно!")
// }else{
//     alert("Не знаєте? ECMAScript!")
// }



// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль. 
// кщо було введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".
// const value = Number(prompt('Enter number'))
// console.log(value);
// console.log(typeof value);

// if (value > 0) {
//     console.log("Це позитивне число");
// } else if (value === 0) {
//     console.log("Це нуль");
// } else if (value < 0) {
//     console.log("Це від'ємне число");
// } else {
//     console.log('Ви ввели не число');
// }

// if (value > 0) {
//     console.log("Це позитивне число");
// }
// if (value === 0) {
//     console.log("Це нуль");
// }
// if (value < 0) {
//     console.log("Це від'ємне число");
// }
// if (isNaN(value)) {
//     console.log('Ви ввели не число');
// }


// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ
// let link = 'https://somesite.com/about';

// console.log(link.slice(link.length-1) === '/');

// console.log(link.endsWith('/'));
// console.log(!false);
// if (!link.endsWith('/')) {
//     // link = `${link}/`
//     // link = link + '/'
//     link += '/'
// }
// console.log(link);




// Напиши скрипт для відображення часу дедлайн здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"


// console.log(typeof days);
// if(days === 0){
//     console.log("Сьогодні");
// }else if (days === 1){
//     console.log("Завтра");
// }else if (days === 2){
//     console.log("Післязавтра");
// }else {
//     console.log("Дата в майбутньому");
// }
// const days = Number(prompt('Enter days'))
// // console.log(isNaN(days) || Number.isNaN(days));
// console.log(days);

// switch (days) {
//     case 0:
//         console.log("Сьогодні");
//         break;
//     case 1:
//         console.log("Завтра");
//         break;
//     case 2:
//         console.log("Післязавтра");
//         break;
//     default:
//         console.log("Дата в майбутньому");
// }


// Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але якщо число кратне 5.
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     // / оператор ділення
//     // % оператор залишку від ділення
//     // if (i % 5 === 0){
//     //     console.log(i);
//     // }
// }

// Створи світлофор

// const color = prompt('Enter color')
// console.log(color);

// // const test = color || 'DONT WORK!'
// // console.log(test);
// const a = new Date().getMilliseconds()
// console.log();
// switch (color) {
//     case 'red':
//         console.log('STOP!!!')
//         break;
//     case 'yellow':
//         console.log('READY !!!')
//         break;
//     case 'green':
//         console.log('GO !!! || RUN !!!')
//         break;
//     default:
//         console.log('BE CAREFULL !!!')
// }
// const b = new Date().getMilliseconds();

// console.log(b - a);



////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const notification = "hello";
// alert(notification);

// const message = confirm("please confirm that your are an administrator");
// console.log(message);

// const numbersOfMembers = prompt("please enter numbers of members");
// console.log(numbersOfMembers);
// console.log(typeof numbersOfMembers);



// const x = 5;
// const y = 10;

// console.log(x>y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x==y);
// console.log(x!=y);
// console.log(x!==y);


// const value1 = "125.548nhgh165468.knosbnuvb";
// console.log(Number(value1));
// console.log(Number.isNaN(value1));
// console.log(Number.parseInt(value1));
// console.log(Number.parseFloat(value1));

// const value = 1.1;
// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));
// console.log(Math.max(10,48, 12, 5));
// console.log(Math.min(10,48, 12, 5));
// console.log(Math.pow(5, 2));
// console.log((Math.random()*(100-1) + 1).toFixed(0));



// const message = "Welcome to Bahamas!";

// console.log(message.length);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message.indexOf("t"));
// console.log(message.includes("to"));
// console.log(message.replace("to", "in"));


// const base = Number(prompt("Please enter the base"));
// const step = Number(prompt("Please enter the step"));

// console.log(Math.pow(base, step));

// console.log((Math.random() * (100 - 1) +1).toFixed(0));

// const colors = ['blue', 'orange', 'red', 'pink', 'green'];

// const max = colors.length - 1;
// const min = 0;

// const index = (Math.random() * (max - min) + min).toFixed(0);

// const color = colors[index];
// console.log(color);

// document.body.style.background = color;

// const productName = "Repair droid";

// console.log(productName.slice(4, productName.length));
// console.log(15 && 25 && "" && "Hello");

// console.log(15 || 25);
// console.log(15 || "");
// console.log(0 || NaN);



// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canChatBeOpened = isOnline && isFriend && !isDnd;
// console.log(canChatBeOpened);

// let sub = 'vip';

// const canWatch = sub === 'pro' || sub === 'vip';
// console.log(canWatch);

// if (sub === 'pro'){
//     console.log('You can watch this chanel')
// } else {
//     console.log('You can not watch this chanel')
// };



// const message = sub === 'pro '? 'You can watch this chanel': 'You can not watch this chanel';
// console.log(message);


// const balance = 1000;
// const payment = 700;


// alert(`Total sum of the order is ${payment}`);
// if(payment <= balance){
//     alert(`On your account ${balance - payment}`)
//     alert("success")
// } else {
//     alert("There is no enougth money on your account")
// };

// const totalSpent = 2000;
// const payment = 500;
// let discount = 0;
// let message= "";


// if (totalSpent >= 100 && totalSpent < 1000){
//     discount = "2%";
//     alert(message = `There is order for ${ (payment -(payment * Number.parseInt(discount)) / 100)} $ with discount ${discount} `);
// } else if(totalSpent >= 1000 && totalSpent < 5000){
//     discount = "5%";
//     alert(message = `There is order for ${ (payment -(payment * Number.parseInt(discount)) / 100)} $ with discount ${discount} `);
// } else if (totalSpent >= 5000){
//     discount = "10%";
//     alert(message = `There is order for ${ (payment -(payment * Number.parseInt(discount)) / 100)} $ with discount ${discount} `);
// }
// else {
//     alert(message = `There is order for ${payment} $ with discount ${discount} `);
// // };



// const  stars = 4;
// let price = 0;

// switch(stars){
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price =30;
//         break;
    
//     case 3:
//         price = 40;
//         break;

//     case 4:
//         price  = 50;
//         break;

//     case 5:
//         price = 60;
//         break;

//     default:
//         console.log("the number of star is incorrect");
// };
// console.log(price);

// const option = "courier";
// let time;

// switch(option){
//     case "self":
//         time = "You can take your order tomorrow afternoon";
//         break;

//     case "courier":
//         time = "Tomorrow from 9am till 6pm courier will bring you an order";
//         break;

//     case "post":
//         time = "The order will be sent to you you today";
//         break;

//     default:
//         time = "Our manager will contact in the closest time"
// };
// console.log(time);


// console.log(159%9);


// for (let i = 3; i <= 10; i+=2){
//     console.log(i);
// }

// const employees = 10;
// let salary = 0;
// let totalSalary = 0;
// const min = 500;
// const max = 5000;

// for(let i = 0; i<=employees; i+=1){
//     salary = Math.round((Math.random() *(max - min) + min));
//     console.log(salary);
//     totalSalary += salary;
// }
// console.log(totalSalary);


// const min = 6;
// const max = 13;
// let total = 0;

// for(let i = 6; i <= 13; i+=1) {
// if(i % 2 !== 0){
//     total += i;
// }
// }
// console.log(total);


// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//   if(totalSpent >= 50000){
//     discount = GOLD_DISCOUNT
//   } else if (totalSpent >= 20000 && totalSpent < 50000){
//     discount = SILVER_DISCOUNT
//   } else if (totalSpent >= 5000 && totalSpent < 20000){
//     discount = BRONZE_DISCOUNT
//   } else if(totalSpent < 5000){
//     discount = BASE_DISCOUNT
//   }
//     // Change code above this line
//     return discount;
//   }
// const random = (Math.random()* (100- 1) + 1).toFixed(0);
// console.log(random);

// console.log("1584469")


// let counter = 0;
// while (counter < 45) {
//   console.log("counter: ", counter);
//   counter += 5;
// }


// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);



// let sum = 0;

// for (let i = 0; i <= 35; i += 1) {
//   sum += i;
// }

// console.log(sum);

// for (let i = 0; i< 10; i += 1){
//     if(i === 5){
//         console.log("it is 3");
//         break;
//     }
// };

// for (let i = 1; i < 10; i += 1){
//     if(i % 2 === 0){
//         console.log(i, "парні")
//         continue;
//     }
// };

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${number}`); // 18, 29, 34
// }

