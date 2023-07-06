// const clients = ["Mango", "Poly", "Ajax", "Kiwi", "Mira"];
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

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
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

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.table(clients);
// clients[1] = "Mira";
// console.log(clients);
// console.log(clients.join("--"));
// console.log(clients.indexOf("Poly"));
// console.log(clients.includes("Mango"));

// clients.push("Apple");
// console.log(clients);

// clients.pop();
// console.log(clients);

// clients.shift();
// console.log(clients);

// clients.unshift("Milla");
// console.log(clients);


// for(let i = 0; i < clients.length; i+=1){
//     console.log(clients[i])
// };


// for (const client of clients){
//     console.log(client)
// };


// const carts =[5, 15, 39, 26, 91, 120, 54];
// let total = 0;
// for(let i = 0; i < carts.length; i+=1){
//     total += carts[i]
// };
// console.log(total);

// for(const cart of carts){
//     total += cart;
// };

// console.log(total);

// for(let i = 0; i < carts.length; i+=1){
//     if(carts[i]%2 !== 0){
//         continue
//     }
//     total += carts[i];
// };
// console.log(total);


// const numbers =[59, 15, 39, 26, 91, 120, 54];
// let smalestNumber = numbers[0];
// let biggestNumber = numbers[0];
// for(const number of numbers){
//     if (number < smalestNumber){
//         smalestNumber = number;
//     }
    
//     if (biggestNumber < number){
//         biggestNumber = number;
//     }
// }
// console.log(smalestNumber)
// console.log(biggestNumber);


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.join(","));

// const string = "JavaScript";
// let letters = string.split("");
// let invertedString ="";
// console.log(letters);
// for(const letter of letters){
//     invertedString +=
//     letter === letter.toLowerCase()
//     ?letter.toUpperCase()
//     :letter.toLowerCase()



// //     if(letter === letter.toLowerCase()){
// //         invertedString += letter.toUpperCase()

// //     } else{
// //         invertedString +=letter.toLowerCase()
// //     }
//     }

// console.log(invertedString)


// const title = "Top 10 dresses for the firs date with Mr. S";
// let url = "https://" + title.toLowerCase().split(" ").join("/");
// console.log(url);

// const firstArray = [12, 36, 52, 48];
// const secondArray = [24, 45, 19];

// let allNumbers= firstArray.concat(secondArray);

// let sum = 0;

// for(const number of allNumbers){
//     sum += number
// }
// console.log(sum);


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// const deleted = clients.splice(1, 2);
// console.log(clients);

// const added = clients.splice(2, 0, "Mikkey", "Rosa");
// console.log(clients);

// const replaced = clients.splice(1, 2, "Mars", "Rimma")
// console.log(clients);


// const values = "8 11";
// const numbers = values.split(" ");
// let area = 1;
// for(const number of numbers){
//     area *= Number(number)
// }
// console.log(area);

// function multiply() {
//     let total = 1;

//     for(const argument of arguments){
//         total*= argument
//     }

//     return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120


// const allLogins = ["avocado", "strawberry", " rasberry", "apple", "peach"];

// const findLogin = function (logins, loginToFind){

// for(const login of logins){

//     return login === loginToFind
//     ? "Login accepted. Wellcome!" 
//     :"Login is uncorrect. Please try again";

//     // if(login === loginToFind){
//     //     return "Login accepted. Wellcome!"
//     // }
//     // if(login !== loginToFind){
//     //     return "Login is uncorrect. Please try again"
//     // }
// }

// }

// console.log(findLogin(allLogins, "avocado"));
// console.log(findLogin(allLogins, "pineapple"));
// console.log(findLogin(allLogins, "apeach"));
// console.log(findLogin(allLogins, "grape"));


// const numbers = [15, 58, 23, 19, 156, 35, 2];
// let smallestNumber = numbers[0];


// const findSmallestNumber = function (numbers,){
//     for(const number of numbers){
//         if(smallestNumber > number){
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber
// };
// console.log(findSmallestNumber(numbers));


// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";
// const changeRegister = function (letters, invertedString){
//     for(const letter of letters){
//         invertedString +=
//         letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
//     }
//     return invertedString;
// }

// console.log(changeRegister(letters, invertedString));
// console.log(letters)



// const findUniqueNumber = function (array, ...args){
//     const newArray = [];
//     for(const element of array){
//         if(args.includes(element)){
//             newArray.push(element)
//         }
//     }
//     return newArray;
// }

// console.log(findUniqueNumber([1,48,65, 200,159,25], 59, 1, 360, 25, 65));
// console.log(findUniqueNumber([21,58,69,3,25,15], 3, 54, 12, 39, 81) );
// console.log(findUniqueNumber([91,54,30,201,356], 15, 14, 1, 29, 201, 15, 32, 91));


// function getExtremeElements(array) {
//     // Change code below this line
//    const newArray = [];
//     const firstElement = array[0];
//     const lastElemnt = array[array.length-1];
//     newArray.push(firstElement, lastElemnt);
//     return newArray

//     // Change code above this line
//   }

//   console.log(getExtremeElements([1, 2, 3, 4, 5]))



// const array = [ 2, 24, NaN, [1,5,6], 28, true,];

// function findOnlyNumbers(array){
//     const onlyNumbers = [];
    
//     for(const element of array){
//         if (typeof element === 'number'){
//             onlyNumbers.push(element);
//         };
//     }
//     return onlyNumbers;
// }
// console.log(findOnlyNumbers(array))



// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }
  
//   count(1, 5); // countFrom = 1, countTo = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(); // countFrom = 0, countTo = 10, step = 1


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if(totalSpent >= 50000){
//   discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 && totalSpent < 500000){
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent < 20000){
//   discount = BRONZE_DISCOUNT;
// } else{
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// getDiscount(20000);

// function findLongestWord(string) {
//   // Change code below this line
// let array = string.split(" ");
// for(let i = 0; i< array.length; i += 1){
//   // console.log(array[i])
//   if (array[0].length < array[i].length){
//     array[0] = array[i]
//   } 
  
// }
// console.log(array[0]);
// return array[0];
  
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")
// findLongestWord('Google do a roll') 


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const values = [];
// for(const product of products){
//   const keys = Object.keys(product);
//   for (const key of keys){
//     if (key === propName){
//       values.push(product[key])
//     }
//   }
// }
//     return values;
// }



//   // Change code above this line
// getAllPropValues("quantity")
// getAllPropValues("price")



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
// for (const product of products){

//   if(product.name === productName){
//     totalPrice = product.price * product.quantity
//   }
//   console.log(totalPrice)
//   return totalPrice;

//   }
// }


//   // Change code above this line

// calculateTotalPrice("Blaster")
// calculateTotalPrice("Radar")


// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, makePizza, onOrderError) {
  
//       const {pizzas} = this;
//       if( pizzas.includes(pizzaName)){
//         console.log(makePizza(pizzaName));
//            } else {
//         console.log(onOrderError(`There is no pizza with a name ${pizzaName} in the assortment`))
//            }
//     },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order("Smoked", makePizza, onOrderError);
//   pizzaPalace.order("Four meats", makePizza, onOrderError);
//   pizzaPalace.order("Big Mike", makePizza, onOrderError);
//   pizzaPalace.order("Vienna", makePizza, onOrderError);
  