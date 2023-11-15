// let html = document.querySelector("#text")
// text.innerHTML += `${XXX[0]}`;


// let Name = {
//   name: "King",
//   firsName:"Dm",
//   baner:[
//     {name:"asus", som:100000,},
//     {name:"hp", som:500000,},
//     {name:"xbox", som:6600000,}
//   ],
//   xbox:[12, 21, 33, 34]
// }

// let XXX = [Name.name + Name.firsName]

// console.log(XXX);

// function son(a,b,c) {
//   let v = a+b+c
//   console.log(v/3);

// }
// son(2,5,8)

// let As = (num1, num2) => {
//   return `\nMy age ${num1+num2} ok :)`
// }
// let dd = As(12,32)

// function Ad(name) {
//   return `Hi ${name} wassap nega`
// }
// let na = Ad("Jamshid")

// console.log(na,dd);

// console.log([1,2,3].reduce((ac, cu) => ac + cu))

// function som(num) {
//   return num
// }
// let Do = som([
//   {name:"Alisher", age:18, Status:"development"},
//   {name:"Jamshidi", age:17, Status:"development"},
//   {name:"Aziz", age:16, Status:"bomj"}
// ])

// Do.map((Aa) => {
//   console.log(Aa.name.toUpperCase());
// })

// let Son = ['abc:123', "sss:456"]
// function tailSwap(arr) {
//   if (arr[0].length > 0 && arr[1].length > 0) {
//     let [son1, son2] = arr

//     let [letter1, digit1] = son1.split(":");
//     let [letter2, digit2] = son2.split(":");

//     let Num1 = digit1
//     let Num2 = digit2

//     digit2 = Num1
//     digit1 = Num2

//     arr[0]=`${letter1}:${digit1}`
//     arr[1]=`${letter2}:${digit2}`

//     console.log(arr);
//   }
//   else{
//     console.log('error');
//   }

//   // your code here
//   return arr;
// }
// tailSwap(Son)

// function countSheeps(sheep) {
//   sheep.map((arr) => {
//     if (arr) {
//       let Son = [arr]
//       console.log(Son.length);
//     }
//   })
// }
// countSheeps([true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true])

// function checkAlive (health) {
//   return health <= 0 ? false : true
// }
// console.log(checkAlive(-8));

// [1,"2",'as','1221g'].forEach(a => console.log(a))

// let e = n => n ? "Odd" : "Even"

// console.log(e(1));

// let arr = [
//   {name:"Alisher"},
//   {name:"Jamshud"},
//   {name:"Sasuke"},
//   {name:"Naruto"},
// ]
// let Name = arr.filter((el) => {
//   return el.name !== "Sasuke"
// })
// console.log(Name);

// let Name = ["alisher", "jamshid", "akhmad"]

// for (let el of Name) {
//   console.log(el);
//   for (let i = 0; i < el.length; i++) {
//     console.log(el[i]);
//   }
// }

// let arr = ["Alisher",  "Jamshud" ]

// console.log(arr.indexOf("Jamshud"));

// let Arr = {
//   Plus: function(x,y){
//     return x+y
//   },
//   Minys: function(x,y){
//     return x-y
//   }//metod
// }
// console.log(Arr.Minys(12,21));

// const countSheeps = sheep => sheep.filter(Boolean).length

// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]));

// let person = {
//   first:"Ali",
//   name:"sher"
// }

// person.Name = person.first + person.name

// console.log(person);

// const obj = {
//   name:'ALi',
//   Start(x,y){
//     return x-y
//   }
// }

// const arr = {
//   name:'Sher',
//   obj:obj.Start
// }

// arr.XXx = obj.Start

// console.log(arr.obj(12,32));

// let Todo1 = (c) => {
//   let arr = []
//   for (let i = 1; i <= c; i++) {
//     if (i%2 == 0) {
//       arr.push(i)
//     }
//   }
//   return arr
// }
// let Todo2 = (c) => {
//   let arr = []
//   for (let i = 1; i <= c; i++) {
//     if (i%2 == 1) {
//       arr.push(i)
//     }
//   }
//   return arr
// }
// let Todo3 = (c) => {
//   let arr = []
//   for (let i = 1; i <= c; i++) {
//     if (i%3 == 0) {
//       arr.push(i)
//     }
//   }
//   return arr
// }

// let Son = 190

// console.log(Todo1(Son));
// console.log(Todo2(Son));
// console.log(Todo3(Son));

// function Son(n) {
//   let Min = n.filter((ch) => {
//     return ch%2 == 0
//   })
//   let Max = n.filter((ch) => {
//     return ch%2 == 1
//   })
//   return [Math.min(...Min),Math.max(...Max)]
// }
// let Finishing = [9,8,7,5,4]
// console.log(Son(Finishing));

// function oddOrEven(arr) {
//   return arr.reduce((a,b) => a+b,0) % 2 ? "odd" : "even"
// }
// console.log(oddOrEven([0, 1, 7]));

// let Son = 0
// while (Son < 9){
//   Son ++
//   console.log(Son);
// }

// function solution(str){
//   let arr = []
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str.slice(6,7))
//   }
//   console.log(arr);
// }
// solution('Alisher')

// function Num(n,l) {
//   let str1 = String(n)
//   let str = String(l)

//   let m1 = 0
//   for (let char of str1) m1 += +char

