let burgergButton = document.querySelector('.btn')

burgergButton.addEventListener("click", function () {


    if (nav.style.left == '0vw') {
        nav.style.left = '120vw'
    }
    else {
        nav.style.left = '0vw'
    }

})
let nav = document.querySelector('nav')