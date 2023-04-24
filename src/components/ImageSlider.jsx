import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
function ImageSlider({media}) {
console.log("🚀 ~ file: ImageSlider.jsx:4 ~ ImageSlider ~ media:", media)


    const [images, setImages] = useState([]);
    console.log("🚀 ~ file: ImageSlider.jsx:8 ~ ImageSlider ~ images:", images)
    useEffect(() => {
      
          const image = media?.map(photo => ({
            original: photo.full_path,
            thumbnail: photo.full_path,
          }));
          setImages(image);

      }, []);



  return (

      <ImageGallery items={images ? images : []} />



    


    
  )
}

export default ImageSlider