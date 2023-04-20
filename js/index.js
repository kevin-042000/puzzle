const img = document.querySelectorAll(".imagen")
const contenedor_receptor = document.querySelectorAll(".cont")
const contenedor_inicial = document.querySelectorAll(".contenedor-img-inicial")

img.forEach(imagen =>{

    imagen.addEventListener("dragstart", Event => {
        console.log("arrastrando" )
        Event.dataTransfer.setData("id", imagen.id)
    })

    imagen.addEventListener("dragend", ()=> {
        console.log("fin de arrastre")
    })
})

contenedor_receptor.forEach(receptor => {

    receptor.addEventListener("dragover", Event => {
        Event.preventDefault()
         const tieneImagen = receptor.querySelector(".imagen")
        if (!tieneImagen) {
            Event.dataTransfer.dropEffect = "move"
        } else {
            Event.dataTransfer.dropEffect = "none"
        }
    })

    receptor.addEventListener("drop", Event => {
        Event.preventDefault()
        const id_img = Event.dataTransfer.getData("id")
        const nodo = document.getElementById(id_img)
        receptor.appendChild(nodo)

    })
})


contenedor_inicial.forEach(inicial => {

    inicial.addEventListener("dragover", Event => {
        Event.preventDefault()
        const tieneImagen = inicial.querySelector(".imagen")
        if (!tieneImagen) {
            Event.dataTransfer.dropEffect = "move"
        } else {
            Event.dataTransfer.dropEffect = "none"
        }
    })


    inicial.addEventListener("drop", Event => {
        Event.preventDefault()
        const id_img = Event.dataTransfer.getData("id")
        const nodo_inicio = document.getElementById(id_img)
        inicial.appendChild(nodo_inicio)

    })
    
})