window.onload = function() {
    // navbar burger menu for mobile
    const navbarButton = document.getElementById('navbar-burger-menu')
    const navbarList = document.getElementById('navbar-ul')

    navbarButton.addEventListener('click', () => {
        navbarList.classList.toggle('active')       
    })
}