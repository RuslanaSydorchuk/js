const clients = ["Mango", "Poly", "Ajax", "Kiwi", "Mira"];
// console.log(clients);

// clients[2] = 'Miya';
// console.log(clients);

// for (let client of clients)
// console.log(client);

// console.log(clients.length)

// for(let i = 0; i < clients.length; i+=1){
//     console.log(clients[i])
// }

// const name = "Mango";
// console.log(name.split(""));

// const message = "JavaScript - це цікаво";
// console.log(message.split(" "));

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("--"))

// console.log(clients.indexOf("Poly"));

// console.log(clients.includes("Rima"));

// clients.push("Molly");
// console.log(clients);

// clients.pop();
// console.log(clients);

// clients.unshift("Molly");
// console.log(clients);

// clients.shift()
// console.log(clients);

// console.log(clients.slice(0, 3));

// console.log(clients.splice(0, 3));

// clients.splice(1, 0, "Sony");
// console.log(clients);

// clients.splice(2, 1, "Rita");
// console.log(clients);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients)







// Мутабельні та імутабельні типи даних
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable
// const clients = ["Mango", "Poly", "Ajax"];
// const string = "script";
// console.log(string[0]);
// string[0]='a';
// console.log(string);
// console.log(clients[0])
// clients[0] = 'Kiwi';
// console.log(clients);

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами Jazz і Blues.
// Додайте "Rock'n'roll" в кінець.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];
// genres.push("Rock'n'roll");
// console.log(genres[0]);
// console.log(genres[genres.length-1]);
// console.log(genres.shift());
// genres.unshift("Country", "Reggae")
// console.log(genres)

// console.log(genres.splice(0, 1));
// genres.splice(0, 1, "Country", "Reggae");
// console.log(genres);


// const genres = ['Jazz', 'Blues'];
// push додає елемент в кінець масиву
// genres.push("Rock'n'roll");
// console.log(genres);
// console.log(genres[0]);
// console.log(genres.length);
// console.log(genres[genres.length - 1]);
// splice він видаляє елемент з масиву та в результаті свого виконання повертає те що видалив
// const firstEl = genres.splice(0,1)
// console.log(genres);
// console.log(firstEl);
// genres.unshift('Country')
// console.log(genres);
// genres.splice(0,1,'Country','Reggae')
// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, 
// значення яких зберігаються в змінній величині у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const div = values.split(" ");
// const length = Number(div[0]);
// const width = Number(div[1]);
// const square = length * width;
// console.log(`Площа ${square}`);


// const values = '8 11';
// const arr = values.split(' ')
// console.log(arr);
// const value1 = Number(arr[0]);
// const value2 = Number(arr[1]);
// // console.log(typeof value1, typeof value2);
// const sum = value1 * value2;
// console.log(`Площа ${sum}`);

// Запитання з чату
// Розкажіть доступніше про "Присвоение по ссылке и по значению" почему переменная "b" то принимает значение "a"  то нет, выражение одинаковое...

// let a = 10;
// console.log('a', a);
// let b = a;

// a = 25;
// console.log('a', a);
// console.log('b', b);


// const a = [1, 2, 3]
// const b = a;
// a.splice(1, 1)

// b.splice(0,1)
// console.log('a', a);
// console.log('b', b);

// Чи викоритовується "let" для  оголошення змінних масиву
// const a = [1, 2, 3];


// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведіть у консоль рядок у форматі 
// номер_елемента: значення_елемента. Нумерація елементів має починатися з першого.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for(let i= 0; i <fruits.length; i +=1){
//    console.log(`Елемент № ${i+1}: ${fruits[i]}`)
// }

// for(let i = 0; i < fruits.length; i+=1){
// console.log(`Елемент номер ${i+1}: `,fruits[i]);
// }
// почему объявлять не надо намбер?

// Додатковий приклад з використанням 2 параметрів ініціалізації
// for(let i = 0, number = 1; i < fruits.length; i+=1, number+=1){
//     console.log(`Елемент номер ${number}: `,fruits[i]);
//     }

// for(let i = 0 ; i < fruits.length; i+=1){
// let fruit = fruits[i]
// fruit =`🎉`;
// console.log(fruit);
// console.log(fruit);
// fruits[i] = `🎁`
// }

