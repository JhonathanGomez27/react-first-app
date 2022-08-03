import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setimages] = useState([]);

    const [isLoading, setIsloading] = useState(true);

    const getImages = async () => {
        const images = await getGifs(category);
        setimages(images);
        setIsloading(false);
    }

    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
