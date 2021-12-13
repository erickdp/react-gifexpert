import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Attack on Titan']);
    //     setCategories(catAnterior => [...catAnterior, 'Attack on Titan']);
    //     console.log(categories);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(categoria => ( // solo uso () para definir que retorna algo
                        <GifGrid
                            key={categoria}
                            category={categoria} />
                    ))
                }
            </ol>

        </>
    );

}

// crear componente fast rafcp

export default GifExpertApp;

