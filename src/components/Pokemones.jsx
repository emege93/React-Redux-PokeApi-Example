import React, { useEffect } from 'react'
import { useDispatch,  useSelector} from "react-redux";
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, pokeDetalleAccion } from "../redux/pokeDucks";
import PokeDetalle from './PokeDetalle';

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerPokemonesAccion())
        }
        fetchData()
    }, [dispatch])

    return (
        <div className="row mt-4">
            <div className="col-md-6">
                <h3>Lista de pokemones</h3>

                <ul className="list-group mt-4">
                    {
                        pokemones.map((item, index) => (
                            <li className="list-group-item text-uppercase" key={index}>
                                {item.name}
                                <button
                                className="btn btn-dark btn-sm float-right"
                                onClick={() => dispatch(pokeDetalleAccion(item.url))}
                                >Info
                                </button>
                            </li>
                        ))
                    }
                </ul>

                <div className="d-flex justify-content-between mt-4">
                    {
                        pokemones.length === 0 &&
                        <button onClick={() => dispatch(obtenerPokemonesAccion())} className="btn btn-dark">Obtener Pokemons</button>

                    }

                    {
                        next &&
                        <button onClick={() => dispatch(siguientePokemonAccion())} className="btn btn-dark">Siguientes...</button>

                    }

                    {
                        previous &&
                        <button onClick={() => dispatch(anteriorPokemonAccion())} className="btn btn-dark">Anteriores...</button>

                    }
                </div>
            </div>
            <div className="col-md-6">
                <h3>Detalle Pokemon</h3>
                <PokeDetalle/>
            </div>
        </div>
    )
}

export default Pokemones
