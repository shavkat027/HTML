//
let count = document.querySelector('.count')
let result = document.querySelector('h1')
count.onclick = (a, b, c,) => {
    a = prompt('Цифра1')
    b = prompt('Цифра2')
    c = prompt('Метод')
    a = Number(a)
    b = Number(b)

    if (c == '+') result.innerHTML = (a + b)
    else if (c == '-') result.innerHTML = (a - b)
    else if (c == '/') result.innerHTML = (a / b)
    else if (c == '*') result.innerHTML = (a * b)
    else result.innerHTML = ('Ошибочка')
}
// 
let input1 = document.getElementById('w1')
let input2 = document.getElementById('w2')

let t1 = (arg) => {
    input2.value = arg.target.value
}
input1.addEventListener('input', t1)

let t2 = (arg) => {
    input1.value = arg.target.value
}
input2.addEventListener('input', t2)