//   let m = 0
//   for (let char of str) m += +char

//   return m1 < m ? m : m1
// }
// console.log(Num(999,190));

// function twoSort(s) {
//   s.filter((el) => {
//     for (let i = 0; i < el.length; i++) {
//       let arr = `${el[i]}***`
//       console.log(arr);
//     }
//   })
// }
// twoSort(["bitcoin", "Alisher"])

// let data = {
//   "english":"Welcome",
//   "czech":"Vitejte",
//   "danish":"Velkomst",
//   "dutch":"Welkom",
//   "estonian":"Tere tulemast",
//   "finnish":"Tervetuloa",
//   "flemish":"Welgekomen",
//   "french":"Bienvenue",
//   "german":"Willkommen",
//   "irish":"Failte",
//   "italian":"Benvenuto",
//   "latvian":"Gaidits",
//   "lithuanian":"Laukiamas",
//   "polish":"Witamy",
//   "spanish":"Bienvenido",
//   "swedish":"Valkommen",
//   "welsh":"Croeso",
// }
// function greet(language) {
//   return data[language] || 'Welcome'
// }
// console.log(greet('rgsrrgsfgbsfgvsd'))



// var replaceDots = function(str) {
//   return str.replace(/\./g, '-');
// }
// console.log(replaceDots("one.two.three"));


// function doubleInteger(i) {
//   return Math.floor(i*2);
// }
// console.log(doubleInteger(12.32));



// function sumNoDuplicates(arr) {
//   let count = {}
//   let result = 0
//   for (let el of arr) {

//     count[el] = (count[el] + 1) || 1
//   }
//   for(let key in count){
//     if(count[key] === 1){
//       result += Number(key)
//     }
//   }
//   return result
// }
// console.log(sumNoDuplicates([1, 1, 2, 3]));



// function sumNoDuplicates(arr) {
//   let uniqueArr = [];
//   let sum = 0;
//   arr.forEach(num => {
//       if (arr.indexOf(num) === arr.lastIndexOf(num)) {
//           uniqueArr.push(num);
//           sum += num;
//       }
//   });
//   return sum;
// }



// function solution(str, ending){
//   return str.endsWith(ending);
// }
// console.log(solution('abcde', 'e'));



// class Programer {
//   constructor(name, age){
//     this.name = name
//     this.age = age
//   }
// }
// class White extends Programer{}

// const Dev = new Programer('Ali' ,12)
// console.log(Dev.Lol());


// function longestWord(str){
//   return str.split(' ').sort((b, a) => b.length - a.length).pop();
// }
// console.log(longestWord('a r c d e fgh')) 


// function ghostBusters(building) {
//   return /\s/.test(building) ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?";
// }
// console.log(ghostBusters("Factor y"));


// function getLargerNumbers(a, b) {
//   let newArray = []
  
//   return newArray;
// }
// console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));



// class Car {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     years(year) {
//         return year - this.age
//     }
// }
// class colors extends Car {
//     constructor(name, age, color){
//         super(name,age)
//         this.color = color
//     }
// }

// let data = new Date()
// let yeasrin = data.getFullYear()

// let color = new colors("bmw", 2003, 'red')
// let bmw = new Car('BMW', 2010)
// let Tayota = new Car('SUPRA', 2006)
// console.log(color);


// let text = ''
// let i = 0
// do {
//     text += "number is " + i+'\n';
//     i++;
// }
// while (i < 10); 
// console.log(text);



// let xx = { ali:'al', age:18 }
// for (let obj of Object.values(xx)) {
//     console.log(obj);
// }



// class Users {
//     constructor(name, age, status){
//         this.name = name
//         this.age = age
//         this.status = status
//     }
//     get(){
//         return {
//             name: this.name,
//             age: this.age,
//             status: this.status
//         }
//     }
// }

// class UserBig extends Users{
//     constructor(name, age, status, klass){
//         super(name, age ,status)
//         this.klass = klass
//     }
// }

// let Todo = new UserBig('Jamshid', 16, 'batan', "1-b")
// console.log(Todo.get());





// async function promis() {
//     try{
//         let mn = await menuOpen(12)
//         console.log(mn);
//     }catch (error){
//         console.error(error);
//     }
// }
// promis()

// // menuOpen(12)
// // .then((log) => console.log(log))
// // .catch((error) => console.log(error))

// function menuOpen(number) {
//     return new Promise((resolve, reject) => {
//         let FileAdd = () => {
//             let random = Math.floor(Math.random()*number)
//             if (random > number/2) {
//                 resolve('perfect')
//             }
//             else{
//                 reject(Error())
//             }
//         }
//         setTimeout(FileAdd,1000)
//     })
// }





// function toobson(son) {
//     let booliam = true
//     let index = son
//     while (booliam) {
//         if (del(index+1).length == 2) {
//             booliam = false
//         }
//         index++
//     }
//     return index
// }
// function del(son) {
//     let result = []
//     for (let i = 1; i <= son; i++) {
//         if (son%i == 0) {
//             result.push(i)
//         }
//     }
//     return result
// }
// console.log(toobson(9));


function findDup( arr ){
    const son = []
    const result = []
    arr.map((el) => {
        if (son.includes(el)) {
          return result.push(el)
        }
        son.push(el)
    })
    return result[0]
}
findDup([1,2,2,3])


