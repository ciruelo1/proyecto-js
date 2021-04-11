import React from 'react';
import './dropdown.styles.scss';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import PropTypes from 'prop-types';

const DropDown = ({ personajes = [], onChange = () => {}, selected }) => (
        <div className='dropdown'>
            <FormControl variant='filled'>
                <InputLabel htmlFor='filled-age-native-simple'>Personajes</InputLabel>
                <Select 
                    className='select'
                    native
                    value={selected}
                    onChange={onChange}
                >
                    <option aria-label="None" value=""/>
                    {
                        personajes && personajes.map(({tail, name}) => (
                            <option key={`personaje-${tail}`} value={name}>{name}</option>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
)
export default DropDown;

DropDown.propTypes = {
    personajes: PropTypes.array,
}

