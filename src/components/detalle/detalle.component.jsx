import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import NoResults from './../no-result/no-result.component';
import './detalle.styles.scss';

const Detalle = ({ personajes = [], selected}) => (
    <Fragment>
        {
            personajes.length ? (
                <div className='root'>
                    <Paper className='paper'>
                    {
                        personajes && personajes.filter(personaje => personaje.name == selected)
                        .map(pjSeleccionado => {
                            const {amiiboSeries, character, gameSeries, head, name, tail, type, image } = pjSeleccionado;
                            return(
                                <>  <div className='info'>
                                        <h2 className='titulo'>{name}</h2>
                                        <img src={image} alt={tail} className='image'/>
                                        <span><span className='negrita'>Amiibo Series: </span>{amiiboSeries}</span><br/>
                                        <span><span className='negrita'>Character: </span>{character}</span><br/>
                                        <span><span className='negrita'>Game Series: </span>{gameSeries}</span><br/>
                                        <span><span className='negrita'>Head: </span>{head}</span><br/>
                                        <span><span className='negrita'>Tail: </span>{tail}</span><br/>
                                        <span><span className='negrita'>Type: </span>{type}</span>
                                    </div>
                                </>
                            )
                        })
                    }
                    </Paper>
                </div>
            ):
                <NoResults />
        }
    </Fragment>
);

export default Detalle;
