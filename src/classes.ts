// Definição de uma interface chamada IPerson
interface IPerson {
  id: number
  sayMyName(): string
}


class Person implements IPerson {
  // Definindo os tipos para os atributos da classe
  readonly id: number
  protected name: string
  private age: number

// O construtor é um método especial que é chamado automaticamente quando um novo objeto da classe é criado
  constructor(id: number, name: string, age: number){
      this.id = id
      this.name = name
      this.age = age
  }

  // método
  sayMyName(): string {
    return this.name
  }
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age)
  }

  whoAmI() {
  }
}



/// Criando uma nova instância da classe Person e passando valores para o construtor
const person = new Person(1, 'Felipe', 21)
