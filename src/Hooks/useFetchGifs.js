import { useEffect,useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true) 

    const getImages = async ()=>{
      
       const newIamages =  await getGifts(category);
       setImages(newIamages);
        setIsLoading(false);
    }

 useEffect(()=>{
  getImages();
 },[]);



  return {
    images:images,
    isLoading:isLoading
  }
}
