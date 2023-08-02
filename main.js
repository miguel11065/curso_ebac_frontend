function Filme(nome) {
    this.nome = nome;
    this.plataforma1 = function() {
        console.log(`- O filme ${this.nome} está disponivel no Prime Video!`)
    }
}

function Serie(nome) {
    this.nome = nome;
    this.plataforma2 = function() {
        console.log(`- A série ${this.nome} está disponivel na Netflix!`)
    }
}

function Programa(nome, lancamento, duracao, tipo) {
    this.nome = nome;
    this.lancamento = lancamento;
    this.duracao = duracao;

    console.log(`${this.nome} foi lançado em ${this.lancamento} e tem ${this.duracao}.`)

    if(tipo === "Filme") {
        let filme = new Filme(nome);
        filme.plataforma1();
    } else if(tipo === "Série") {
        let serie = new Serie(nome);
        serie.plataforma2();
    } else {
        console.log("O programa não esta disponivel em nenhum servico de streaming.")
    }

    Filme.call(this, nome);
    Serie.call(this, nome);
}

const filme1 = new Programa("John Wick", "2014", "1h41m", "Filme");
const serie1 = new Programa("The Witcher", "2019", "3 temporadas", "Série");