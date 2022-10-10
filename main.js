contacto = [
    {
        nombre: "Ronald",
        apellido: " Nav",
        numero: " 313265498",
        gustos: [' pizza', ' programación', ' enseñar']
      
    },
    {
        nombre: 'Harry',
        apellido: ' Potter',
        numero: ' 0994372684',
        gustos: [' Hogwarts', ' magia']
    },

    {
        nombre: ' Sherlock',
        apellido: ' Holmes',
        numero: ' 0487345643',
        gustos: [' clases interesantes', ' violin']
    },
    {
        nombre: 'Goku',
        apellido: '',
        numero: ' 123412523',
        gustos: [' Artes Marciales', ' Milk', ' Luchar']
    },
    {
        nombre: 'Barry',
        apellido: 'Allen',
        numero: '2356346346',
        gustos: [' Correr superrapido', ' Iris West', ' Misterios']
    },
    {
        nombre: 'Tony',
        apellido: ' Stark',
        numero: ' 24634745',
        gustos: [' Mujeres', ' Tecnología', ' Dinero']
    },
    {
        nombre: 'Peter',
        apellido: ' Parker',
        numero: ' 24634745',
        gustos: [' Ayudar a tia May', ' Ser un buen vecino']
    },


]


const boton = document.getElementById('buscar')
const display = document.querySelector('.mostrarDatosDeUsuario')
const nombre = document.getElementById('nombre')
let seleccionarDatos = document.getElementById('propiedad')

boton.addEventListener('click',() => {

    if (nombre.value === '' || seleccionarDatos.value === '') {
        alert('por faavor digite los datos requeridos')
    }else{

        for (let i in contacto) {

            if(contacto[i].nombre===nombre.value){
                if (seleccionarDatos.value === 'todos') {
                   display.innerHTML = ('Apellido:' +' '+ contacto[i].apellido)
                    display.innerHTML += ('Numero:' +' '+  contacto[i].numero)
                    display.innerHTML += ('Gustos:' +' '+  contacto[i].gustos)
                }
                if(seleccionarDatos.value === 'apellido'){
                    display.innerHTML = ('Apellido:' +' '+  contacto[i].apellido)
                }
                if(seleccionarDatos.value === 'numero'){
                    display.innerHTML = ('Numero:' +' '+  contacto[i].numero)
                }
                if(seleccionarDatos.value === 'gustos'){
                    display.innerHTML = ('Gustos:' +' '+  contacto[i].gustos)
                }
            }
        }
    }
})


