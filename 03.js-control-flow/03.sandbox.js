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
let q = 0;
while(q < 5){
    console.log('in loop = ', q);
    q++;
}

const jenengs = ['Bapak', 'Ibuk', 'Agus Bekti', 'Dek Lisa']
let w = 0;
while(w < jenengs.length){
    console.log(jenengs[w]);
    w++;
}