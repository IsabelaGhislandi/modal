const button = document.querySelector('button')
const modal = document.querySelector('.invisible')

button.addEventListener('click', remover)

function remover() {
   modal.classList.toggle('invisible')
   document.onkeydown = function(e) {
    if(e.key === 'Escape') {
        modal.classList.toggle('invisible')
    }
  }
}



