// console.log("hola mundo  esta es mi primera linea de JS");

const ipad = window.matchMedia('screen and (max-width:767px)'); //función para revisar la resolucióon de la pantalla

const menu = document.querySelector('.menu');
// console.log(menu);
const burgerButton = document.querySelector('#burguer-menu');
// console.log(burgerButton);




ipad.addListener(validation) //se agrega un escuchador con el parametro "validation"

function validation(event){ //funcion validation: para detener o ejecutar la función dependiendo de la resolución

    if (event.matches) {
        burgerButton.addEventListener('click', hideShow);
        console.log('true');
    } else{
        burgerButton.removeEventListener('click', hideShow);
        console.log('false');
    }
}

validation(ipad); //Mandas a llamar la función de validación con el argumento de ipad, esto hace que se ejecute el script para la funcionaldiad del botón movil, mientras cumpla el criterio de 767px

function hideShow() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
    else{
        menu.classList.add('active');
    }

    
}