// for(let fruit of fruits){
//     console.log(`Елемент ${fruit}`)
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. 
// У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами. 
// Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Kate';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const nameByName = names.split(",");
// const phoneByPhone = phones.split(",");
// for(let i = 0; i< nameByName.length; i += 1){
//     console.log(`Name ${nameByName[i]} phone number ${phoneByPhone[i]}`);
// }


// const namesToArr = names.split(',');
// const phonesToArr = phones.split(',')
// // console.log(phonesToArr);
// for (let i = 0; i < namesToArr.length; i += 1){
//     console.log(`${namesToArr[i]} номер телефону ${phonesToArr[i]}`);
// }



// Example 5 - Масиви та рядки
// Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього. 
// Результуючий рядок не повинен починатися або закінчуватися пробілом. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';

// const cuttedString =  string.split(" ");
// cuttedString.splice(0, 1);
// cuttedString.splice(cuttedString.length - 1, 1);
// console.log(cuttedString);
// const finalString = cuttedString.join(" ");
// console.log(finalString);

// const string = 'Welcome to the future';
// const stringToArr = string.split(' ');
// console.log(stringToArr);
// stringToArr.splice(0, 1);
// stringToArr.splice(stringToArr.length - 1, 1)
// // stringToArr.splice(-1, 1)
// // stringToArr.splice(-1)
// const response =stringToArr.join(' ')
// console.log(response);



// Приклад з чату
// const fruits = ['🍎', '🍌', '🍇', '🍍'];
// for (let i = 0,amount = fruits.length; i < fruits.length; i += 1, amount -= 1) {
//     console.log(`В корзині ${amount} одиниці.`);
//     console.log(`Ми дістали ${fruits[i]}.`);
// }


// Example 6 - Масиви та рядки
// Напиши скрипт, який «розвертає» рядок (зворотній порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// const newString = string.split("").reverse().join("");
// console.log(newString);


// const string = 'Welcome to the future';
// const stringToArr = string.split('');
// const StrReverse = stringToArr.reverse().join('')
// console.log(StrReverse);
// const StrReverse = string.split('').reverse().join('');
// console.log(StrReverse);

// Example 7 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код має працювати для будь-якого масиву чисел.
//  Використовуй цикл для розв'язання задачі.

// const numbers = [101, 78, 12, 76, 5, 11, 9];
// let minValue = numbers[0];
// for(const number of numbers){
//     if(number < minValue){
//         minValue = number;
//     }
//     //  // number < minValue ? minValue = number : minValue 
// }
// console.log(minValue);





// ------------------------------------------------PART 2 ---------------------------------------------------//

// Приклади з областями видимості
// ------------------------------//
// let a = 10;

// if(true){
// let a = 5
// console.log('in local',a);
// }
// console.log('in global',a);

// ------------------------------//
// let a = 10;

// if(true){
//     a = 15;
// }
// console.log(a);

// ------------------------------//
// let a = 10;

// if(true){
//     let a = 20;
//     a = 15;
// }
// console.log(a);

// ------------------------------//
// let a = 10;

// if (true) {
//     a = 15;
//     // let a = 25;
//     console.log('local', a);
// }
// console.log('global', a);

// ------------------------------//
// let x = 15; // примітивні типи даних
// let y = 10;

// function foo(x,y) {
//     let a = 15;
//     x = 99
//     console.log(x);
// }
// foo(x, y)
// console.log('x', x);

// let x = [1, 5]; //складні типи даних за пасиланням
// let y = 10;

// function foo(a, y) {
//     a[0] = 99
// }
// foo(x, y)
// console.log('x', x);

// let x = [1, 5]; //складні типи даних за пасиланням

// const a = x;
// x.splice(0,1)
// console.log(a);
// console.log(x);

// let a = 15;

// let b =a;

// a += 15

// console.log('a',a);
// console.log("b",b);



// const a = 20;
// console.log(a); // 20


// if (i === 2) {
//   const b = 30;
//   console.log(a); // 20
//   console.log(b); // 30
// }

// if (i === 3) {
//   console.log(a); // 20

//   // ❌ Ошибка! Переменная b не доступна в этой области видимости
//   console.log(b);
// }


