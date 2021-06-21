import React, { Fragment, useContext, useState } from 'react'
import ProyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(ProyectoContext);
    const { formulario, 
            errorformulario, 
            mostrarFormulario, 
            agregarProyecto, 
            mostrarError } = proyectosContext;

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
        if (nombre === '') {
            mostrarError();
            return;
        }
        //add state
        agregarProyecto(proyecto);
        //reset form
        setProyecto({
            nombre: ''
        });
    }

    // Mostrar el formulario
    const onClic = () => {
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ onClic }
            >Nuevo Proyecto</button>

            { 
                formulario ?
                (
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
                ) : null

            }
            { 
                errorformulario 
                ? <p className="mensaje error">El nombre del proyecto es obligatorio!</p>
                : null
            }
        </Fragment>
    )
}

export default NuevoProyecto
