//1.HelloWorld
console.log("HelloWorld!");

//2.PrintName
let myName="Jijo";
console.log(myName);

//3.NameAndAge
let age=20;
console.log(myName+'\n'+age);

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
let name = "Jijo" ;
age = 20;
console.log(name + age + "\n");

//7.MathStuff
let a=10;
let b=5;

console.log("Addition:"+(a+b));
console.log("Subtraction:"+(a-b));
console.log("Multiplication:"+(a*b));
console.log("Division:"+(a/b));
console.log("Modulus:"+(a%b));
console.log("Exponentiation:"+(a**b));

//8.ArrayThings
let fruits=['apple','banana','orange'];
for(let i=0;i<fruits.length;i++)
console.log(fruits[i]);

//9.StarPattern
for(let i=1;i<=4;i++)
console.log('*'.repeat(i));

//10.VarTypes
let user='jijo',
userAge=20,
isStudent=true;
console.log(user,userAge,isStudent);

//11.ModifyVars
name1="Jijo";
age1++;
isStudent=false;

//12.PersonalDetails
let person={
name:'jijo',
age:20,
dob:'08-01-2003',
height:1.75,
weight:75,
degree:'CS',
gender:'M',
isStudent:true
};
console.log(person);
