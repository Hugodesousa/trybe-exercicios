// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1) {
//   fatorial = fatorial * index;
// }
// console.log(fatorial);



// let palavra = "banana";
// let invert = '';
// for (let index = palavra.length - 1; index >= 0; index -= 1) {
//     invert = invert + palavra[index]
// }
// console.log(invert)



let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = '';
for (let index = 0; index < array.length; index +=1) {
    if (array[index].length > palavra.length){
        palavra = array[index]
    } 
}
console.log(palavra)

let palavraM = array[0];
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < palavraM.length){
        palavraM = array[index]
    } 
}
console.log(palavraM)