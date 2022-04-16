let businessButtonGroup = document.querySelector('.section-business').querySelector('.content-button-group').querySelectorAll('.btn');
let businessTextTag = document.querySelector('.section-business').querySelector('.content-group').querySelectorAll('.content-text');
let createBusinessActiveClass = index => {
    businessTextTag[index].classList.add('active');
    businessButtonGroup[index].classList.add('active');
}
createBusinessActiveClass(0);
businessButtonGroup.forEach((item, index) => {
    item.addEventListener('click', () => {
        businessButtonGroup.forEach(el => {
            el.classList.remove('active');
        })
        businessTextTag.forEach(el => {
            el.classList.remove('active');
        })
        createBusinessActiveClass(index)
    })
})