
// ///////////////////////////////////////////////////

let userInfo = document.querySelector("#user-info")
let userData = document.querySelector("#user")
let links = document.querySelector(".links")

if ( localStorage.getItem("username")){
    links.remove()
    userInfo.style.display = "block"
    userData.innerHTML = localStorage.getItem("username")
}