//Task1:VariableDeclarationswithDifferentNamingConventions
let firstName="John"; 
let last_name="Doe"; 
let totalAmount=1000;
let total_amount=1000;
console.log("Task1Output:",firstName,last_name,totalAmount,total_amount);

//Task2:ConstantVariableReassignment
const PI=3.14;
console.log("Task2Output:",PI);

//Task3:ArrayOperations
let fruits=['apple','banana','orange'];
console.log("Task3Output-Elementatindex1:",fruits[1]); 
fruits.push('grape');
fruits.pop();
fruits.unshift('mango');
fruits.shift();
console.log("Task3Output-Finalarray:",fruits);

//Task4:SumofTwoNumbers
let num1=5;
let num2=10;
let sum=num1+num2;
console.log("Task4Output-Sum:",sum);

//Task5:AreaofaCircle
const PI_CIRCLE=3.14159;
let radius=5;
let circleArea=PI_CIRCLE*radius*radius;
console.log("Task5Output-Areaofcircle:",circleArea);

//Task6:AreaofaRectangle
let length=10;
let width=5;
let rectangleArea=length*width;
console.log("Task6Output-Areaofrectangle:",rectangleArea);

//Task7:AreaofaTriangle
let base=10;
let height=5;
let triangleArea=(base*height)/2;
console.log("Task7Output-Areaoftriangle:",triangleArea);

//Task8:SimpleCalculator
let calcA=10;
let calcB=5;
console.log("Task8Output:");
console.log("Addition:",calcA+calcB); 
console.log("Subtraction:",calcA-calcB); 
console.log("Multiplication:",calcA*calcB); 
console.log("Division:",calcA/calcB); 

//Task9:AssignmentOperators
let x=10;
console.log("Task9Output:");
console.log("Original:",x); 
x+=5;console.log("After+=",x); 
x-=3;console.log("After-=",x); 
x*=2;console.log("After*=",x); 
x/=4;console.log("After/=",x); 

//Task10:Increment/DecrementOperators
let counter=0;
console.log("Task10Output:");
console.log("Original:",counter); 
counter++;console.log("Afterincrement:",counter); 
counter--;console.log("Afterdecrement:",counter); 
console.log("Post-increment:",counter++); 
console.log("Pre-increment:",++counter); 

//Task11:ComparisonOperators
let compA=5;
let compB="5";
let compC=10;
console.log("Task11Output:");
console.log("a==b:",compA==compB);
console.log("a===b:",compA===compB); 
console.log("a!=b:",compA!=compB); 
console.log("a!==b:",compA!==compB); 
console.log("a>c:",compA>compC); 
console.log("a<c:",compA<compC); 
console.log("a>=5:",compA>=5); 
console.log("a<=4:",compA<=4); 

//Task12:LogicalOperators
let isTrue=true;
let isFalse=false;
console.log("Task12Output:");
console.log("AND:",isTrue&&isFalse); 
console.log("OR:",isTrue||isFalse); 
console.log("NOTisTrue:",!isTrue); 
console.log("NOTisFalse:",!isFalse); 
console.log("Complex:",(isTrue||isFalse)&&!isFalse);

//Task13:SwapTwoVariables
let a=5;
let b=10;
let temp=a;
a=b;
b=temp;
console.log("Task13Output-Withtemp:");
console.log("a=",a,"b=",b); 

//Withouttemporaryvariable
let xSwap=15;
let ySwap=20;
xSwap=xSwap+ySwap; 
ySwap=xSwap-ySwap; 
xSwap=xSwap-ySwap; 
console.log("Withouttemp:");
console.log("x=",xSwap,"y=",ySwap); 

//Task14:AverageofNumbers
let numbers=[10,20,30,40,50];
let numbersSum=numbers.reduce((a,b)=>a+b,0);
let average=numbersSum/numbers.length;
console.log("Task14Output-Average:",average);

//Task15:ComplexArithmeticOperation
let arithA=10;
let arithB=30;
let arithC=12;
let arithD=3;
let result=((arithA+arithB)*arithC)/arithD;
console.log("Task15Output-Result:",result);

//Task16:MarksCalculation
let tamil=85;
let english=90;
let maths=95;
let science=88;
let social=92;
let totalMarks=tamil+english+maths+science+social;
let averageMarks=totalMarks/5;
console.log("Task16Output:");
console.log("TotalMarks:",totalMarks); 
console.log("AverageMarks:",averageMarks); 