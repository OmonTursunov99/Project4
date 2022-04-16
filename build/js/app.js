let mainHeaderMediaButton = document.querySelector('.main-header-media-button');
let mainHeaderButton = document.querySelector('#mainHeaderButton');
let mainHeaderMedia = document.querySelector('.main-header-media');
let mainHeaderMediaLinkGroup = document.querySelectorAll('.main-header-media-link');
let mainLoading = document.querySelector('.main-loading');
let mainHeaderNavLinksGroup = document.querySelector('.main-header-navigations').querySelectorAll('a');
let mainHeaderNavMediaLinksGroup = document.querySelector('.main-header-media').querySelector('nav').querySelectorAll('a');
let mainFooterNavLinksGroup = document.querySelector('.nav-unordered').querySelectorAll('a');

mainHeaderMediaLinkGroup.forEach(link => {
    let linkPathName = link.pathname;
    let wPathName = window.location.pathname;
    if(wPathName === linkPathName) {
        link.classList.add('active')
    }
    link.onclick = function () {
        removeClassNav();
    }
});
mainHeaderNavLinksGroup.forEach(link => {
    let linkPathName = link.pathname;
    let wPathName = window.location.pathname;
    if(wPathName === linkPathName) {
        link.classList.add('active')
    }
    link.onclick = function () {
        removeClassNav();
    }
})
mainHeaderNavMediaLinksGroup.forEach(link => {
    let linkPathName = link.pathname;
    let wPathName = window.location.pathname;
    if(wPathName === linkPathName) {
        link.classList.add('active')
    }
    link.onclick = function () {
        removeClassNav();
    }
})
mainFooterNavLinksGroup.forEach(link => {
    let linkPathName = link.pathname;
    let wPathName = window.location.pathname;
    if(wPathName === linkPathName) {
        link.classList.add('active')
    }
    link.onclick = function () {
        removeClassNav();
    }
})

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        mainLoading.classList.add('not-active');
    }, 700)
})

window.addEventListener('scroll', () => {
    let mainHeader = document.querySelector('.main-header');
    let mainUpButton = document.querySelector('.main-up-button');
    let nextElement = mainHeader.nextElementSibling.scrollHeight;
    let wScrollY = window.scrollY;
    let mainHeaderHeight = mainHeader.scrollHeight;
    if(wScrollY > mainHeaderHeight && wScrollY < mainHeaderHeight + nextElement * 0.8) mainHeader.classList.add('not-active');
    else mainHeader.classList.remove('not-active');
    if(wScrollY > mainHeaderHeight + nextElement * 0.5) mainUpButton.classList.add('active');
    else mainUpButton.classList.remove('active');
});

let toggleClassNav = () => {
    mainHeaderMediaButton.classList.toggle('active');
    mainHeaderMedia.classList.toggle('active');
};
let removeClassNav = () => {
    mainHeaderMediaButton.classList.remove('active');
    mainHeaderMedia.classList.remove('active');
};
mainHeaderButton.addEventListener('click', () => {
    toggleClassNav();
});
window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    console.log(!target.closest('#mainHeaderButton'))
    if (!target.closest('.main-header-media') && !target.closest('#mainHeaderButton')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        removeClassNav();
    }
})