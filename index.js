
let main = document.querySelector('main')
main.remove()

let newHeader = document.createElement('h1#victory')
newHeader.innerHTML = "YOUR-NAME is the champion"
document.body.appendChild(newHeader)