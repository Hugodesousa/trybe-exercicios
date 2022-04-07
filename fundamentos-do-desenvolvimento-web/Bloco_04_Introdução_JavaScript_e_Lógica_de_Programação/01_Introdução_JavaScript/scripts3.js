const nota = 59

switch (nota) {
    case nota < 60:
    console.log("Você foi reprovada(o)");
    break;

    case nota => 60 && nota < 80:
    console.log("Você está na nossa lista de espera");
    break;

    case nota => 80:
    console.log("Parabéns, você foi aprovada(o)!");
    break;

    default:
     console.log("null");
}