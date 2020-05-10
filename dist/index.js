const menuBtn = document.getElementById('open-btn')
const navMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('show')
    navMenu.classList.toggle('show')
})