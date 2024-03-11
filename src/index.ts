// Tipos Básicos
let age: number = 5
const firstName: string = 'Marcel'
const isValid: boolean = true // true ou false
let idk: any =  5 // any é um tipo especial que representa qualquer tipo de valor

// Lista de numbes
const ids: number[] = [1, 2, 3, 4 , 5]
const booleans: boolean[] = [true, false, true, false]
const names: string[] = ["Marcel", 'Igor']

// Tupla
const person: [number, string] = [1, "França"]

// Lista de Tuplas
const people: [number, string][] = [
  [1, 'Jane'],
  [2, 'Doe'],
]

// Intersections
/*
Os tipos de interseção no TypeScript combinam vários tipos em um único tipo,
permitindo que os desenvolvedores criem novos tipos que possuam as 
características de cada tipo mesclado.
*/

const produtcId: string | number = '1'

// Enum
/*
uma enum é uma maneira de definir um conjunto de constantes 
nomeadas. Essas constantes são agrupadas em um tipo enumerado, facilitando 
uma referência a elas em seu código.
*/
enum Direction {
    Up = 1,
    Down = 2
}

const direction = Direction.Up

// Type Assertions => Quer mudar um tipo de variável
const productName: any = 'Boné'

//let itemId = productName as string
let itemId = <string>productName

console.log(age)