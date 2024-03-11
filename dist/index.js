"use strict";
// Tipos Básicos
let age = 5;
const firstName = 'Marcel';
const isValid = true; // true ou false
let idk = 5; // any é um tipo especial que representa qualquer tipo de valor
// Lista de numbes
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Marcel", 'Igor'];
// Tupla
const person = [1, "França"];
// Lista de Tuplas
const people = [
    [1, 'Jane'],
    [2, 'Doe'],
];
// Intersections
/*
Os tipos de interseção no TypeScript combinam vários tipos em um único tipo,
permitindo que os desenvolvedores criem novos tipos que possuam as
características de cada tipo mesclado.
*/
const produtcId = '1';
// Enum
/*
uma enum é uma maneira de definir um conjunto de constantes
nomeadas. Essas constantes são agrupadas em um tipo enumerado, facilitando
uma referência a elas em seu código.
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(age);
