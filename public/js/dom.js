const foodButton = document.querySelector('#food');
const drinkButton = document.querySelector('#drinks');
const container = document.querySelector('.container');

foodButton.addEventListener('click', () => {
    request('/food', 'GET', '1', (err, res) => {
        if (err) console.log('err', err);
        container.innerHTML = '';
        res.forEach(element => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('h3');
            const price = document.createElement('h4');
            img.src = element.img_link;
            title.textContent = element.name;
            price.textContent = element.price;
            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(price);  
            container.appendChild(div);
            container.classList.add('container');
            div.classList.add('div')

        });
    })
})

drinkButton.addEventListener('click', () => {
    request('/drink', 'GET', '2', (err, res) => {
        if (err) console.log('err', err);
        container.innerHTML = '';
        res.forEach(element => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('h3');
            const price = document.createElement('h4');
            img.src = element.img_link;
            title.textContent = element.name;
            price.textContent = element.price;
            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(price);  
            container.appendChild(div);
            container.classList.add('container');
            div.classList.add('div')            
        });
    })
})
const type = 'food';
const mealName = document.querySelector('#mealName');
const mealPrice = document.querySelector('#mealPrice');
const meal_img_url = document.querySelector('#mealimg');
const selection = document.querySelector('#selection');
const add = document.querySelector('.addForm');

add.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = mealName.value.trim();
    const price = mealPrice.value.trim();
    let select = selection.value.trim();
    if (select === 'Food')
        select = 1; else select = 2;
    const url = meal_img_url.value.trim();
    const obj = {
        price, select, url, nameValue
    }
    console.log(obj)
    request('/suggestion', 'POST', obj, (err, res) => {
        if (err) console.log('err', err)
        console.log(res);
    })
})
