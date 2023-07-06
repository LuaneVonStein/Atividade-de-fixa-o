//Exercício 1 //
let letra = 4;

if ((letra % 4 === 0 && letra % 100 !== 0) || (letra % 400 === 0)) {
  console.log('É consoante');
} else {
  console.log('É vogal');
}

//Exercício 2 
let valor = 10

if (nota === 50) {
  console.log("a");
}
if (nota === 60) {
  console.log("b");
}
if (nota === 70) {
  console.log("c");
}
else if (nota === 80){
  console.log("d")
}
else if (nota === 90){
  console.log("e")
}
else if (nota === 100){
  console.log("f")
}
console.log();

//Exercício 3 //
let valor = 0

if (valor % 3 === 0 && valor % 5 === && 0 ) {
  console.log("O número" + valor + "é divisivel por 3 ou 5 ");
} else {
  console.log(" O número" + valor + "Não é  divisivel por 3 ou 5 );
}

  
//Exercício 4//
let valor = 10
  
if(valor%2 === 0)  {
  console.log("É par");
} else {
console.log("É impar");
}

//Exercício 5//
let numero = 5;

if(numero > 0) { //quando é verdadeiro//
console.log("É verdadeiro");
} else {//quando é falso//
 console.log("É falso");
}

//Exercício 6 //
let contador = 100;

while(contador <= 1){
  console.log(contador);
  contador--;
  const numeros = [1, 2, 3, 4, 5];

for(let num of numeros){
  console.log(num);
}
}

//Exercício 7 //

const numeros = [a, b, c];

for(let num of numeros){
  console.log(num);
}


//Exercício 8 //

let soma = 0;

for(let i = 1; i <= 10; i++){
  soma += i;
}

console.log('O valor da soma é: ' + soma);


//Exercício 9 //
let contador = 1;

 while(contador <= 10){
    console.log(contador);
    let valor = 10
if(valor%2 === 0)  {
  console.log("Apenas numeros pares");
} else {
console.log(".");
}
    contador++;
}

//Exercício 10//
const pessoa = {
  nome: 'João',
  idade: 25,
  cidade: 'Nova Andradina'
};

for(let atributo in pessoa){
  console.log(atributo + " : " + pessoa[atributo]);
}


//Exercício 11//
let contador = 100;

while(contador <= 1){
  console.log(contador);
  contador--;
}

//Exercício 12//
const numeros = [1, 2, 3, 4, 5];

for(let [indice, num8] of nums.entries(){
  console.log('numero ' + num8 + ' na posição ' + indice);
}

//Exercício 13 //
let contador2 = 2;

while(contador2 <= 10){
  console.log(contador1);
  contador1++;
}

//Exercício 14 //

let num4;

 do {
   num4 = parseInt(prompt('Você deseja sair ? Digite sim para sair'));
 } while (!== "sim");


//Exercício 15 //
const pessoa = {
  nome: 'João',
  idade: 25,
  cidade: 'Nova Andradina'
};

for(let atributo in pessoa){
  console.log(atributo + " : " + pessoa[atributo]);
}

//Exercício 16 //



//Exercício 17 //




//Exercício 18 //
let num4;

do{
    num4 = parseInt(prompt("Digite dois numero "));
}while (num4 < 1 || num4 > 100);
console.log("Você digitou o numero " + num4);

if(valor%2 === 0)  {
  console.log("É par");
} else {
console.log("É impar");
}

//Exercício 19 //

let num4;

 do {
   num4 = parseInt(prompt('Digite um número entre 1 e 10'));
 } while (num4 < 1 || num4 > 10);

 console.log('Você digitou o número ' + num4);

let soma = 0;

for(let i = 1; i <= 10; i++){
  soma += i;
}

console.log('O valor da soma é: ' + soma);

