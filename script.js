let Menu = document.getElementById('menu'),
    Close = document.getElementById('close'),
    links = document.getElementById('links3');

function showmenu() {
    Menu.style.display = 'none';
    Close.style.display = 'flex'
    links.style.opacity='1'
    
}
function hidemenu() {
    Menu.style.display = 'flex';
    Close.style.display = 'none'
    links.style.opacity='0'
}
