let mainHeaderMediaButton = document.querySelector('.main-header-media-button');
let mainHeaderButton = document.querySelector('#mainHeaderButton');
let mainHeaderMedia = document.querySelector('.main-header-media');
let mainHeaderMediaLinkGroup = document.querySelectorAll('.main-header-media-link');
let mainHeaderNavigationsLinkGroup = document.querySelectorAll('.main-header-navigations-link');
let mainLoading = document.querySelector('.main-loading');
let a = document.querySelector('.main-header-navigations').querySelector('ul').querySelectorAll('a');
a.forEach(item => {
    console.log(item)
})

let loadElements = () => {
    setTimeout(() => {
        mainLoading.classList.add('not-active');
    }, 700)
}
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
mainHeaderMediaLinkGroup.forEach(link => {
    let linkPathName = link.pathname;
    let wPathName = window.location.pathname;
    if(wPathName === linkPathName) {
        link.classList.add('activePath')
    }
    link.onclick = function () {
        removeClassNav();
    }
});
mainHeaderNavigationsLinkGroup.forEach(link => {
    let linkPathName = link.pathname;
    let wPathName = window.location.pathname;
    if(wPathName === linkPathName) {
        link.classList.add('activePath')
    }
});
