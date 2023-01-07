import { elementFactory } from "."

export default function createHomePage() {
    const home = elementFactory("div", "homePage", "tab", 'I AM HOME')
    const bodyContainer = document.querySelector('#bodyContainer')
    bodyContainer.appendChild(home)

    const homeTitle = elementFactory('div', 'homePageTitle', 'title', 'Home')
    home.appendChild(homeTitle)

    navBtnActive()

}

function navBtnActive() {
    const navHomeBtn = document.querySelector('#homeBtn')
    // const navContactBtn = document.querySelector('#contactBtn')
    const navBtns = document.querySelectorAll('.navBtn')
    navBtns.forEach(navBtn => navBtn.classList.remove('active'))
    navHomeBtn.classList.add('active')
    homeFade()

}

export function homeFade() {
    const homeBody = document.querySelector('.tab')
    if (homeBody === null) {return}
    if (Array.from(homeBody.classList).includes('fade-in')) {
        setTimeout(() => {homeBody.classList.remove('fade-in')}, 5)
        console.log('first')
    } else {
        setTimeout(() => {homeBody.classList.add('fade-in')}, 5)
        console.log('second')
    }
}