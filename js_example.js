// Statements
/*var x,y,z;
x=5;
y=5;
z=x+y;
console.log(z)*/

//  Comments 

//  This is a comments 
/* This is also 
a multiline comments*/

//  Variables 

/*
var y=5; // Global scope or global variable
let x=5; // declare a variable with block scope
const z=y+x; // You can't reassigned a const variable

y+=1
x+=1
z+=1 // it will show an error TypeError 

console.log(y,x,z)*/

// Data Types
/*
let str='siddik';
let num=12;
let obj={'name':str,'number':num};
console.log(obj)*/

// Functons
/*
function myfun(a,b){
    return a+b;
};
console.log(myfun(2,3))*/

// Objects 
/*
let obj={'name':'siddik','age':19};
console.log(obj.name);
obj['name']='vishal';
obj.age=20;
console.log(obj['age']);*/

// String 

// let str='i am a bad boy';
// console.log(str.length);
// console.log('hello world')
// console.log(str.indexOf('a'));
// console.log(str.lastIndexOf('a'));
// console.log(str.search('bad'));
// console.log(str.slice(7,10));
// console.log(str.substring(2,7));
// console.log(str.substr(6,10))
// console.log(str.trim())
// console.log(str.replace('bad','good'))

//  Numbers
// let num=13;
// let num1=12.4;
// console.log(num,num1)
// console.log(num.toString())
// console.log(num+' numbers')
// var myNumber = 2;
// while (myNumber != Infinity) {   // Execute until Infinity
//   myNumber = myNumber * myNumber;
// }
// console.log(myNumber)
// console.log(-2/0)
// console.log(parseFloat(1.7890))
// console.log(parseInt(10.678))
// console.log(Number(true))

// Arrays 

// let arr=[198,2879,3869,640,35,66]
// arr[0]=0
// console.log(arr.sort())
// console.log(arr.length)
// console.log(arr[arr.length-1])
// let i=0;
// let sum=0
// let len=arr.length
// for (i;i<len;i++){
//     sum+=arr[i]
// }
// console.log(sum)
// arr.forEach(list)
// function list(value){
//     sum+=value
// }
// console.log(sum)
// console.log(arr.toString())
// let p=arr.pop()
// let pu=arr.push('soddo')
// let s=arr.shift()
// let sh=arr.unshift()
// console.log(arr)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort())  
// console.log(arr.reverse()) 
// console.log(arr.sort(function (a,b){return a-b})) 
// var numbers1= [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);
// function myFunction(value) {
//   return value * 2;
// }
// console.log(numbers2)
// var over18 = numbers.filter(myFunction);
// function myFunction(value) {
//   return value > 18;
// }
// console.log(over18)
// var numbers1 = [1,2,3,4,5,6,7,8,9,0];
// var sum = numbers1.reduce(myFunction);
// function myFunction(total, value) {
//   return total + value;
// }
// console.log(sum)
// let d= new  Date()
// console.log(d.getFullYear())
// console.log(d.setFullYear(1970))

// let ran=Math.floor(Math.random()*10)
// console.log(ran)

// let a='10';
// if (a===10){
//     console.log('hello')
// }else if (a===20){
//     console.log('world')
// }else{
//     console.log('muhammad siddik')
// }

// let b=4;
// switch (b){
//     case 1:
//         console.log(1)
//     break
//     case 2:
//         console.log(2)
//     break
//     case 3:
//         console.log(3)
//     break
//     case 4:
//         console.log(4)
//     break
//     case 5:
//         console.log(5)
//     break
//     default:
//         console.log('no')
// }

// let person = {fname:"John", lname:"Doe", age:25};
// for (x in person){
//     console.log(person[x])
// }

// let cars = ["BMW", "Volvo", "Mini"];
// for (x of cars){
//     console.log(x)
// }

// let i=0;
// while (i<=10){
//     console.log(i);
//     i++;
// };

// let i=0
// do{
//     console.log(i);
//     i++;
// }while (i<=10)

// let i=0
// do{ 
//     if (i===3){
// break
//     }
//     console.log(i);
//     i++;
// }while (i<=10)

// try{
//     console.log('hello')
// }catch(err){
//     console.log('world')
// }finally{
//     console.log('siddik')
// }


// Local Scope

// function local_scope(){
//     let a=10;
//     console.log(a)
// }
// local_scope()

// Global Scope

// let a=10;
// function global_scope(){
//     console.log(a)
// }
// global_scope()

// Hoisting

// let a,b,c;
// a=5
// b=6
// c=a+b
// console.log(a,b,c)

// This Keyword

// let person={
// firstName: "John",
// lastName : "Doe",
// id       : 5566,
// fullName : function() {
//   return this.firstName + " " + this.lastName;
// }
// };
// console.log(person.fullName())

// Arrow Function

// let hello=()=>{return 'hello arrow funtion'}
// console.log(hello())

// let hello=(val)=>{return 'hello '+val}
// console.log(hello('siddik'))

// Class Method

// class class_name{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }
// class_var=new class_name('siddik',2002)
// console.log((class_var.name+' '+class_var.year))