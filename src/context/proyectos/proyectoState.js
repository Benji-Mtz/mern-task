import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS, 
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL
} from '../../types';

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Sigfox' },
        { id: 2, nombre: 'Tienda virtual' },
        { id: 3, nombre: 'LoraWan' },
        { id: 4, nombre: 'ESP8266' }
    ];

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    /* Dispatch para ejecutar las acciones*/
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregar nuevo proyecto
    const agregarProyecto = (proyecto) => {
        // Se adiciona el campo id a proyecto
        proyecto.id = uuidv4();

        // Insertamos el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })

    }

    // Valida el form por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto que el user dio clic
    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual
             }}
        >
            { props.children }
        </ProyectoContext.Provider>
    )

}

export default ProyectoState;