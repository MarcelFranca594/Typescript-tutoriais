// Interfaces com funções
interface MathFunc {
  (x: number, y: number): number
}

const sum: MathFunc = (x: number, y: number): number => {
  return x + y
}

const sub: MathFunc = (x: number, y: number): number => {
  return x - y
}


/*
Functions
const sum = (x: number, y: number): number => {
  return x + y
}

const value = sum(4, 7)

// void => uma função que não vai retorna nada
const log = (message: string): void => {
  console.log(message)
}
*/
