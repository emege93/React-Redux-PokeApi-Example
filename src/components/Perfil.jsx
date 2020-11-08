import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actualizarUsuarioAccion } from '../redux/usuarioDucks'


const Perfil = () => {

    const usuario = useSelector(store => store.usuario.user)
    const loading = useSelector(store => store.usuario.loading)

    const [nombreUsuario, setNombreUsuario] = useState(usuario.displayName)
    const [activarformulario, setActivarformulario] = useState(false)

    const dispatch = useDispatch()

    const actualizarUsuario = () => {
        if(!nombreUsuario.trim()){
            console.log('Nombre Vacio');
            return
        }
        dispatch(actualizarUsuarioAccion(nombreUsuario))
        setActivarformulario(false)
    }

    return (
        <div className="mt-5 text-center">
            <div className="card">
                <div className="card-body">
                    <img src={usuario.photoURL} alt="" width="100px" className="img-fluid"/>
                    <h5 className="card-title">Nombre: {usuario.displayName}</h5>
                    <p className="card-text">Email: {usuario.email}</p>
                    <button className="btn btn-dark" onClick={() => setActivarformulario(true)}>
                        Editar Nombre
                    </button>
                </div>
                {
                    loading &&
                    <div className="card-body">
                        <div className="d-flex justify-content-center my-3">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                }
                {
                    activarformulario &&
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={nombreUsuario}
                                        onChange={e => setNombreUsuario(e.target.value)}
                                    />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={() => actualizarUsuario()}
                                    >
                                        Actualizar
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Perfil
