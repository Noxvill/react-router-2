import './Pokemones.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Pokemones =()=>{

// estados para utilizar
const [pokemones, setPokemones] = useState([]);
const [pokemonElegido, setPokemonElegido] = useState("");
const navigate = useNavigate();

// fetch para traer los pokemones desde la api

const getPokemones = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const { results } = await res.json();
    console.log(res.body.results)
    setPokemones(results);
  };

// Función para pasarle el pokemon elegido a la vista detalle
  const DetallePokemon = async () => {
    if (pokemonElegido) navigate(`/pokemones/${pokemonElegido}`);
    else alert("Debes seleccionar un pokemón");
  };

// Llamada a la función con el fetch para obtener datos desde la api
  useEffect(() => {
    getPokemones();
  }, []);

    return(


<div className="MyContent">

<h1>Selecciona un pokemón</h1>
<br></br>

{/* Caja de selección de pokemones */}
<select 

value={pokemonElegido}
style={{height:'40px', width:'300px', borderRadius:'5px', borderColor:'gray'}}
onChange={({ target }) => setPokemonElegido(target.value)}
>

{/* Primera opción default */}
<option
value=""
disabled
>Pokemones</option>

{/* recorrido del objeto para rescate de nombre de pokemones */}
{pokemones.map(({ name }, i) => (
<option
key={i}
value={name}
>
{name}
</option>))}
</select> 
<br></br>


<button style={{color:'white', backgroundColor: 'black'}} onClick={DetallePokemon} >Ver Detalle</button>
</div>


    )

} 


export default Pokemones