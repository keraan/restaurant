import { elementFactory } from "."


export default function createMenuTab() {
    const menuTitle = elementFactory('div', 'menuTitle', 'title', 'Menu')
    bodyContainer.appendChild(menuTitle)

    const menuContainer = elementFactory('div', null, 'menuContainer', '')
    bodyContainer.appendChild(menuContainer)

    const pizza = menuItemFactory('Peri-Peri Chicken Pizza', 'A flavoursome pairing of seasoned chicken pieces, Italian cherry tomatoes, sliced red onion & baby spinach, topped with a swirl of our addictive peri peri sauce')
    const cola = menuItemFactory('Coca-Cola', "Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company.")
    const burger = menuItemFactory('Truffle Burger', 'THE BIG TRUFFLE DELUXE BURGER. Wagyu beef, truffle cheese, oak lettuce, truffle butter, truffle ranch dressing, shaved truffle.')
    const steak = menuItemFactory('MB9+ Steak', 'Wagyu Scotch Fillet MB9+ is one of our most premium cuts of meat. With a marble score of 9+, this is an incredibly succulent and rich piece of meat. ')
    const chips = menuItemFactory('Chips', 'Chips are chips')


    navBtnActive()


}

const menuItemFactory = (name, description) => {
    const menuContainer = document.querySelector('.menuContainer')
    
    const init = (() => {
        const item = elementFactory('div', null, 'menuItem', null)
        menuContainer.appendChild(item)

        const itemName = elementFactory('div', null, 'menuItemName', name)
        item.appendChild(itemName)

        const itemDescription = elementFactory('div', null, 'menuItemDescription', description)
        item.appendChild(itemDescription)
    })()

    const click = () => {

    }


    return {name}
}

function navBtnActive() {
    const navMenuBtn = document.querySelector('#menuBtn')
    // const navHomeBtn = document.querySelector('#homeBtn')
    // const navContactBtn = document.querySelector('#contactBtn')
    const navBtns = document.querySelectorAll('.navBtn')
    navBtns.forEach(navBtn => navBtn.classList.remove('active'))
    navMenuBtn.classList.add('active')

    // const menuContainer = document.querySelector('.menuContainer')
    // setTimeout(() => {menuContainer.classList.add('fade-in')}, 0)
    menuFade()
}

export function menuFade() {
    const menuBody = document.querySelector('.menuContainer')
    if (menuBody === null) {return}
    if (Array.from(menuBody.classList).includes('fade-in')) {
        setTimeout(() => {menuBody.classList.remove('fade-in')}, 5)
        console.log('first')
    } else {
        setTimeout(() => {menuBody.classList.add('fade-in')}, 5)
        console.log('second')
    }
}