// const a = 20;
// console.log(a); // 20

// if (i === 2) {
//   const b = 30;
//   console.log(a); // 20
//   console.log(b); // 30
//   if (i === 3) {
//     console.log(a); // 20
//     console.log(b); // 30
//   }
// }

// Створення та види функцій

// function expression
// викликається тільки після оголошення
// const foo = function (a, b) {
//     return a + b
// }
// console.log(foo(3, 4));



// function declaretion

// function boo(a, b) {
//     return a + b
// }
// console.log(test(11,24));
// const test = boo;

// console.log(test(11,24));

// console.log(test);
// console.log(boo(5,6));
// console.log(boo(4,2));


/// arguments
//  Порахувати суму всіх чисел

// function getSum (){
// // console.log(arguments);
// // const arr = Array.from(arguments)
// // console.log(arr);
// // let sum = arguments[0];
// // for(let i = 1; i < arguments.length; i+=1){
// //     sum*=arguments[i];
// // }
// let sum = 1;
// // console.log(sum);
// for(const argument of arguments ){
//     sum*=argument
//     // console.log(argument);
// }
// return sum
// }

// console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8));
// console.log( getSum(44, 5, 14, 3));


// Стек викликів


// function foo(){
//     console.log('Hello');
//     boo()
//     console.log('qwerty');
// }

// function boo(){
//     console.log('world');
// }
// foo()


// function foo(){
//     console.log('foo before');
//     boo()
//     console.log('foo after');
// }


// function boo(){
//     foo()
//     console.log('boo');
// }

// foo()


// Створити функцію яка буде сортувати елементи масиву та повертати в результаті виконання масив тільки числових значень
// function onlyNumbers(arr){
//     const numbers = [];
//     for (const item of arr) {
//     // if (typeof item === 'number' && !isNaN(item)) {
//     //     numbers.push(item)
//     //     }
        
//     typeof item === 'number' && !isNaN(item) ? numbers.push(item) : null;
//         }
//     return numbers;
// }

// console.log(onlyNumbers([33, 15, false, NaN, -22]))
// const result = onlyNumbers(['21', true, 12, [1, 2], 27, 19, null, 17])
// console.log(result);

// Напишіть функції для роботи з колекцією навчальних курсів courses:
// 1 addCourse(name) - додає курс в кінець колекції
// 2 removeCourse(name) - видаляє курс з колекції
// 3 updateCourse(oldName, newName) - замінює назву на нову
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express'];
    // function addCourse(newCourse){
    //     courses.push(newCourse)
    //     return courses;
    // }

    // console.log(addCourse("C++"));

    // function removeCourse(name){
    //     const index = courses.indexOf(name)
    //     courses.splice(index, 1)
    //     return courses;
    // }

    // console.log(removeCourse("Node"));



    // function addCourse(name) {
//     console.log(name);
//     if (courses.includes(name)) {
//         console.log('Ви вже маєте данний курс');
//         return;
//     }
//     courses.push(name)
//     // console.log(courses);
//     return courses;
// }

// Оператор ~ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// function removeCourse(name) {
//     const idx = courses.indexOf(name)

//     if (idx === -1) {
//         console.log('Курс з такою назвою не знайдено');
//         return;
//     }
//     courses.splice(idx, 1)
//     console.log(courses);

// }

// function updateCourse(oldName, newName) {
//     if(!courses.includes(newName)){
//         console.log('Курс з такою назвою не знайдено');
//     }
// const insexOfElement= courses.indexOf(oldName);
// courses.splice(insexOfElement, 1, newName);
// return courses;
// }


// function updateCourse (oldName, newName){
//     const inArr = courses.includes(oldName);
//     if(!inArr){
//         console.log('Курс з такою назвою не знайдено');
//         return;
//     }
//     console.log(courses);
//     const idx = courses.indexOf(oldName);
//     courses.splice(idx,1,newName)
//     console.log(courses);


// }

// console.log();
// console.log();
// console.log();



// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте данний курс'

// removeCourse('HTML');
// removeCourse('React');
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс з такою назвою не знайдено'

// console.log(updateCourse('Express', 'NextJS'))
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NextJS']
// updateCourse('Angular', 'NestJS'); //'Курс з такою назвою не знайдено'

