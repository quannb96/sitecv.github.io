// -----active-------
const showMenu = (toggleId, navId) =>{ 
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// ------active & remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkActive(){
    // active
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    // remove menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkActive))





