import { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChanged = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        console.log( event );
        event.preventDefault();
    }
    return (
        <form onSubmit={ event => onSubmit( event ) }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChanged }
            />
        </form>
    )
}