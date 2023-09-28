// console.log('hello');
// alert('hello');

//  let age = prompt('Сколько тебе лет?', 100);

//  alert(`Тебе ${age} лет!`); // Тебе 100 лет!

// const string = 'hello';
// const number = 2;
// const boolean = true;
// const isNull = null;
// const isUndegined = undefined;

// const a = 1;
// let b = 1;
// var c = 3;

// +
// -
// =
// ==
// ===
// !=
// !==
// >
// <
// >=
// <=
// &&
// ||


// if (a == 1) {
//     console.log('YRA');
// } else if (a == 2) {
//     console.log('NO YRA');
// }

// a = 10;
// b = 12;
// console.log(b);
// b = 24;

// console.log(a);
// console.log(b);



// function sayWord(word) {
//     let newWord = null;
//     if (word === 'hello') {
//         newWord = word;
//     }
//     console.log(newWord);
// }

// sayWord('hello');

// console.log(window.document);

// const redDiv = document.getElementById('firstDiv');

// const secondDiv = document.getElementsByClassName('secondDiv');

// secondDiv[3].style.color = 'red';

// if (a === 1) {
//     secondDiv.style.backgroundColor = 'blue';
// } else if (a === 2) {
//     secondDiv.style.width = '100px'
// }


// console.log(2 - '1'); number
// console.log(2 + '1'); string
// console.log(2 - 1); number
// console.log(2 - 1); number
// console.log(2 - 'asdasd'); NaN

// const human = {
//     name: 'Yarik',
//     age: '19',
//     hasGirlfried: false,
//     skills: {
//         job: 'homeOfice',
//         likeDog: true,
//     }
// }

// const womman = {
//     name: 'Sonia',
//     age: '23',
//     hasBoyfried: true,
// }

// const { name, age, hasGirlfried } = human; //DESTRUCTURE
// const { job, likeDog } = human.skills; //DESTRUCTURE


// womman.newAge = 25;

// console.log(womman);

// delete womman['newAge'];

// console.log(womman);

// console.log(job, likeDog);



// console.log(Object.keys(human));
// console.log(Object.values(human));
// console.log(Object.entries(human));

// Object.freeze(human);

// human.name = 'Slavik';

// console.log(human);


// const array = [human, womman];

// const numberArra = [2, 3, 5, 7, 1];
// const alphabetArray = ['b', 't', 'z', 'a'];
// const array = [];

// const newArray = array.map((el) => {
//     return el.hight = 20;
// });

// const filter = array.filter((el) => el.name == 'Yarik')

// console.log(filter);

// const sort = alphabetArray.sort((a, b) => b - a);
// const sort = alphabetArray.sort((a, b) => a - b);
// const sort = alphabetArray.sort();

// numberArra.push(12);
// numberArra.push(16); ADD ELEMENTS TO ARRAY

// numberArra.pop(); delete last el

// numberArra.shift(); // delete fist number of array
// numberArra.unshift(1); // add elem on first position in array

// console.log(numberArra);

let firstword = "hello";
let secword ="owu";
let thirdword ="com";
let fourthword ="ua";
const firstnum = 1;
const secnum = 10;
const thirdnum = -999;
const fourthnum =123;
const fifthnum = 3.14;
const sixthnum = 2.7;
const seventhnum = 16;
const firstboolean = true; 
const secboolean = false; 

console.log(firstword, secword, thirdword, fourthword);
console.log(firstnum, secnum, thirdnum, fourthnum, fifthnum, sixthnum, seventhnum);
console.log(firstboolean, secboolean);

const fstring = "Ya tut";
const secstring = "Wiwi";
const thirdstring ="Goku";
const numberf = 9356;
const numbers = 3750;
const numberthird = 1029;

console.log(numberf, numbers, numberthird);

// let Fname = prompt("What's your name?", "Yarik");

// alert(`Your name is ${Fname}`);

// let Sname = prompt("What's your second name?", "Yakymyshyn");

// alert(`Your second name is ${Sname}`);

// let fathName = prompt("What's your father name?", "Orestovich");

// alert(`Your fathers name is ${fathName}`);


// const person ={
//     Fname, Sname, fathName
// };

// console.log(person); 

// let motherName = prompt("What's your mothers name?", "Orysia");

// alert(`Your mother name is ${motherName}`);

// let motherSecName = prompt("What's your mothers second name?", "Yakymyshyn");

// alert(`Your mother second name is ${motherSecName}`);

// let motherFName = prompt("What's your mothers fathers name?", "Zenoviivna");

// alert(`Your mother fathers name is ${motherFName}`);

// const mother ={
//     motherName, motherSecName, motherFName
// };

// console.log(mother);

// let fatherName = prompt("What's your fathers name?", "Orest");

// alert(`Your father name is ${fatherName}`);

// let fatherSecName = prompt("What's your fathers second name?", "Yakymyshyn");

// alert(`Your father second name is ${fatherSecName}`);

// let fatherFName = prompt("What's your fathers fathers name?", "Romanovich");

// alert(`Your father fathers name is ${fatherFName}`);

// const father ={
//     fatherName, fatherSecName, fatherFName
// };

// console.log(father);


// let RandomNum = prompt("Write first number: " , 0);
// RandomNum = +RandomNum;

