import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { cerrarSesionAccion } from '../redux/usuarioDucks'

const Navbar = (props) => {
    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch(cerrarSesionAccion())
        props.history.push('/login')
    }

    return (
        <div>
            <div className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">APP POKE</Link>
                <div className="d-flex">
                    <NavLink className="btn btn-dark mr-2" to="/" exact>Inicio</NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/login" exact>Login</NavLink>
                    <button
                        className="btn btn-dark mr-2"
                        onClick={() => cerrarSesion()}
                    >
                        Cerrar Sesion
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
