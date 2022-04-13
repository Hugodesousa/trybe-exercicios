var valor;
var primeira = 1
var quant;
function valorf (quant,) {
        if (quant <= 10) {
    valor = 0.50 
        }else if (quant <= 100){
    valor = 0.25
    } else if (quant <= 200) { 
    valor = 0.20
    } else { 
    valor = 0.15
}
          
return "R$" + (primeira + (valor * (quant - 1)) )
}
console.log(valorf(203))

