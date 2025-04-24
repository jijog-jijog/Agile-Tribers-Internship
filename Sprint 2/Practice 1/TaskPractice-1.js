//1.HelloWorld
console.log("HelloWorld!");

//2.PrintName
let myName="Jijo";
console.log(myName);

//3.NameAndAge
let age = 25;
console.log(myName + '\n' + age);

//4.DataTypes
let string = "hello";
let num=5;
let bool=true;
let numstr="7";
console.log(num + numstr);
console.log(bool + num);

//5.StringConcat
console.log("I'm "+myName+", age: "+age);

//6.VarsAgain
let name = "Jijo";
age = 20; 
console.log(name + age + "\n");

//7.MathStuff
let a= 10,
b= 5;
console.log("Addition:"+(a+b));
console.log("Subtraction:"+(a-b));
console.log("Multiplication:"+(a*b));
console.log("Division:"+(a/b));
console.log("Modulus:"+(a%b));
console.log("Exponentiation:"+(a**b));

//8.ArrayThings
let fruits=['apple','banana','orange'];
for(let i=0;i<fruits.length;i++)console.log(fruits[i]);

//9.StarPattern
for(let i=1;i<=4;i++)
console.log('*'.repeat(i));

//10.VarTypes
let user = 'Jijo';
age = 20; 
let isStudent=true;
console.log(user,age,isStudent);

//11.ModifyVars
name1="Jijo";
age++;
isStudent=false;
console.log(name1, age, isStudent);

//12.PersonalDetails
let person={
name:'Jijo',
age:30,
dob:'2004-01-09',
height:1.8,
weight:75,
degree:'CS',
gender:'M'
};
console.log(person);