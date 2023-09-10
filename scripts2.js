const search = document.getElementById("search");
const button = document.getElementById("button");
const show = document.getElementById("show");

//Esto sirve para obtener un número aleatorio, 
//la cantidad de pokemons que tengo en la API son 500
//por lo tanto quiero que aparezcan pokemon de manera
//aleatoria dentro de ese rango

const getPokeRandom = (min, max) =>{

    return Math.floor(Math.random() * (max - min )) + min;
}

async function Poke_Fetch(id){

try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await response.json();
   // all_pokemons = data.results;

   function showPokemon(){

    const images = data.sprites.other.dream_world.front_default;
    const tipos = data.types;
    show.innerHTML = "";
    
    show.innerHTML = 
    `<div class ="sub-container">
        <img src="${images}" alt="pokemón">
        <h2><span>Id: ${data.id}</span> ${data.name}</h2>
    </div>`;

    const subContainer = document.querySelector(".sub-container");
    // Aquí recorro los tipos y creo una etiqueta correspondiente para cada tipo
    //luego a esa etiqueta le agrego el texto correspondiente utilizando textContent,
    //en este caso quiero agregar el nombre del tipo dentro de la etiqueta generada
    tipos.forEach((tipo) => {
        const pokeTipo = document.createElement('a');
        pokeTipo.textContent = tipo.type.name;
        subContainer.appendChild(pokeTipo);
    
    //Aquí agrego los colores correspondientes para cada tipo
    //Primero utilizo condiciones para preguntar si el string generado
    //coincide con el tipo, si coincide le agrego un color correspondiente al 
    //tipo
    if (tipo.type.name === "water") {

        pokeTipo.style.backgroundColor = "rgb(0, 191, 255)";
    } else if (tipo.type.name === "fire") {

        pokeTipo.style.backgroundColor = "rgb(230, 46, 0)";
    } else if(tipo.type.name === "ground"){

        pokeTipo.style.backgroundColor = "rgb(150, 75, 0)";

    }else if(tipo.type.name === "psychic"){

        pokeTipo.style.backgroundColor = "rgb(255, 105, 180)";
    }else if(tipo.type.name === "sinister"){

        pokeTipo.style.backgroundColor = "rgb(25, 25, 112)";
    }else if (tipo.type.name === "normal"){

        pokeTipo.style.backgroundColor = "rgb(169, 169, 169)";
    }else if (tipo.type.name === "dark"){

        pokeTipo.style.backgroundColor = "rgb(76, 40, 130)";
    }else if(tipo.type.name === "rock"){

        pokeTipo.style.backgroundColor = "rgb(184, 134, 11)";
    }else if (tipo.type.name === "grass"){

        pokeTipo.style.backgroundColor = "rgb(50, 205, 50)";
    }else if(tipo.type.name === "steel"){

        pokeTipo.style.backgroundColor = "rgb(83, 104, 120)";
    }else if(tipo.type.name === "bug"){
        pokeTipo.style.backgroundColor = "rgb(128, 128, 0)";
    }else if (tipo.type.name === "dragon"){

        pokeTipo.style.backgroundColor =  "rgb(0, 0, 205)";
    }else if(tipo.type.name === "fighting"){

        pokeTipo.style.backgroundColor = "rgb(128, 0, 0)";
    }else if(tipo.type.name === "ice"){

        pokeTipo.style.backgroundColor = "rgb(64, 224, 208)";
    }else if(tipo.type.name === "flying"){

        pokeTipo.style.backgroundColor = "rgb(135, 206, 235)";
    }else if(tipo.type.name === "poison"){

        pokeTipo.style.backgroundColor = "rgb(148, 0, 211)";
    }else if (tipo.type.name === "ghost"){

        pokeTipo.style.backgroundColor =  "rgb(72, 61, 139)";
    }else if(tipo.type.name === "electric"){

        pokeTipo.style.backgroundColor = "rgb(255, 215, 0)";
    }else if(tipo.type.name === "fairy"){

        pokeTipo.style.backgroundColor = "rgb(238, 130, 238)";
    }  });
    
}
console.log(data);
  showPokemon();
}
catch(error){

    console.log(error);
}

}

button.addEventListener("click", ()=>{
    let poke_random = getPokeRandom(1, 500);
    Poke_Fetch(poke_random);
})