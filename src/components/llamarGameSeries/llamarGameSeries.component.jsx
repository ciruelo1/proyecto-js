import React, { Fragment, useState, useEffect } from 'react';
import {Api} from './../../lib/Api';
import './llamarGameSeries.styles.scss';


const LlamarGameSeries = () => {

    const [ lastUpdate, setLastUpdate ] = useState(); 
    const [ buscarSerie, setBuscarSerie ] = useState();

    useEffect(() => fetchGameSeries(), []);

    console.log(lastUpdate);
    const fetchGameSeries = async () => {
        const response =  await Api.getGameSeries();
        const { data: gameSeries } = response;
        setLastUpdate( gameSeries.amiibo );
    }

    const searchGameSeries = () => {
        const valor = document.querySelector('#entrada').value;
        setBuscarSerie( valor );
    }

    return(
        <Fragment>
            <span className='estilo'>Ej. 0x374, 0x378, 0x37c </span> <br/>
            <input id='entrada' type='text' placeholder='Nombre'/>
            <button type='button' onClick={searchGameSeries}>buscar</button>
            {
                lastUpdate && lastUpdate.filter(serie => serie.key == buscarSerie)
                .map(serie => {
                    const {key, name} = serie;
                    return(
                        <div className='division'>
                            <span>{key}</span> <br/>
                            <span>{name}</span>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}

export default LlamarGameSeries;
