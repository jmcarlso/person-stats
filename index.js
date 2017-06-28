function changedHeading(ev){
    ev.preventDefault()
    
    const f = ev.target
    const name = f.personName.value
    const stat = document.querySelector('#hw')
    const statChange = f.personAge.value
    var color = document.getElementById("color").value;
   // stat.textContent = name +': ' + statChange
//const list = document.createElement('ul')

//const nameItem = document.createElement('li')
renderList(name,statChange,color)
//list.appendChild(ageItem)
//list.appendChild(colorItem)
stats.appendChild(renderList(name,statChange,color))

    
    stats.style.color = color;
}
function renderColor(color){

const colorDiv = document.createElement('div')
colorDiv.style.backgroundColor = color
colorDiv.style.width = '6rem'
colorDiv.style.height = '3rem'

return colorDiv
}

function renderListItem(){

const item = document.createElement('li')
return item
}

function renderList(name,statChange,color){
const list = document.createElement('ul')
const item = []

for(var i = 0; i<3;i++){
item[i] = renderListItem()
}
item[0].textContent = `Name: ${name}`
//const ageItem =document.createElement('li')
item[1].textContent =  `Age: ${statChange}`

//const colorItem = document.createElement('li')
item[2].textContent = `Favorite Color: `
//item[2].style.backgroundColor = color
item[2].appendChild(renderColor(color))
for(var j = 0;j< item.length;j++){
    list.appendChild(item[j])
}
return list
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changedHeading)
