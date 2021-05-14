import React from 'react'
import Proyecto from './Proyecto'

const ListadoProyectos = () => {

    const proyectos = [
        { nombre: 'tienda virtual' },
        { nombre: 'sigfox' },
        { nombre: 'LoraWan' },
        { nombre: 'ESP8266' }
    ];

    return (
        <ul className="listado-proyectos">
            {
                proyectos.map( proyecto =>(
                    <Proyecto  
                        key={ proyecto.nombre }
                        proyecto = { proyecto }
                    />
                ))
            }
        </ul>
    )
}

export default ListadoProyectos