// let SecRandomNum = prompt("Write second number: ", 0);
// SecRandomNum = +SecRandomNum;

// let ThirdRandomNum = prompt("write third number: ", 0);
// ThirdRandomNum = +ThirdRandomNum;

// let UniqueNum = RandomNum + SecRandomNum + ThirdRandomNum;

// console.log(UniqueNum);


// let RandomNum1 = prompt("Write first number: ", 0);

// let RandomNum2 = prompt("Write second number: ", 0);

// let RandomNum3 = prompt("Write third number: ", 0);

// let RandomNum4 = prompt("Write fourth number: ", 0);

// let Result = parseInt(RandomNum1) + parseInt(RandomNum2) + parseInt(RandomNum3) + parseInt(RandomNum4);

// console.log(Result)

// let RandomNum11 = prompt("Write first number: ", 0);

// let RandomNum22 = prompt("Write second number: ", 0);

// let RandomNum33 = prompt("Write third number: ", 0);


// let Result1 = parseFloat(RandomNum11) + parseFloat(RandomNum22) + parseFloat(RandomNum33);

// console.log(Result1)


// let RandomNum111 = prompt("Write first number: ", 0);

// let RandomNum222 = prompt("Write second number: ", 0);

// Result11 = Math.pow(RandomNum111, RandomNum222);

// console.log(Result11)

// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;

// console.log(typeof(a), typeof(b), typeof(c), typeof(d))


// let test1 = new Boolean(5 != 6); //-> true
// let test2 = new Boolean(5 == 6); //-> false
// let test3 = new Boolean(5 >= 6); //-> false
// let test4 = new Boolean(5 > 6); //-> false
// let test5 = new Boolean(10 == 10); //-> true
// let test6 = new Boolean(10 >= 10); //-> true
// let test7 = new Boolean(10 > 10) //-> false
// let test8 = new Boolean(10 != 10); //-> false
// let test9 = new Boolean(10 !== 10); //-> false
// let test10 = new Boolean(123 === '123'); //-> false
// let test11 = new Boolean(123 == '123'); //-> true

// console.log(test1)
// console.log(test2)
// console.log(test3)
// console.log(test4)
// console.log(test5)
// console.log(test6)
// console.log(test7)
// console.log(test8)
// console.log(test9)
// console.log(test10)
// console.log(test11)

// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

// let str = 'Привіт';
// const num = 123;
// let flag = true;
// let txt = "Шалом";

// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(flag));
// console.log(typeof(txt))

// a1 = 5 + 3;
// console.log(a1);

// a2 = 5 - 3;
// console.log(a2)

// a3 = 5 * 3;
// console.log(a3)

// a4 = 5 / 3;
// console.log(a4);

// a5 = 5 % 3;
// console.log(a5)

// a6 = 5 % 3;
// console.log(a6);

// a7 = 3 % 5;
// console.log(a7);

// a8 = 5 + '3';
// console.log(a8);

// a9 = '5' - 3;
// console.log(a9);

// a10 = 75 + 'кг';
// console.log(a10);

// height = 23;

// width = 10;

// s = height * width;

// console.log("Площа прямокутника", s, "см")

// HeightC = 10;

// dC = 4;

// v = 10 * (dC/2);

// console.log("Об'єм циліндра", v,"м");

// n = 3; //перший катет
// m = 4; //другий катет

// k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));

// console.log("гіпотенуза", "k" , "=", k )

// let txt = "Hello world";

// console.log(txt);
// document.open();
// document.write("<h1>Hello world</h1>");
// document.close();
// alert(txt);

// alert("Yarik\n Yakymyshyn\n Orestovich\n 19 Years old\n Watching anime")

// let str1 = "хто";
// let str2 = "ти";
// let str3 = "такий?";

// let concatenation = str1 + str2 + str3;

// document.open(concatenation);
// document.write(concatenation);
// document.close(concatenation);

// let str = "20";
// let a = 5;


// console.log(str + a + "<br/>"); //25Б  //PRIBAVSYA 
// console.log(str - a + "<br/>"); //15Б
// console.log(str * "2" + "<br/>"); //40б
// console.log(str / 2 + "<br/>"); //10б

// console.log(parseInt("3.14")) //3
// console.log(parseInt("-7.875")) // -7
// console.log(parseInt("435")) // 435
// console.log(parseInt("Вася")) //NAN

// let anime = prompt("which your favourite anime?", "Initial D")

// console.log(anime)


// let FirstNumber = prompt("Put your firt number" , "1");
// FirstNumber = +FirstNumber;
// let SecondNumber = prompt("Put your second number" , "2");
// SecondNumber = +SecondNumber;

// let Combination = FirstNumber + SecondNumber;
// Combination = +Combination;

// console.log(alert(Combination));

// let Name = prompt("Введіть ваше ім'я:");
// let SurName = prompt("Введіть ваше прізвище:");
// let Age = prompt("Введіть ваш вік:")

// alert(`Привіт  ${Name}  ${SurName}  , мої вітання що ви дожили до  ${Age}  років) `)

// let Num1 = promt("Enter first num:" , "0")
// let Num2 = promt("Enter second num:" , "0")
// let Num3 = promt("Enter third num:" , "0")







