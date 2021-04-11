import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import ContainerAnime from './components/container-anime/container-anime.component';

class App extends React.Component {
  constructor(){
    super();

    this.state = {

    };
  }

  componentDidMount(){

  }
  
  render(){
    return(
      <div>
        <Header />
        <ContainerAnime />
      </div>
    )
  }
}

export default App;
