import React, { Fragment, useState } from 'react'

const NuevoProyecto = () => {

    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    // Lee los inputs del form
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    }

    // cuando el usuario envia el proyecto
    const onSubmitProyecto = (e) => {
        e.preventDefault();

        // Validar el proyecto

        //add state

        //reset form
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={ onSubmitProyecto }
            >

                <input 
                    type="text" 
                    name="nombre"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    autoComplete="off"
                    value = { nombre }
                    onChange={ onChangeProyecto }
                />

                <input 
                    type="submit" 
                    value="Agregar Proyecto" 
                    className="btn btn-primario btn-block"
                />
            </form>
        </Fragment>
    )
}

export default NuevoProyecto
