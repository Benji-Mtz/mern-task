import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';

import ProyectoContext from '../../context/proyectos/proyectoContext'; 

const ListadoProyectos = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext (ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyectos cuando cargue el componente
    useEffect(() => {
        obtenerProyectos();
    }, [])

    // Revisar si proyectos tiene contenido
    if (proyectos.length === 0) { return null; }

    return (
        <ul className="listado-proyectos">
            {
                proyectos.map( proyecto =>(
                    <Proyecto  
                        key={ proyecto.id }
                        proyecto = { proyecto }
                    />
                ))
            }
        </ul>
    )
}

export default ListadoProyectos
