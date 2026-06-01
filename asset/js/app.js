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


//funcion para recorrer y mostrar los personajes
const listar_heroes = (listaHeroes) =>{

    contenedor_heroe.innerHTML = ``;

    listaHeroes.forEach((heroe)=>{

        const {id , nombre , imagen} = heroe;

        contenedor_heroe.innerHTML += `
            <div class="col" data-id=${id}>
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


//funciones
const buscar_heroe = () =>{

    const heroe_econtrado = personajes.filter(heroe => heroe.nombre === heroe_buscar.value);

    listar_heroes(heroe_econtrado);

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