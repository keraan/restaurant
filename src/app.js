import { contentContainer, elementFactory } from "."
import createMenuTab from "./menuTab"
import createHomePage from "./homeTab"
import createContactPage from "./contactTab"
import { contactFade } from "./contactTab"
import { menuFade } from "./menuTab"
import { homeFade } from "./homeTab"

const App = () => {
    const navBar = createNavBar()
    const body = createBodyContainer()
    const home = createHomePage()
} 

function createNavBar() {
    const nav = document.createElement('div')
    nav.id = 'navBar'
    nav.textContent = ''
    contentContainer.appendChild(nav)
    const homeButton = (() => {
        const button = elementFactory('button', 'homeBtn', 'navBtn', 'Home')
        nav.appendChild(button)

        button.addEventListener('click', () => {
            setTimeout(() => {
                contactFade()
                menuFade()
                }, 0)
            setTimeout(() => {
                clearApp()
                createHomePage()
                console.log('yo')
            }, 600)
        })
    })()
    const menuButton = (() => {
        const button = elementFactory('button', 'menuBtn', 'navBtn', 'Menu')
        nav.appendChild(button)

        button.addEventListener('click', () => {
            setTimeout(() => {
                contactFade()
                homeFade()
            }, 0)
            setTimeout(() => {
                clearApp()
                createMenuTab()
                console.log('yo')
            }, 600)
        })
    })()
    const contactButton = (() => {
        const button = elementFactory('button', 'contactBtn', 'navBtn', 'Contact')
        nav.appendChild(button)

        button.addEventListener('click', () => {
            setTimeout(() => {
                menuFade()
                homeFade()
            }, 0)
            setTimeout(() => {
                clearApp()
                createContactPage()}, 600)
        })
    })()
}

function createBodyContainer() {
    const el = elementFactory("main", "bodyContainer", "bodyContainer", "")
    contentContainer.appendChild(el)
    return el
}

function clearApp () {
    const bodyContainer = document.querySelector('#bodyContainer')
    bodyContainer.innerHTML = ''
}





export default App