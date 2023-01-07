import { contentContainer, bodyContainer } from "."
import menuTab from "./menuTab"

const App = () => {
    console.log('app')
    navBar()
    body()
}

const navBar = () => {
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
            body()
        })
    })()
    const menuButton = (() => {
        const button = document.createElement('button')
        button.classList.add('navBtn')
        button.textContent = 'Menu'
        nav.appendChild(button)

        button.addEventListener('click', () => {
            clearApp()
            menuTab()
        })
    })()
    const contactButton = (() => {
        const button = document.createElement('button')
        button.classList.add('navBtn')
        button.textContent = 'Contact'
        nav.appendChild(button)
    })()
}

const body = () => {
    // const bodyContainer = document.createElement('main')
    bodyContainer.id = 'main'
    bodyContainer.textContent = 'sakdjhasd'
    contentContainer.appendChild(bodyContainer)
}

// bodys = body()

const clearApp = () => {
    // const bodyContainer = document.querySelector('#main')
    bodyContainer.innerHTML = ''
}



export default App