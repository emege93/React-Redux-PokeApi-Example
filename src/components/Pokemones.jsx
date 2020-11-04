import React from 'react'
import { useDispatch,  useSelector} from "react-redux";
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion } from "../redux/pokeDucks";

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    return (
        <div>
            Lista de pokemones
            <br/>

            {
                pokemones.length === 0 &&
                <button onClick={() => dispatch(obtenerPokemonesAccion())}>Obtener Pokemons</button>

            }

            {
                next &&
                <button onClick={() => dispatch(siguientePokemonAccion())}>Siguientes...</button>

            }

            {
                previous &&
                <button onClick={() => dispatch(anteriorPokemonAccion())}>Anteriores...</button>

            }
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
