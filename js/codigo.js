function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra";
  } else if (jugada == 2) {
    resultado = "Papel";
  } else if (jugada == 3) {
    resultado = "Tijera";
  } else {
    resultado = "Error";
  }
  return resultado;
}

let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);

  jugador = prompt("Elije: 1 para piedra, 2 para papel 3 para tijera:");

  alert("PC elige: " + eleccion(pc));
  alert("Tu eliges: " + eleccion(jugador));

  // Combate
  if (jugador == pc) {
    alert("Empate!!!");
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    alert("Ganaste!!!");
    triunfos++;
  } else {
    alert("Perdiste!!!");
    perdidas++;
  }
}

alert("ganaste " + triunfos + " veces,\n perdiste " + perdidas + " veces");
