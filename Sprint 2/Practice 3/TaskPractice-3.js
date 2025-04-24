//1.BasicandParameterizedFunction
function sayHello() {
    console.log("Hello,World!");
  }
  sayHello();
  
  function sayHello(name) {
    console.log(`Hello,${name}!`);
  }
  sayHello("Jijo");
  
  //2.AdditionFunction
  function add(a,b) {
    return a+b;
  }
  console.log("5+3=",add(5,3));
  
  //3.FunctionExpression(Multiplication)
  const multiply=function(x,y) {
    return x*y;
  };
  console.log("4×5=",multiply(4,5));
  
  //4.MultiplicationFunction(Alternative)
  console.log("2×8=",multiply(2,8));
  
  //5.DivisionFunction
  function divide(a,b) {
    if(b===0)return"Cannotdividebyzero";
    return a/b;
  }
  console.log("10÷2=",divide(10,2));
  console.log("5÷0=",divide(5,0));
  
  //6.FactorialFunction
  function factorial(n) {
    if(n<0)return"Undefined(negativenumber)";
    if(n===0||n===1)return1;
    
    let result=1;
    for(let i=2;i<=n;i++) {
      result*=i;
    }
    return result;
  }
  console.log("Factorialof5:",factorial(5));
  
  //7.SquareFunction
  function square(num) {
    return num*num;
  }
  console.log("Squareof4:",square(4));
  console.log("\n===TestingAllFunctions===");
  sayHello("Developer");
  console.log("7+8=",add(7,8));
  console.log("5×6=",multiply(5,6));
  console.log("15÷3=",divide(15,3));
  console.log("Factorialof6:",factorial(6));
  console.log("Squareof9:",square(9));