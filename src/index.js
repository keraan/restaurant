import { camelCase } from "lodash";
import App from "./app";
import menuTab from "./menuTab";

export const contentContainer = document.querySelector('#content')

export const elementFactory = (element, id, className, textContent) => {
    const el = document.createElement(element)
    el.id = id
    el.classList.add(className)
    el.textContent = textContent

    return el
}


console.log(camelCase('hello world you '))
App()

