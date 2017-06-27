

function changedHeading(ev){
    ev.preventDefault()
    
    const f = ev.target
    const name = f.personName.value
    const stat = document.querySelector('#hw')
    const statChange = f.personAge.value
    
    stat.textContent = name +': ' + statChange

}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changedHeading)
