import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

class Header extends React.Component {
    constructor(){
        super();

        this.state = {

        };
    }

    render(){
        return(
            <div className='header' > 
                <Logo className='logo'/>
            </div>
        )
    }
}

export default Header;