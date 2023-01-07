import { contentContainer, bodyContainer } from "."


const menuTab = () => {
    console.log('hello i am the menutab')
    menu()
}

const menu = () => {
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    bodyContainer.appendChild(menuContainer)
    const pizza = menuItemFactory('pizza')
    const cola = menuItemFactory('cola')
    const burger = menuItemFactory('burger')
    const steak = menuItemFactory('steak')
    const chips = menuItemFactory('chips')

}

const menuItemFactory = (name) => {
    const menuContainer = document.querySelector('.menuContainer')
    
    const init = (() => {
        const item = document.createElement('div')
        item.classList.add('menuItem')
        item.textContent = name
        console.log(menuContainer)
        menuContainer.appendChild(item)
    })()

    const click = () => {

    }


    return {click}
}

export default menuTab