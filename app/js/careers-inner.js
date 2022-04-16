let contentButtonsGroup = document.querySelector('.content-card').querySelector('.content-title').querySelectorAll('.btn');
let contentDescriptionGroup = document.querySelector('.content-card').querySelectorAll('.content-description');
let createActiveClass = index => {
    contentButtonsGroup[index].classList.add('active');
    contentDescriptionGroup[index].classList.add('active');
};
createActiveClass(0);
contentButtonsGroup.forEach( (item, index) => {
    item.addEventListener('click', () => {
        contentButtonsGroup.forEach(el => {
            el.classList.remove('active');
        })
        contentDescriptionGroup.forEach(el => {
            el.classList.remove('active');
        })
        createActiveClass(index);
    })
})
