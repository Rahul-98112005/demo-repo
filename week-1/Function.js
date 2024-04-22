// function sum(a,b)
// {
//     return a + b;
// }

// const value = sum(2,3);
// console.log(value);


// function sum(num1,num2)
// {
//     let result = num1 +num2;
//     return result;
// }

// function displayResult(data)
// {
//     console.log("Result of the sum is:  " + data);
// }
// function displayResultPassive(data)
// {
//     console.log("Sum's result is:  " + data);
// }

// const ans = sum(2,3);


// CALLBACK = function as a argument to a function

// function sum(num1,num2,fnToCall)
// {
//     let result = num1 +num2;
//     fnToCall(result)
// }

// function displayResult(data)
// {
//     console.log("Result of the sum is:  " + data);
// }
// function displayResultPassive(data)
// {
//     console.log("Sum's result is:  " + data);
// }

// const value = sum(1,2,displayResult);

// Without Call back

// function calculateairthmetic(a , b , type){
//     if(type=="sum")
//     {
//         const value =  sum(a,b);
//         return value;
//     }
//     if(type=="minus")
//     {
//         const value =  sub(a,b);
//         return value;
//     }

// }

// function sum(a,b)
// {
//     return a + b;
// }
// function sub(a,b)
// {
//     return a - b;
// }

// const value = calculateairthmetic(2,3,"sum")
// console.log(value);


// With CALLBACK

// function calculateairthmetic(a , b , operation){


//     const ans = operation(a,b)  ///opertaion work as same as sum function 
//     return ans;

// }

// function sum(a,b)
// {
//     return a + b;
// }
// function sub(a,b)
// {
//     return a - b;
// }

// const value = calculateairthmetic(2,3,sum);
// console.log(value);


// setTimeout  

// function greet()
// {
//     console.log("hello world");
// }

// setTimeout(greet,3 * 1000);   //greet function call in 3 second

// setInterval is also do same thing



