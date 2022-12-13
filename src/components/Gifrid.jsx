
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const  Gifrid  = ({category}) => {

  const  {images , isLoading} = useFetchGifs(category);

  return (
    <>
       <h3>{category}</h3>
       
       {
        //ESTA SINTAXIS NOS INDICA EL ESTADO DE isLoading
        isLoading && (<h2>Cargando...</h2>) 
       }

       <div className='card-grid'>
        {
          
          images.map(({id, title, url}) =>(
            <GifItem key={id} title={title} url={url}/>
          ))
        }
       </div>
    </>
  )
}
