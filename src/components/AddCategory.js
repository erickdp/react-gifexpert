import React, { useState } from 'react'
import PropTypes from "prop-types";


const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setinputValue(e.target.value);
    }

    // No usar la recarga de la pagina cuando se hace submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(setCategories);

        if (inputValue.trim().length > 2) {
            // con el callback se puede usar el estado anterior del hook
            setCategories(cata => [inputValue, ...cata]);
            setinputValue('');
        } else {
            console.log('No se agrega');
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}