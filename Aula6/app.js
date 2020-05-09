console.log("Hello Javascript a partir do arquivo");
var s1 = "A";
var s2 = "A";
var s3 = `Ela se chama ${s1}`;
var s4 = 'Aspas duplas"aqui"';

//numeros
var n1 = 2;
var n2 = 2.2;
//boolean
var x = true;
var y = false;
//undefined e null
var u; //undefined
var n = null; //null
console.log(u);
console.log(n);

console.log(typeof s1);
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof x);
console.log(typeof u);
console.log(typeof n);
x = 2;
console.log(typeof x);

// nome = prompt("Qual o seu nome?");
// alert("Oi, " + nome);

// var idade = prompt("Quantos anos?");
// if (idade >= 18) alert("Pode dirigir");
// else alert("Não pode dirigir");
// var nota = prompt("Qual a nota?");
// switch (+nota) {
//   case 10:
//   case 9:
//     alert("A");
//     break;

//   case 8:
//   case 7:
//     alert("B");
//     break;
//   case 6:
//   case 5:
//     alert("C");
//   default:
//     alert("R");
// }
// a = prompt("Primeiro numero");
// b = prompt("Segundo numero");
// alert((+a > +b ? a : b) + " é maior");

// for (var i = 1; i <= 10; i++) console.log(i);

// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for (var i = 1; i <= 10; i++) {
//   if (i == 5) break;
//   console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
//   if (i == 5) continue;
//   console.log(i);
// }

var itens = ["Ana", "Maria", 23, 42];
for (var i = 0; i < itens.length; i++) console.log(itens[i]);

var numeros = new Array(1, 6, 5, 2, 1);
console.log(numeros);

var itens = [];
itens.push(1);
itens.push(2);
itens.push(3);
console.log(itens);
itens.pop();
console.log(itens);
itens.shift();
console.log(itens);

pessoa = {
  nome: "Ana",
  idade: 30,
  sexo: "F",
};
console.log(pessoa.nome);
console.log(pessoa["idade"]);

pessoa = {
  nome: "Ana",
  endereco: {
    rua: "ABC",
    numero: 123,
  },
};
console.log(pessoa.endereco.rua);
console.log(pessoa["endereco"].numero);

pessoa = new Object();
pessoa.nome = "Ana";
pessoa.idade = 30;
pessoa["sexo"] = "f";
console.log(pessoa);

function hello() {
  console.log("Ola!");
}

hello();

function achaMaior(a, b) {
  return a > b ? a : b;
}

console.log(achaMaior(2, 3));

var minhaFuncao = function () {
  console.log("Uma função sem nome...");
};

minhaFuncao();
//funcao de mais alta ordem
function comoComparar(criterio, a, b) {
  if (criterio == "iguais")
    return function () {
      return a == b;
    };
  else
    return function () {
      return a != b;
    };
}
console.log(comoComparar("iguais", 3, 2)());
