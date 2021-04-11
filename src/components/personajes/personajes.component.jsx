import React from 'react';
import './personajes.styles.scss';
import { Api } from '../../lib/Api';
import PropTypes from 'prop-types';

class Personajes extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            personajes: [],
        };
    }

    callback = () => {
        const { onCall } = this.props;
        const { personajes } = this.state;
        
        onCall(personajes);
    }

    fetchPersonajes = async () => {
        const response =  await Api.getPersonajes();
        const { data: personajes } = response;
        this.setState({personajes: personajes.amiibo}, this.callback);
    }

    render() {
        const { personajes } = this.state;
        const found = personajes.length
        ? (  
            <div className='message'>
                Amiibos Encontrados {personajes.length}
            </div>
        ) :   
            <div className='message'>
                Sin personajes con informacion
            </div>;
        return(
            <div className='division'>
                <button variant='contained' 
                        color='primary' 
                        onClick={this.fetchPersonajes}
                        className='button'
                >
                    Buscar Personajes
                </button>
                {found}
            </div>
        )
    }
}

Personajes.propTypes = {
    onCall: PropTypes.func,
}

Personajes.defaultProps = {
    onCall: () => {},
}

export default Personajes;