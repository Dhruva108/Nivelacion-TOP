const $addBox = document.querySelector('#append')

$addBox.addEventListener('click', function(){
    const $div = document.createElement('div')
    $div.classList.add('square')

    const $squares = document.querySelector('.squares')
    $squares.appendChild($div)

    const $dltBox = document.querySelectorAll(".square")
    const $dlt = $dltBox

    $dltBox.forEach(function($dlt){
        $dlt.addEventListener('mouseenter', function(){
            $dlt.parentNode.removeChild($dlt)
        })
    })
})








