import { elementFactory } from "."

export default function createContactPage() {
    const contact = elementFactory("div", "contactPage", "tab", '')
    const bodyContainer = document.querySelector('#bodyContainer')
    bodyContainer.appendChild(contact)

    const contactTitle = elementFactory('div', 'contactPageTitle', 'title', 'Contact')
    contact.appendChild(contactTitle)

}