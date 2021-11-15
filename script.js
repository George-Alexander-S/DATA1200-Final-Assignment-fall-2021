window.onload = function() {
    // navbar burger menu for mobile
    const navbarButton = document.getElementById('navbarBurgerMenu')
    const navbarList = document.getElementById('navbarUl')

    navbarButton.addEventListener('click', () => {
        navbarList.classList.toggle('active')       
    })
}