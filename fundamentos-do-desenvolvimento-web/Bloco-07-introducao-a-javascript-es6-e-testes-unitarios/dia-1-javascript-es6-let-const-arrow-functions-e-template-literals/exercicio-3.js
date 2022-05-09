

let clickCount = 1;
const click = document.getElementById('button');
const result = document.getElementById('result')
console.log(click)
click.addEventListener('click', () => {
result.innerText = clickCount++ ;    
})
