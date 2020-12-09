"use strict";


// 4 lesson
// let number=5;
// let NUmber=6;
// const leftBorderWidgth=1;
//  number=10;
//  console.log(number);
//  const obj={
//     a:50
// };
// obj.a=10;
// console.log(obj);
// {
//     let result=50;
// }

//5-7 lesson
// let number = 4.6;
// console.log(-4 / 0);
// console.log('string' * 9);
// const persone = "Alex";
// const bool = true;

//  const obj = {
//      name: "John",
//     age: 25,
//      isMarried: false,
//  };
//   console.log(obj.name);
// // console.log(obj["name"]);
// let arr=['plum.png', 'orange.png', 6, 'apple.bmp',[],{}];
// console.log(arr[2]);


//alert('Hello');
// const result=confirm('Are you here?');
// console.log(result);

// const answer=+prompt('вам есть 18?', '18');
// console.log(answer+5);

//const answers=[];

// answers[0]=prompt('Как ваше имя?','');
// answers[1]=prompt('Как ваша фамилия?','');
// answers[2]=prompt('Сколько вам лет?','');

// console.log(typeof(answers));
// console.log(typeof(null));


//8 lesson
// const category='toys';

// console.log(`https://someurl.com/${category}/5`);

// const user='Ivan';
// alert(`Привет, ${user}`);


//9 lesson
//унврный плюс - это плюс котроый ставится перед чем-то 
// console.log('arr' + '- object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// // incr++;
// // --decr;
// console.log(++incr);//11
// console.log(--decr);//9
// console.log(incr++);//10
// console.log(decr--);//10

// console.log(5%2);

// console.log(2 + 2 * 2 != 8);
// console.log(2*4 === '8');

// const isChecked=true,
// isClose=false;

// console.log(isChecked && isClose);
// console.log(isChecked || isClose);
//

// 13 lesson
// if (1) {
//     console.log('Ok!');
// } else{
//     console.log('Error');
// }



// if (num < 49) {
//     console.log('Error');
// } else if(num>100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('Error');

// const num=100;

// switch (num){
//     case 49:
//         console.log('неверно');
//         break;
//     case 50:
//         console.log('Ok!');
//         break;
//     case 100:
//             console.log('неверно');
//             break;
//     default:
//         console.log('не в этот раз');
//         break;


// }

//14 lesson

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for(let i = 1; i < 10; i++) {
//     if(i== 6)
//     {
//         //break;
//         continue;
//     }
//     console.log(i);

// }


// 16 lesson
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);


// }

// showFirstMessage('Hello World!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;

//     //


//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log('Hello!');
// };

// logger();

// const calc1 = (a, b) =>a + b;
// const calc2 = (a, b) =>{
//     console.log("1");
//     return a+b;
// };


//17 lesson

// const str='teSt';
// const arr=[1,2, 4];

// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));

// const logg='Hello world';

// console.log(logg.slice(6,11));

// console.log(logg.substring(6,11));

// console.log(logg.substr(6,5));

// const num=12.2;
// console.log(Math.round(num));

// const test='12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));



//19 lesson
//callback функции
// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     },500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу : ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);

//20 lesson
//Обьекты диструктуризицая обьектов 

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// console.log(Object.keys(options).length);
// options.makeTest();

// const {border, background} = options.colors;
// console.log(border);
// console.log(options.name);

// // delete options.name;
// // console.log(options);
// let counter= 0;
// for (let key in options) {
//     if(typeof(options[key])==='object') {
//         for(let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
      
//         }
//     } else {
//     console.log(`Свойства ${key} имеет значение ${options[key]}`);
    
//     }
// }
// for (let key in options) {
//     counter++;
// }

// console.log(counter);
