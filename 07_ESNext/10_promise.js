// processamento assíncrono
// resolve -> quando a promessa é resolvida
// reject -> rejeitar o atendimento da promisse

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    //   reject('Rejetou!');
    }, segundos * 1000);
  });
}

falarDepoisDe(2, "Resolveu")
  .then((frase) => frase.concat("?!?!"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e));
