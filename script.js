function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
        .then(response => response.json())
        .then(data => displayMenu(data))
        .catch(error => console.log(error));
}

function displayMenu(foodItems) {

    const menu = document.getElementById("menuBar");
    menu.innerHTML=`Menu:`;
 
   
    const menuElement = document.getElementById('menu');
     
    foodItems.forEach(item => {
         const listItem = document.createElement('li');
        // const img = document.createElement("img");
        // img.src=item.imgSrc;
        // img.style.width="200px"
        // img.style.alignContent="center";
        // img.style.alignItems="center";
        
        listItem.innerHTML= `
        
        <li class="item">
        <img class = "imgClass" src="${item.imgSrc}" alt="">
        <h1>${item.name} - $ ${item.price}</h1>
         </li>`
       // listItem.textContent = item.name + ' - Rs' + item.price;
         
        menuElement.append(listItem);
        
    });
   
}


function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
            const order = {
                burgers: []
            };
            for (let i = 0; i < 3; i++) {
                const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
                order.burgers.push(randomBurger);
            }
            resolve(order);
        }, 2500);
    });
}


function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}


function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

async function handleOrder() {
    try {
        getMenu();
        const order = await takeOrder();
        console.log('Order:', order);
        const orderStatus = await orderPrep();
        console.log('Order Status:', orderStatus);
        const paymentStatus = await payOrder();
        console.log('Payment Status:', paymentStatus);
        
        thankyouFnc();
        

    } catch (error) {
        console.log(error);
    }
}