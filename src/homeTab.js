import { elementFactory } from "."

export default function createHomePage() {
    const home = elementFactory("div", "homePage", "tab", '')
    const bodyContainer = document.querySelector('#bodyContainer')
    bodyContainer.appendChild(home)

    const homeTitle = elementFactory('div', 'homePageTitle', 'title', 'Home')
    home.appendChild(homeTitle)

}