
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const {images, isLoading } = useFetchGifs(category);
    return ( 
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<p>Cargando...</p>)
            }
            <div className="card-grid">
               { images.map( ({ id, ...image })  => (
                <GifGridItem { ...image } key={ id } />
               ))}
            </div>
        </>
     );
}
