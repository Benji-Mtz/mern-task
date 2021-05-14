import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

const Login = () => {

    // State para iniciar sesión
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer usuario
    const { email, password } = usuario;

    const onChange = (e) => {

        setUsuario({

            ...usuario,
            [e.target.name]: e.target.value

        })

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form>
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
                        <input 
                            type="submit" 
                            value="Iniciar Sesión" 
                            className="btn btn-primario btn-block" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
