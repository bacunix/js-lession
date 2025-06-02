// var result = 20 / "abc";  //a invalid operation

// console.log(result); //output : NaN

// 1 .to check is the operation is NaN, use isNaN()

// console.log(isNaN(result)); //output : true


// 2 . toString(), convert number into string
// var age = 18;

// console.log(age.toString()); //output : 18

// console.log(typeof age.toString()); //output : string

// 3 . toFixed() , round the decimal of number and convert the number to string

var PI = 3.14;

// console.log(PI.toFixed());  //output : 3 
// console.log(typeof PI.toFixed()); //string 


//to shorten the decimal number

var num  = 2.2445525323;

console.log(num.toFixed(2)); //output : 2.24
