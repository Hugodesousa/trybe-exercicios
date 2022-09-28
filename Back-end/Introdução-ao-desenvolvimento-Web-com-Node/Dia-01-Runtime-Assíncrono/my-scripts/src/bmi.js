const readline = require('readline-sync')

const handleBMI = (weight , height) => {
  console.log(`Weight: ${weight}kg, Height: ${height}cm`);
  const heightInMeters = height / 100;
  const heightSquared = heightInMeters * heightInMeters;
  
  const bmi = weight / heightSquared;

  return bmi;
};

function table(parm) {
  const bmi = Number(parm);
  if (bmi < 18.5) {
    return 'abaixo do peso';
  }
  if (bmi >= 18.5 && bmi < 25) {
    return 'peso normal';
  }
  if (bmi >= 25 && bmi < 30) {
    return 'acima do peso';
  }
  if (bmi >= 30 && bmi < 35) {
    return 'Obesidade grau I';
  }
  if (bmi >= 35 && bmi < 40) {
    return 'Obesidade grau II';
  }
  return 'Obesidade grau III';

};

function main() {
  const weight = readline.questionFloat('Qual seu peso?(kg)');
  const height = readline.questionInt('Qual sua altura?(cm)');
  const bmi = handleBMI(weight, height).toFixed(2);
  
  console.log(`BMI: ${bmi}`);
  console.log(`Você esta: ${table(bmi) }`);
}

main();