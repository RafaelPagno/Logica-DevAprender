// 4º Problema: Escreva um programa que ao iniciar gera um número aleatório entre 1 e 10 e permite que o usuário chute um número até que o valor chutado seja o mesmo do chute. O programa deve informar se o chute foi acima, abaixo ou igual ao valor gerado

var random = Math.floor(Math.random() * 11) + 1;
var right_guess = false;
//console.log(random)

while (right_guess == false) {
  var guess = parseInt(prompt("Chute um número entre 1 e 10"));
  if (guess == random) {
    console.log("Parabéns, você acertou!");
    right_guess = true;
  } if (guess > random) {
    console.log("Chutou alto, tente novamente!");
  } if (guess < random) {
    console.log("Chutou baixo, tente novamente!");
  };
};

