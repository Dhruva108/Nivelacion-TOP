

const $addBox = document.querySelector('#append')

const $squares = document.querySelector(".squares")

$addBox.addEventListener('click', function(){
    const $div = document.createElement('div')
    $div.classList.add('square')
    $squares.appendChild($div)
})

$squares.addEventListener('mousemove', element => {
    if (element.target.classList.contains('square')){
        element.target.parentNode.removeChild(element.target)
    }
})