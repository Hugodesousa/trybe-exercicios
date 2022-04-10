let notaPorcentagem = -1

if (notaPorcentagem >= 90 && notaPorcentagem <= 100){
    console.log("Nota A")
} else if(notaPorcentagem >= 80 && notaPorcentagem <= 89){
    console.log("Nota B")
} else if(notaPorcentagem >= 70 && notaPorcentagem <= 79){
    console.log("Nota C")
} else if(notaPorcentagem >= 60 && notaPorcentagem <= 69){
    console.log("Nota D")
} else if(notaPorcentagem >= 50 && notaPorcentagem <= 59){
    console.log("Nota E")
} else if(notaPorcentagem < 50 && notaPorcentagem >= 0){
    console.log("Nota F")
} else if(notaPorcentagem < 0 || notaPorcentagem >= 101){ 
    console.log(Error)
}