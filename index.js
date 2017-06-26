console.log("it worked");

function changedHeading(){
const heading = document.querySelector('h1')
heading.textContent = 'Ye Olde Person Stats';
}

const btn = document.querySelector('button')
btn.addEventListener('click', changedHeading)