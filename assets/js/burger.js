const burger = document.getElementById("burger")
const menu = document.getElementById("menu")

const handleClickButton = () => {

    burger.classList.toggle("active")
    menu.classList.toggle("active")
    document.body.classList.toggle("active")
}

burger.addEventListener('click', handleClickButton)