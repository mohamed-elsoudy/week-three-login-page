let cuurentUser = JSON.parse(window.localStorage.getItem("users")).filter(el => {
    return el.isLogged == true;
})[0];

let logoutBtn = document.getElementById("logout-btn");

let newArr = [];


if (!cuurentUser) {
    window.location.replace("./login.html");
} else {
    newArr = JSON.parse(window.localStorage.getItem("users"));
    newArr.forEach(u => {
        if (u.isLogged === true) {
            document.querySelector(".user").innerHTML = u.user;
        }
    });
    logoutBtn.onclick = function () {
        newArr.forEach(u => {
            if (u.isLogged === true) {
                u.isLogged = false;
            }
        });
        console.log(newArr[0].isLogged);
        
        window.localStorage.setItem("users", JSON.stringify(newArr));
        goToTheLoginPage();
    }

}


function goToTheLoginPage() {
    window.location.replace("/login.html");
}