import React from 'react'
import { useDispatch,  useSelector} from "react-redux";
import { obtenerPokemonesAccion } from "../redux/pokeDucks";

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.array)

    return (
        <div>
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>Obtener Pokemons</button>
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
