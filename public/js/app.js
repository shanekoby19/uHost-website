const dropdown = document.querySelector(`.dropdown`)
const mainNavItems = document.querySelector(`.main-nav__items`);

const button = document.querySelector(`.button`);

dropdown.addEventListener(`click`, (event) => {
    event.preventDefault();
    if(window.innerWidth <= 640) {
        mainNavItems.classList.contains(`hidden`) ? mainNavItems.classList.remove(`hidden`) : mainNavItems.classList.add(`hidden`);
    }
});

button?.addEventListener(`click`, (event) => {
    event.preventDefault();
    const form = event.target.parentElement;
    const elements = form.elements;
    for(let i=0; i < elements.length -1; i++) {
        if(elements[i].value === ``) {
            console.log(elements[i])
        }
        else {
            elements[i].classList.remove(`invalid`)
        }
    }
});