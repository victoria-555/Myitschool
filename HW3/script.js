
//задание 1
let text = `<strong>Результат задания №1:</strong><br/>Числа от 0 до 100 : <br/>`;
for (let i=1;i<=50;i++){
  text +=`${i} `;
}

text += `<br/>Числа от 38 до 8 :<br>`;

for (let j=38;j>=8;j--){
  text +=`${j} `;
}

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = text;
document.body.append(div);



//задание 2
text= `<strong>Результат задания №2:</strong><br/>Числа от 89 до 11 : <br/>`;
let i= 89;
while (i >=11){
  text += `${i} <br/> `;
  i--;
}
div = document.createElement('div');
div.className = "alert";
div.innerHTML = text;
document.body.append(div);



//задание 3
let sum = 0;
for (let i = 0; i <= 100; i++){
 sum += i;
}
div = document.createElement('div');
div.className = "alert";
div.innerHTML= `<strong>Результат задания №3: </strong> ${sum}</div>`;
document.body.append(div);




//задание 4
text= `<strong>Результат задания №4:</strong> <br/>`;
let summa;
for (let i = 1; i <= 5; i++){
summa = 0;
  for (let j = 0; j <= i; j++){
    summa += j;
  }
  text += `${summa} <br/>`;
 }
div = document.createElement('div');
div.className = "alert";
div.innerHTML= text;
document.body.append(div);


//задание 5

text= `<strong>Результат задания №5:</strong> <br/>`;
for (let i = 8; i <= 56; i++){
  if(i%2 == 0){
    text += `${i}   `;
  }
}
div = document.createElement('div');
div.className = "alert";
div.innerHTML= text;
document.body.append(div);



//задание 6

text = `<strong>Результат задания №6:</strong> <br/>`;
let mult;

for (let i = 2; i <= 10; i++){
  text += `<br/>` ;

  for (let j = 2; j <= 10; j++){
    mult = j * i;
    text += ` ${j} * ${i} = ${mult} <br/>  `
  } 
}
div = document.createElement('div');
div.className = "alert";
div.innerHTML=text;
document.body.append(div);



//задание 7

let m=0;
let num =0;
for (let n=1000; n>50 ; n/=2) {
  m++;
}
num += m;

div = document.createElement('div');
div.className = "alert";
div.innerHTML= `<strong>Результат задания №7: </strong> ${num}</div>`;
document.body.append(div);




//задание 8

/*
let n;
let sym = 0;
let k = 0;
let z = 0;
while (true) {
  n = prompt("Введите число");
  if(n == 0 || n == ''){
    break;
  } else if(isNaN(n) == true){
  alert("Введены некорректные данные!")
  break;
  } else{
    sym += +n;
  }
  k++;
}
z = sym/k;

alert(`Сумма чисел равна : ${sym}`);
alert(`Cреднее арифметическое равно : ${z}`);
*/




//задание 9
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arr = str.split(' ');
let min = Math.min(...arr),
max = Math.max(...arr);

div = document.createElement('div');
div.className = "alert";
div.innerHTML= `<strong>Результат задания №9: </strong> </br>Минимальное значение: ${min}</br>Максимальное значение: ${max}</div>`;
document.body.append(div);


//задание 10

text= `<strong>Результат задания №10:</strong> <br/>`;

n=1256396;
n = String(n);
text +=`Число: ${n}<br/>`
text += `<strong>a.</strong><br>`

let s = 0;

for(let i=0; i < n.length ; i++){
  text +=` ${n[i] }<br/>`
  s += +n[i];
}

text += `<br/><strong>b.</strong><br>`
text += ` ${n.length}<br>`

text += `<br/><strong>c.</strong><br>`
text += ` ${s}<br>`

text += `<br/><strong>d.</strong><br>`
text += ` ${n.split("").reverse().join("")}<br>`

div = document.createElement('div');
div.className = "alert";
div.innerHTML=text;
document.body.append(div);