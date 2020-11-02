import axios from "axios";

//CONSTANTES
const dataInicial = {
    array : []
}

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'

//REDUCER
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// ACCIONES
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.result
        })
    } catch (error) {
        console.log(error);
    }
}