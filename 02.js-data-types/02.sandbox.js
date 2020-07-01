// STRING
console.log('hello, world');

let email = 'agusbektir@gmail.com'
console.log(email);

// string concatenation
let firstName = 'Agus';
let lastName = 'Bekti';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// string characters
console.log(fullName[0]);
console.log(fullName[4]);
console.log(fullName[5]);

// string length or string property
console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
let email1 = 'agusbektirohmadi@gmail.com'
console.log(email1);

let result0 = email1.lastIndexOf('a');
console.log(result0);

let result1 = email1.lastIndexOf('m');
console.log(result1);

let result2 = email1.lastIndexOf('z');
console.log(result2);

let result3 = email1.slice(0,10);
console.log(result3);

let result4 = email1.slice(0,4);
console.log(result4);

let result5 = email1.slice(16,23);
console.log(result5);

let result6 = email1.slice(23,27);
console.log(result6);

/* substr
-> argumen 1 untuk start darimana ambil char nya
argumen 2 untuk brp banayk char yg mau diambil
*/
let result7 = email1.substr(16,7);
let result8 = email1.slice(16,23);
console.log(result7);
console.log(result8);

/*replace
-> replace certain char to another char,
only the first char found
*/
let result10 = email1.replace('a','u');
console.log(result10);

// NUMBER
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %
console.log(10/2);

let result11 = pi * radius ** 2;
console.log(result11);

/* order of operation -
Brackets, Indices,
Division, Multiplication,
Addition, Substraction
*/

let result12 = 5 * ( 10 - 3 ) ** 2;
console.log(result12);

let likes = 10000;
// likes = likes + 1;
// likes--;
// likes++;
// likes += 10;
// likes -= 10;
// likes *= 10;
likes /= 5;
console.log(likes);


// NaN -> Not a Number
console.log(5/'hello world');
console.log(1000 * 'hello world');

// concatenate number
let result13 = 'Total likes = '+likes+' likes';
console.log(result13);


// template strings
const title = 'Best regards of 2020';
const author = 'Agus Bekti';
const loves = 3000;

// concenation way
let result14 = 'The blog called '+title+' by '+author+' has '+loves+' loves.';
console.log(result14);

// template string way
let result15 = `The blog called ${title} by ${author} has ${loves} loves.`
console.log(result15);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${loves} loves.</span>
`;
console.log(html);