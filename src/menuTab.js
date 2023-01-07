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


}

const menuItem = {

}

const menuItemFactory = (name, description) => {
    const menuContainer = document.querySelector('.menuContainer')
    
    const init = (() => {
        const item = document.createElement('div')
        item.classList.add('menuItem')
        menuContainer.appendChild(item)

        const itemName = document.createElement('div')
        itemName.classList.add('menuItemName')
        itemName.textContent = name
        item.appendChild(itemName)

        const itemDescription = document.createElement('div')
        itemDescription.textContent = description
        item.appendChild(itemDescription)
        // console.log(menuContainer)

    })()

    const click = () => {

    }


    return {name}
}
