let fruits = [3, 4, 10, 1, 12];
let n = 0;

for (let index = 0; index < fruits.length; index += 1) {
    n += fruits[index];
}       
if (n > 15) {
    console.log(n)
} else {
    console.log('valor menor que 16');
}
