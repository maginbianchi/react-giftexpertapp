import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {

    //const categorias = ['Samurai X', 'Dragon ball', 'Sakura']
    const [categorias, setCategorias] = useState(['Sakura card captor']);

    // const handleAdd = () => {
    //     setcategorias( [...categorias, 'Space captain']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias= { setCategorias }/>
            <hr />

            <ul>
                {
                    categorias.map( categoria => <GifGrid key={categoria} category= {categoria}/> )
                }
            </ul>
        </>
    )
}

export default GifExpertApp;