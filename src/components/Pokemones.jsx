import React from 'react'
import { useDispatch,  useSelector} from "react-redux";
import { obtenerPokemonesAccion, siguientePokemonAccion } from "../redux/pokeDucks";

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)

    return (
        <div>
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>Obtener Pokemons</button>
            <button onClick={() => dispatch(siguientePokemonAccion(20))}>Siguientes...</button>
            <ul>
                {
                    pokemones.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
