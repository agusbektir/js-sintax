// for loops
for(let i = 0; i < 5; i++){
    console.log('in loop = ', i);
}
console.log('loop finished');

const names = ['Agus', 'Mas Oni', 'Ari', 'Dian', 'Cahyo'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

for(let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


// while loops
let q = 5;
while(q < 5){
    console.log('q in loop = ', q);
    q++;
}

const jenengs = ['Bapak', 'Ibuk', 'Agus Bekti', 'Dek Lisa']
let w = 0;
while(w < jenengs.length){
    console.log(jenengs[w]);
    w++;
}


// do while loops
let e = 5;
do{
    console.log('val of e is = ', e);
    e++;
}while(e < 5);


// if statements
const age = 20;

if(age > 20){
    console.log('You are over 20 years old.');
} //return false so dont print on console


if(age > 15){
    console.log('You are less than 20 years old.');
} //return true so do print on console

const hunters = ['killua', 'gon', 'leorio'];

if(hunters.length > 0){
    console.log(`We have ${hunters.length} hunters.`);
    console.log("this is our hunters.");
}

if(hunters.length > 3){
    console.log("too much hunters, bro !");
}

const password = '01234567';

if(password.length >= 8){
    console.log('That password is long enough !');
}

// if else statement
// const username = 'agusbekirrrrr';
const username = 'agusbe';

if(username.length >= 8){
    console.log('That username is long enough !');
} else {
    console.log('That username is not long enough !');
}