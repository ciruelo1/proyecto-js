import React from 'react';
import './container-anime.styles.scss';
import Personajes from '../personajes/personajes.component';
import DropDown from '../dropdown/dropdown.component';
import Detalle from '../detalle/detalle.component';
import LlamarGamesSeries from './../llamarGameSeries/llamarGameSeries.component';

class ContainerAnime extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            personajes: [],
            selectPersonaje: '',
        }

        setTimeout(() => {
            alert('Bienvenido')
      
             });
    }

    fetchFromStorage = () => JSON.parse(localStorage.getItem('personajes'));

    sortCharacters = (personajes = []) => {
        const sortedCharacters = personajes.slice().sort((a,b) => a.name.localeCompare(b.name));
        return sortedCharacters;
    }

    onCharacterFetch = (personajes) => {
        if(personajes.length !== 0){
            localStorage.setItem('personajes', JSON.stringify(personajes));
        }
        const savedCharacterFetch = this.sortCharacters(JSON.parse(localStorage.getItem('personajes')));
        this.setState({ personajes: savedCharacterFetch });
    }

    onChangeCharacter = ({ target: { value: selectPersonaje }}) => {
        this.setState({ selectPersonaje });
    }

    render() {
        const { personajes, selectPersonaje } = this.state;
        return(
            <>
                <Personajes onCall={ this.onCharacterFetch }/>
                <DropDown personajes={ personajes } onChange={this.onChangeCharacter} selected={selectPersonaje}/>
                <Detalle personajes={ personajes } selected={selectPersonaje}/>
                <LlamarGamesSeries />
            </>
        )
    }
}

export default ContainerAnime;
