let cuurentUser = JSON.parse(window.localStorage.getItem("users")).filter(el => {
    return el.isLogged == true;
})[0];

let users = JSON.parse(window.localStorage.getItem("users"));

if(!cuurentUser) {
    window.location.replace("./login.html")
} else {
    let adds = document.querySelectorAll(".card-body a");
    adds.forEach((a) => {
        a.onclick = () => {
            users.forEach(u => {
                if(u.id == cuurentUser.id) {
                    if (!u.cartItems.includes(a.parentElement.children[0].textContent)) {
                        u.cartItems.push(a.parentElement.children[0].textContent);
                    }
                }
            })
            console.log(users);
            window.localStorage.setItem("users", JSON.stringify(users))
            
        }
    })
}


