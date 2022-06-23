const $boton = document.querySelector('.wrapper')

const $tabla = document.querySelector('table')


const traerInfo = () => {
    fetch('Datos.json')
    .then(res => res.json())
    .then(datos => {
            tabla(datos)
    })

    
    function tabla(datos) {
        $tabla.classList = ''
        for (let valor of datos){
            // console.log(valor['name'])
            $tabla.innerHTML += `
            <tr>
                <td> <img src="${valor['flag_url']}"</td>
                <td>${valor['code']}</td>
                <td>${valor['name']}</td>
            </tr>          
            `
        }
    }

    const $dlt = document.querySelector('button')
    $dlt.remove()
}

$boton.addEventListener('click', traerInfo)