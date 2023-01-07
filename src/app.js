import { contentContainer, elementFactory } from "."
import createMenuTab from "./menuTab"
import createHomePage from "./homeTab"
import createContactPage from "./contactTab"

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
        const button = document.createElement('button')
        button.classList.add('navBtn')
        button.textContent = 'Home'
        nav.appendChild(button)

        button.addEventListener('click', () => {
            clearApp()
            createHomePage()
        })
    })()
    const menuButton = (() => {
        const button = document.createElement('button')
        button.classList.add('navBtn')
        button.textContent = 'Menu'
        nav.appendChild(button)

        button.addEventListener('click', () => {
            clearApp()
            createMenuTab()
        })
    })()
    const contactButton = (() => {
        const button = document.createElement('button')
        button.classList.add('navBtn')
        button.textContent = 'Contact'
        nav.appendChild(button)

        button.addEventListener('click', () => {
            clearApp()
            createContactPage()
        })
    })()
}

function createBodyContainer() {
    const el = elementFactory("main", "bodyContainer", "bodyContainer", "")
    contentContainer.appendChild(el)
    return el
}

// const body = () => {
//     // const bodyContainer = document.createElement('main')
//     bodyContainer.id = 'main'
//     bodyContainer.textContent = 'sakdjhasd'
//     contentContainer.appendChild(bodyContainer)
// }
// bodys = body()

// const body = elementFactory("main", "bodyContainer", 'asdas')

const clearApp = () => {
    const bodyContainer = document.querySelector('#bodyContainer')
    bodyContainer.innerHTML = ''
}



export default App