//dropdown
let notification = document.querySelector('.notification'),
    avatar = document.querySelector('.avatar')

dropMenu(avatar)
dropMenu(notification)

function dropMenu(selector) {
    selector.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu').forEach((value, key) => {
            if (selector.querySelector('.dropdown-menu') != value) {
                value.classList.remove('active')
            }
        })
        selector.querySelector('.dropdown-menu').classList.toggle('active')
    })
}

//siderbar toggle
document.querySelector('.bars').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active')
})







