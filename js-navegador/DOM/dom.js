// 1. Inserta 4 items más con el texto 3, 4, 5 y 6 respectivamente dentro del contenedor.
for (let i = 3; i < 7; i++){

    const $container = document.querySelector('.container')

    const $div = document.createElement('div')
    $div.classList.add('item') 
    $div.appendChild(document.createTextNode(i))

    $container.appendChild($div)
}

// 2. Agrégales a todos los items la clase error
const $item = document.querySelectorAll('.item')
$item.forEach(e => e.classList.add("error"))

// 3. Agrégale el texto "2" al círculo
document.querySelector('.circle').appendChild(document.createTextNode('2'))

// 4. Elimina el párrafo
const $p = document.querySelector('p')
$p.parentNode.removeChild($p)

