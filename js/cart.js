let loggedUser;
totalprice = 0;
let data = [
    {
        title: "Magic coat",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 180,
        imgSrc: './imgs/product1.jpeg'
    },
    {
        title: "Driving suit",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 250,
        imgSrc: './imgs/product2.jpeg'
    },
    {
        title: "Space suit",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 320,
        imgSrc: './imgs/product3.jpeg'
    },
    {
        title: "Iron man suit",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1350,
        imgSrc: './imgs/product4.jpeg'
    }
];
let users = JSON.parse(window.localStorage.getItem("users"));
let cuurentUser = JSON.parse(window.localStorage.getItem("users")).filter(el => {
    return el.isLogged == true;
})[0];

if(!cuurentUser) {
    window.location.replace("./login.html")
} else {
    
    users.forEach(element => {
    if(element.isLogged == true) {
        loggedUser = element;
        writeCartPage(loggedUser.cartItems);
    }
});

document.querySelectorAll(".btn").forEach((btn) => {
    btn.onclick = () => {
        loggedUser.cartItems = loggedUser.cartItems.filter((item) => {
            return item != btn.getAttribute("data-title");
        })
        users.forEach(u => {
            if(u.id == loggedUser.id) {
                u.cartItems = loggedUser.cartItems;
            }
        })
        window.localStorage.setItem("users", JSON.stringify(users))
        btn.parentElement.parentElement.remove();
        calcPrice(-btn.getAttribute("data-price"));
    }
})


function writeCartPage(userItems) {
    document.getElementsByClassName("products")[0].innerHTML = "";
    let thisItemData;
    userItems.forEach((item) => {
        data.forEach((el) => {
            if (el.title == item) {
                thisItemData = el;
            }
        });
        document.getElementsByClassName("products")[0].innerHTML =`
        ${document.getElementsByClassName("products")[0].innerHTML}
        <div class="product row">
            <div class="col-12 col-xl-4 text-align-right">
                <img src="${thisItemData.imgSrc}" class="rounded" width="200px" alt="">
            </div>
            <div class="details ps-4 d-flex flex-column justify-content-between col-3">
                <span class="title d-block fs-2 d-block">${thisItemData.title}</span>
                <div class="amount pt-4 d-flex">
                <span class="rounded-circle p-3 text-bg-secondary" title="Not Allowed Yet">+</span>
                <span class="fs-2"> 1</span>
                    <span class="rounded-circle p-3 text-bg-secondary" title="Not Allowed Yet">-</span>
                </div>
                <div class="price fs-2 mt-3 d-flex align-items-end">
                    ${thisItemData.price}$
                </div>
            </div>
            <div class="price fs-2 col-12 col-xl-3 mt-4 mt-lg-0 d-flex align-items-end">
                <button class="btn btn-danger" data-title="${thisItemData.title}" data-price="${thisItemData.price}">
                    Remove item
                    </button>
                    </div>
            </div>
        </div>
            `
            calcPrice(thisItemData.price);

    })
}
}

function calcPrice(addedPrice) {
    totalprice+= addedPrice;
    document.querySelector(".price-span").innerHTML = "price : " + totalprice;
    document.querySelector(".delv-span").innerHTML = "Delivery Service : " + (totalprice > 0 ? 50 : 0);
    document.querySelector(".total-span").innerHTML = `total price is :  ${totalprice + (totalprice > 0 ? 50 : 0)}`;
}