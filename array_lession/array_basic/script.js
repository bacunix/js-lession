// 1 . how to declare an array

var languages = [
    "Javascript",
    'PHP',
    'Ruby',
];

//print the array

// console.log(languages); //output : ['Javascript', 'PHP' , 'Ruby']

//you can declare many many of datas in an array

var languages2 = [
    "Javascript",
    'PHP',
    'Ruby',
    null,
    undefined,
    function() {

    },
    {}, //object
];

// console.log(languages2); //output : (7) ['Javascript', 'PHP', 'Ruby', null, undefined, ƒ, {…}]


// 3 . to check is the parameter is an array , isArray(parameter);

// console.log(Array.isArray(languages)); //output : true

// 4 . print the length of the Array

// console.log(languages.length); //output : 3


//5 .  print the value by index

// console.log(languages[2]); //output : Ruby
