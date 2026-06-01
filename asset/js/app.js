const personajes = [
    {   
        id: 1, 
        nombre: "A-Bomb", 
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" 
    },
    { 
        id: 2, 
        nombre: "Abe Sapien", 
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" 
    },
    { 
        id: 3, 
        nombre: "Abin Sur", 
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" 
    },
    { 
        id: 4, 
        nombre: "Abomination", 
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" 
    },
    { 
        id: 5, 
        nombre: "Abraxas", 
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" 
    },
];


//objetos del DOOM
const contenedor_heroe  = document.querySelector('#contenedorHeroe');
const heroe_buscar = document.querySelector('#buscar');

const btn_modal = document.getElementById('btn-Modal');
const Modal = document.getElementById('Modal');
const btnAdd = document.querySelector('#buttom-add')

const formAdd = document.querySelector('#agregar');


//funcion para recorrer y mostrar los personajes
const listar_heroes = (listaHeroes) =>{

    contenedor_heroe.innerHTML = ``;

    listaHeroes.forEach((heroe)=>{

        const {id , nombre , imagen} = heroe;

        contenedor_heroe.innerHTML += `
            <div class="col d-flex align-items-center justify-content-center" data-id=${id}>
                <div class="card my-2" style="width: 10rem;">
                    <img src=${imagen}
                        class="card-img-top" alt=${nombre}>
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <a href="#" class="btn btn-danger btn-eliminar" id="eliminar"><i class="bi bi-trash"></i> Eliminar</a>
                    </div>
                </div>
            </div>
        
        `;
    });
};

//se ejecuta al cargar la pagina
listar_heroes(personajes);

const btnEliminar = document.querySelector('#eliminar');


//funciones
const buscar_heroe = () =>{

    const heroe_econtrado = personajes.filter(heroe => heroe.nombre === heroe_buscar.value);

    listar_heroes(heroe_econtrado);

}

const agregar_heroe = () => {

    let nueva_id = personajes.length+1;
    let nombre_heroe = document.querySelector('#name-heroe');
    let image_heroe = document.querySelector('#image-heroe');

    const nuevo_heroe = {
        id : nueva_id,
        nombre : nombre_heroe.value,
        imagen : image_heroe.value,
    }

    personajes.push(nuevo_heroe)


    listar_heroes(personajes);
    nombre_heroe.value = "";
    image_heroe.value = "";
    
};

const eliminar_heroe = (id) =>{

    personajes.splice(id,1)

    listar_heroes(personajes)
}


//Escuchar Eventos
heroe_buscar.addEventListener('input',() => {

    if(heroe_buscar.value == ""){

        listar_heroes(personajes);

    }else{

        const heroe_econtrado = personajes.filter(heroe => heroe.nombre === heroe_buscar.value);

        listar_heroes(heroe_econtrado);

    }
});

btn_modal.addEventListener('shown.bs.modal', () => {
  Modal.focus();
});

btnAdd.addEventListener('click', () => {
  Modal.focus();
});

formAdd.addEventListener('click',() =>{
    agregar_heroe();
});

contenedor_heroe.addEventListener('click', (event) => {

    if(event.target.classList.contains('btn-eliminar')){
        event.preventDefault();

        const eliminar = event.target.closest('.col')

        let idHeroe = personajes.findIndex(heroe => heroe.id == eliminar.dataset.id)

        eliminar_heroe(idHeroe)
    }

});