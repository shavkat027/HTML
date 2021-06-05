let products = [
    {
        name: 'Говядина',
        price: 80000,
        category: 'Meat',
        img:'https://pngimg.com/uploads/beef/beef_PNG4.png'
    },
    {
        name: 'Milk',
        price: 14000,
        category: 'Milk',
        img:'http://pngimg.com/uploads/milk/milk_PNG12758.png'
    },
    {
        name: 'Баранина',
        price: 70000,
        category: 'Meat',
        img:'https://e7.pngegg.com/pngimages/547/965/png-clipart-meat-lamb-and-mutton-rack-of-lamb-sheep-barbecue-meat-barbecue-food-thumbnail.png'
    },
    {
        name: 'Yogurt',
        price: 22000,
        category: 'Milk',
        img: 'http://pngimg.com/uploads/yogurt/yogurt_PNG15190.png'
    },
    {
        name: 'Bananas',
        price: 25000,
        category: 'Fruits',
        img : 'http://pngimg.com/uploads/banana/banana_PNG825.png'
    },
    {
        name: 'Avocados',
        price: 67000,
        category: 'Fruits',
        img: 'https://avatanplus.ru/files/resources/original/5b3f33f4c58be1646ee2f449.png'
    },
    {
        name: 'Курятина',
        price: 45000,
        category: 'Meat',
        img:'https://e7.pngegg.com/pngimages/264/637/png-clipart-broiler-creole-chicken-chicken-soup-meat-cobb-salad-meat-hand-chicken.png'
    },
    {
        name: 'Kefir',
        price: 67000,
        category: 'Milk',
        img: 'https://avatanplus.ru/files/resources/mid/586ff7c338bc5159755fd2a0.png'
    },
    {
        name: 'Apples',
        price: 22000,
        category: 'Fruits',
        img: 'http://pngimg.com/uploads/apple/apple_PNG12405.png'
    }
]


let products1 = document.querySelector('.products')

let milk_btn = document.querySelector('.milk')

let meat_btn = document.querySelector('.meat')

let fruits_btn = document.querySelector('.fruits')


milk_btn.onclick = () =>{

    products1.innerHTML = ''

    for (let item of products){
        if (item.category === 'Milk'){

        let name = document.createElement('h2')
        let price = document.createElement('h3')
        let img = document.createElement('img')

        name.innerText = item.name
        price.innerText = item.price
        img.src = item.img
        img.classList.add('images')
        
        name.append(price)
        name.append(img)
        products1.append(name)
        }
    }
    milk_btn.classList.add('active')
    meat_btn.classList.remove('active')
    fruits_btn.classList.remove('active')
    
}
fruits_btn.onclick = () => {
    products1.innerHTML = ''

    for (let item of products) {
        if (item.category == 'Fruits') {

            let name = document.createElement('h2')
            let price = document.createElement('h3')
            let img = document.createElement('img')

            name.innerText = item.name
            price.innerText = item.price
            img.src = item.img
            img.classList.add('images2')

            name.append(price)
            name.append(img)
            products1.append(name)

        }
    }
    meat_btn.classList.remove('active')
    milk_btn.classList.remove('active')
    fruits_btn.classList.add('active')
}

meat_btn.onclick = () => {
    products1.innerHTML = ''

    for (let item of products) {
        if (item.category == 'Meat') {
            let name = document.createElement('h2')
            let price = document.createElement('h3')
            let img = document.createElement('img')

            name.innerText = item.name
            price.innerText = item.price
            img.src = item.img
            img.classList.add('images3')

            name.append(price)
            name.append(img)
            products1.append(name)
        }
    }
    milk_btn.classList.remove('active')
    fruits_btn.classList.remove('active')
    meat_btn.classList.add('active')
}