

function changedHeading(ev){
    ev.preventDefault()
    const heading = document.querySelector('h1')
    const f = ev.target
    const name = f.personName.value
heading.textContent = name
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changedHeading)
