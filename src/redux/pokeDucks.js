import axios from "axios";

//CONSTANTES
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTES_POKEMONES_EXITO'
const POKE_INFO_EXITO = 'POKE_INFO_EXITO'

//REDUCER
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case POKE_INFO_EXITO:
            return {...state, unPokemon: action.payload}
        default:
            return state
    }
}

// ACCIONES
export const pokeDetalleAccion = (url = 'https://pokeapi.co/api/v2/pokemon/1/') => async (dispatch) => {

    try {
        const res = await axios.get(url)
        console.log(res.data);
        dispatch({
            type: POKE_INFO_EXITO,
            payload: {
                nombre: res.data.name,
                ancho: res.data.weight,
                alto: res.data.height,
                foto: res.data.sprites.front_default
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const obtenerPokemonesAccion = () => async (dispatch) => {

    if(localStorage.getItem('offset=0')){
        console.log('Usando datos Guardados');
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0}&limit=20`)
        console.log(res.data);
        console.log('Usando datos desde API');
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonAccion = () => async (dispatch, getState) => {

    const {next} = getState().pokemones

    if(localStorage.getItem(next)){
        console.log('Usando datos Guardados');
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }

    try {
        const res = await axios.get(next)
        console.log('Usando datos desde API');
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        console.log(error);
    }

}

export const anteriorPokemonAccion = () => async(dispatch, getState) => {

    const {previous} = getState().pokemones

    if(localStorage.getItem(previous)){
        console.log('Usando datos Guardados');
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }

    try {
        const res = await axios.get(previous)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error);
    }
}