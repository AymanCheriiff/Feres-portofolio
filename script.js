const side_bar = document.querySelector('.side-bar');
const close_Button = document.querySelector('#close-button');

function closeSideBar() {

    const barTop = document.querySelector('.top');
    const barBottom = document.querySelector('.bot');

    side_bar.style.left = '-300px';
    barTop.style.transform = 'rotate(45deg)';
    barBottom.style.transform = 'rotate(-45deg)';
}

close_Button.addEventListener('click', closeSideBar);