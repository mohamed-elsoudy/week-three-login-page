let emailInput = document.querySelector(".email input");
let passwordInput = document.querySelector(".password input");
let submitInput = document.querySelector(".submit input");
let loggedUser;
let data = [
    {
        title: "Magic coat",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 180,
        cartItems: [],
        imgSrc: './imgs/product1.jpeg'
    },
    {
        title: "Driving suit",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 250,
        cartItems: [],
        imgSrc: './imgs/product2.jpeg'
    },
    {
        title: "Space suit",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 320,
        cartItems: [],
        imgSrc: './imgs/product3.jpeg'
    },
    {
        title: "Iron man suit",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1350,
        imgSrc: './imgs/product4.jpeg',
        cartItems: [],
    }
];
let users = [
    // {
    //     id: 1,
    //     user: "mohamed",
    //     password: "987123",
    //     cartItems: ["Magic coat", "Driving suit"],
    //     isLogged: false
    // }
]
// window.localStorage.setItem("users", JSON.stringify(users))
if (window.localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
    users.forEach(user => {
        if(user.isLogged == true) {
            goToTheHomePage();
            loggedUser = user;
        }
    });
}
console.log(users);

if (!loggedUser) {
    // goToTheHomePage(loggedUser);
    submitInput.onclick = function(e) {
        e.preventDefault();
        if (users != []) {
            users.forEach((u) => {
                if(u.user === emailInput.value && u.password === passwordInput.value) {
                    u.isLogged = true;
                    localStorage.setItem("users", JSON.stringify(users));
                    goToTheHomePage();
                    loggedUser = true;
                }})    
        }

        if(emailInput.value != "" && passwordInput.value.length > 5 && !loggedUser) {
                users.push({
                    id: Date.now(),
                    user: emailInput.value,
                    password: passwordInput.value,
                    cartItems: [],
                    isLogged: true
                })
                window.localStorage.setItem("users", JSON.stringify(users));
                goToTheHomePage();
            }
    }
}

function goToTheHomePage(user) {
    window.location.replace("/home.html");
}