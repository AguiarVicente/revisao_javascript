function Pessoa(nome) {
//   this.nome = nome;

  this.falar = function () {
    console.log(`Meu nome é ${nome}`);
    // console.log(`Meu nome é ${this.nome}`);
  };
}

const pe = new Pessoa("Jorge");
pe.falar();
