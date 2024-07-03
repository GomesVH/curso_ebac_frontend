class Pokemon 
{
    constructor(nome, tipo, nivel) 
    {
        this.nome = nome;
        this.tipo = tipo;
        this.nivel = nivel;
    }

    descricao() 
    {
        return `${this.nome} é do tipo ${this.tipo} e está no nível ${this.nivel}`;
    }
}

class Pikachu extends Pokemon 
{
    constructor(nome, nivel, ataques) 
    {
        super(nome, 'Elétrico', nivel);
        this.ataques = ataques;
    }

    descricao() 
    {
        return `${super.descricao()} com os ataques: ${this.ataques.join(', ')}`;
    }
}

class Charmander extends Pokemon 
{
    constructor(nome, nivel, ataques) 
    {
        super(nome, 'Fogo', nivel);
        this.ataques = ataques;
    }

    descricao() 
    {
        return `${super.descricao()} com os ataques: ${this.ataques.join(', ')}`;
    }
}

const pikachu1 = new Pikachu('Pikachu', 10, ['Choque do Trovão', 'Cauda de Ferro']);
const pikachu2 = new Pikachu('Pikachu', 20, ['Raio', 'Investida Trovão']);
const charmander1 = new Charmander('Charmander', 15, ['Lança-Chamas', 'Garra de Dragão']);

console.log(pikachu1.descricao());
console.log(pikachu2.descricao());
console.log(charmander1.descricao());