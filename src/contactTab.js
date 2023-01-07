import { elementFactory } from "."

export default function createContactPage() {
    const contact = elementFactory("div", "contactPage", "tab", '')
    const bodyContainer = document.querySelector('#bodyContainer')
    bodyContainer.appendChild(contact)

    const contactTitle = elementFactory('div', 'contactPageTitle', 'title', 'Contact')
    contact.appendChild(contactTitle)


    createContactBody()
    navBtnActive()
}

function createContactBody() {
    const bodyContainer = document.querySelector('#bodyContainer')
    const body = elementFactory('div', 'contactBody', 'contactBody', '')
    bodyContainer.appendChild(body)

    const mama = contactFactory('Mama', '0402282831', '@gmail.com')
    const dada = contactFactory('Dada', '0499999899', '@gmail.com')
}
const contactFactory = (name, phone, email) => {
    const contactBody = document.querySelector('#contactBody')

    const contactBlock = elementFactory('div', phone, 'contactBlock', '')
    const nameEl = elementFactory('div', null, 'contact', name)
    const phoneEl = elementFactory('div', null, 'phoneNum', phone)
    const emailEl = elementFactory('div', null, 'email', email)

    contactBody.appendChild(contactBlock)
    contactBlock.append(nameEl, phoneEl, emailEl)
}



function navBtnActive() {
    const navContactBtn = document.querySelector('#contactBtn')
    const navBtns = document.querySelectorAll('.navBtn')
    navBtns.forEach(navBtn => navBtn.classList.remove('active'))
    navContactBtn.classList.add('active')
    contactFade()
}

export function contactFade() {
    const contactBody = document.querySelector('.contactBody')
    console.log(contactBody)
    if (contactBody === null) {return}
    if (Array.from(contactBody.classList).includes('fade-in')) {
        setTimeout(() => {contactBody.classList.remove('fade-in')}, 5)
        console.log('first')
    } else {
        setTimeout(() => {contactBody.classList.add('fade-in')}, 5)
        console.log('second')
    }
}
