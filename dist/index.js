const menuBtn = document.getElementById('open-btn')
const navMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('show')
    navMenu.classList.toggle('show')
})

window.addEventListener('scroll', e=>{
    if(window.scrollY> 60){
       document.querySelector('nav').classList.add('white-bg')
    } else {
        document.querySelector('nav').classList.remove('white-bg')
    }
})