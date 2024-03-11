// Type => é basicamente um objeto
/* 
Pode definir quais propriedades esse objeto vai ter
e quais são os tipos dessa respectiva propriedade
*/
// Objeto
type Order = {
  productId: string
  price: number
}

type User = {
  firstName: string
  age: number
  email: string
  password?: string // é opcional
  orders: Order[]
  register(): string 
};

// Declaração de uma variável chamada user e atribuição de um objeto com o tipo User
const user: User = {
  firstName: 'Jane',
  age: 22,
  email: 'jane@doe.com',
  password: '12345',
  orders: [{productId: '1', price: 200}], // Uma lista com objeto order
  register() {
    return "Boa Tarde..."
  }
}

// Unios
type Author = {
  books : string[]
}

const author: Author & User = {
  age: 2,
  books: ['1'],
  email: 'author@gmail.com',
  firstName: 'Felipe',
  orders: [],
  register() {
    return "Boa tarde..."
  }
}

// Interfaces
/*
Uma interface em TypeScript é uma forma de definir a estrutura de um objeto. 
Ela descreve os tipos de propriedades e métodos que um objeto deve ter, sem 
fornecer uma implementação específica para esses métodos. Em essência, uma 
interface define um contrato que os objetos devem seguir, especificando quais 
propriedades e métodos devem estar presentes e quais tipos de dados devem ser 
utilizados. Isso permite que você garanta consistência e conformidade em todo 
o seu código, facilitando a manutenção e evolução do seu projeto. Em resumo, 
uma interface é como um "contrato" que os objetos devem seguir para serem 
considerados de um determinado tipo.
*/
// Definição da interface UserInterface
interface UserInterface {
  readonly firstName: string // readonly => Atributo de leitura apenas
  email: string
  login(): string
}
// Criação de um objeto 'emailUser' do tipo UserInterface
const emailUser: UserInterface = {
  email: 'felipe@gmail.com',
  firstName: 'Felipe',
  login() {
    return 'logado'
  }
}
// Definição da interface AuthorInterface
interface AuthorInterface {
  books: string[]
}
// Criação de um novo objeto 'newAuthor' que combina as interfaces UserInterface e AuthorInterface
const newAuthor: UserInterface & AuthorInterface = {
  email: "author@gmail.com",
  firstName: 'Felipe',
  books: [],
  login() {
    return 'logado'
  }
}