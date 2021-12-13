import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {


    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs(category);

    // Permite ejecutar la funcion una sola vez cuando el componente se renderiza la primera vez
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category]) // si esque la categoria cambia en este componente, cosa que no porque cada categoria es un nuevo componente, haria ejecutar este useEffect

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__backInLeft">{category}</h3>
            {loading && <p className="animate__animated animate__backInDown">Loading</p>}
            <div className="card-grid">
                {
                    images.map(image => (
                        <GifGridItem
                            key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </>
    )
}
