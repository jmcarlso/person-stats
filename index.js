

function changedHeading(ev){
    ev.preventDefault()
    
    const f = ev.target
    const name = f.personName.value
    const stat = document.querySelector('#hw')
    const statChange = f.personAge.value
    var color = document.getElementById("color").value;
   // stat.textContent = name +': ' + statChange
const list = document.createElement('ul')

const nameItem = document.createElement('li')
nameItem.textContent = `Name: ${name}`
const ageItem =document.createElement('li')
ageItem.textContent =  `Age: ${statChange}`

const colorItem = document.createElement('li')
colorItem.textContent = `Favorite Color: `
//colorItem.style.backgroundColor = color

const colorDiv = document.createElement('div')
colorDiv.style.backgroundColor = color
colorDiv.style.width = '6rem'
colorDiv.style.height = '3rem'
colorItem.appendChild(colorDiv)

list.appendChild(nameItem)
list.appendChild(ageItem)
list.appendChild(colorItem)
stats.appendChild(list)

    
    stats.style.color = color;
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changedHeading)
