import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // State para iniciar sesión
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {

        setUsuario({

            ...usuario,
            [e.target.name]: e.target.value

        })

    }

    const onSubmit = e => {
        e.preventDefault();
        // Validar que no haya campos vacios
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={ onSubmit }
                > 
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="Tu nombre" 
                            value={ nombre }
                            onChange={ onChange }
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Tu email" 
                            value={ email }
                            onChange={ onChange }
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Tu password" 
                            value = { password }
                            onChange={ onChange }
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password" 
                            name="confirmar" 
                            id="confirmar" 
                            placeholder="Repite tu password" 
                            value = { confirmar }
                            onChange={ onChange }
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit" 
                            value="Registrarme" 
                            className="btn btn-primario btn-block" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
