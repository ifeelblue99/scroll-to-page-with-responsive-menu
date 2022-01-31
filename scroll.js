const navLinks = document.querySelectorAll(".nav-link")
const nav = document.querySelector("nav")
const headerTitle = document.querySelector("#header-title")
const menuButton = document.querySelector("#svg-hamburger-icon")


// navigation
navLinks.forEach(link =>{
    link.addEventListener("click", el=>{
        let pageToScroll = document.querySelector(`.${el.target.dataset.direction}`)
            
        headerTitle.textContent = el.target.dataset.direction

        pageToScroll.scrollIntoView({behavior: 'smooth'})

    })
})

// menu button
let isClickedToMenuIcon = false
menuButton.addEventListener("click", ()=>{
    if(!isClickedToMenuIcon){
        nav.style.top = -100+"vh"
        isClickedToMenuIcon = true
    }else{
        nav.style.top = 0
        isClickedToMenuIcon = false
    }
})
