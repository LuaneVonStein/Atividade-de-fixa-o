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
  console.log("O número" "é divisivel por 3 ou 5 ");
} else {
  console.log(" O número" "Não é  divisivel por 3 ou 5 );
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
if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
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

for(let le of letras){
  console.log(le);
}


//Exercício 8 //
let numero = 1;
while (true) {
  if (numero % 5 === 0 && numero % 7 === 0) {
    console.log("O primeiro número divisível por 5 e 7 é", numero);
    break;
  }
  numero++;
}

console.log('O valor da soma é: ' + soma);


//Exercício 9 //
let i = 1;
do {
  if (i % 2 !== 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
} while (i <= 10)

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
let numero = 1;
while (numero % 2 !== 0 || numero % 3 !== 0 || numero % 5 !== 0) {
  numero++;
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

let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let ehPrimo = true;

if (numero < 2) {
  ehPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }
}
if (ehPrimo) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}

//Exercício 17 //
let soma = 0;

for(let i = 1; i >= 10; i--){
  soma += i;
}

//Exercício 18 //
let numeroInicial = parseInt(prompt("Digite o número inicial do intervalo:"));
let numeroFinal = parseInt(prompt("Digite o número final do intervalo:"));

console.log("Números pares entre " + numeroInicial + " e " + numeroFinal + ":");

for (let i = numeroInicial; i <= numeroFinal; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Exercício 19 //

let quantidadeNotas = parseInt(prompt("Digite a quantidade de notas:"));
let somaNotas = 0;

for (let i = 1; i <= quantidadeNotas; i++) {
  let nota = parseFloat(prompt("Digite a nota " + i + ":"));
  somaNotas += nota;
}

let media = somaNotas / quantidadeNotas;
console.log("A média das notas é:", media.toFixed(2));

//Exercício 20 //
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

console.log("Bem-vindo ao Jogo de Adivinhação!");

while (!acertou) {
  let palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));
  tentativas++;

  if (palpite === numeroAleatorio) {
    acertou = true;
    console.log("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
  } else if (palpite < numeroAleatorio) {
    console.log("O número correto é maior. Tente novamente!");
  } else {
    console.log("O número correto é menor. Tente novamente!");
  }
}
