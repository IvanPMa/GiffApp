import { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);
    }

    console.log(categories  )

    return (
        <>
            {/* tittle */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            {/* List of Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { 
                    categories.map( category => {
                        return <li key= { category }>Hola</li>
                    }) 
                }
            </ol>
                {/* Gif item */}
        </>
    )
}