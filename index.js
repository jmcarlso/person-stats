

function changedHeading(ev){
    debugger

p.textContent = 'Clickety Click'
}

const btn = document.querySelector('button')
btn.addEventListener('click', changedHeading)

const p = document.querySelector('#instructions')
p.addEventListener('click', changedHeading)
