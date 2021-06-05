let main = document.querySelector('main')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let select = document.querySelector('select')
let btn = document.querySelector('button')
let btn2 = document.querySelector('.btn2')
let div = document.querySelector('.wrapper')
btn.onclick = () =>{
event.preventDefault()
div.classList.add('wrapper2')
btn2.onclick = () =>{
    event.preventDefault()
    let obj = {}

    obj.name = inp1.value
    obj.number = inp2.value
    obj.course = select.value
    console.log(obj)
}
}
