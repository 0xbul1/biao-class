//  12.20========================
// console.log(1);
// var whh = {
//     name: 'whh',
//     age: 18,
//     gender: 'male',
// }
// var lsd = {
//     name: 'lsd',
//     age: 19,
//     gender: 'female',
// }
// console.log(lsd); 


// function user(name, age, gender){
//     var person = {};
//     person.name = name;
//     person.age = age;
//     person.gender = gender;
//     return person;
// }
// var whh = user('whh', 18, 'male');
// console.log('whh:',whh);


// function User(name, age, gender){
//     // var this = {}
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     // return this;
// }
// var whh = new User('whh', 18, 'male');
// console.log(whh);

// function Dog(){
//     this.age = 5,
//     this.gender = 'male';
//     this.jiao = function(){
//         console.log('wangwangwang')
//     }
// }
// var dog = new Dog();
// console.log(dog);
// dog.jiao();


// function Book(){
//     this.title = 'world';
//     this.name = 'wtf';
// }
// var book = new Book();
//     console.log(book);




// 12.21===============================================
// function User(name,age) {
//     this.name = name;
//     this.age = age;

//     this.eat = function(){
//         console.log('11111111111');
//     }
//     this.greeting = function(){
//         console.log('yo,wojiao' + this.name +'wojinnian' + this.age + 'suile');
//     }
// }   

// var whh = new User('whh', 18);
// console.log('whh:', whh);
// whh.eat();
// whh.greeting();
// var lsd = new User('lsd', 20);
// lsd.greeting();

// ==============
// function A(){}
// A.prototype.name = 'lalalal';

// var a = new A();
// var b = new A();
// console.log('a:',a);
// console.log(a.__proto__ === b.__proto__);

// =============
// function User(name,age) {
//     this.name = name;
//     this.age = age; 
// }
// User.prototype.greet = function(){
//     console.log('yo,wojiao' + this.name +'wojinnian' + this.age + 'suile');
// }

// var whh = new User('whh', 19);
// var lsd = new User('lsd', 20);
// var zks = new User('zks', 22);
// // User.prototype.greet = function(){
// //     console.log('nihao a  daqian');
// // }
// new whh.constructor('yo');
// User {name: "yo", age: undefined}





// ==========12.22==========

// var a = {}
// var b = {}
// var c = new Object();
// console.log(a);
// console.log(a.construstor === b.construstor);


//  var a = Object.create(null); 
//  var a = Object.create({
//      a:1,
//      b:2
//  });
//  console.log('a:',a);

var a = [];
 console.log('a:',a);
