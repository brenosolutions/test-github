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


//dropdown action
function actionDropdown(id) {
    document.getElementById('actionDropdown' + id).classList.toggle('show-dropdown-action')
}

window.onclick = (e) => {
    if (!e.target.matches('.dropdown-btn-action, .avatar img, .notification i, .notification .number')) {
        closeDropdownAction()
        document.querySelectorAll('.dropdown-menu').forEach((value, key) => {
            value.classList.remove('active')
        })
    }
}

function closeDropdownAction() {
    var dropdowns = document.querySelectorAll('.dropdown-action-item')
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i]

        if (openDropdown.classList.contains('show-dropdown-action')) {
            openDropdown.classList.remove('show-dropdown-action')
        }
    }
}




