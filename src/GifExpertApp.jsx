import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);
    }


    return (
        <>
            {/* tittle */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories={ setCategories } />

            {/* List of Gif */}
            <ol>
                { 
                    categories.map( category => {
                        return <li key= { category }>{ category }</li>
                    }) 
                }
            </ol>
                {/* Gif item */}
        </>
    )
}