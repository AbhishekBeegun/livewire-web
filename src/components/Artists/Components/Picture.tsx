import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';


const Picture = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/TU5J9KLvSamlIts0SRAP',
    'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/Ij1KM1TRmPav4luO7mgR',
    'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/1zYhBBVQwmFXUVcI9fao',
    'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/1zYhBBVQwmFXUVcI9fao',
  ];

  const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="px-2 py-2 lg:px-96 bg-black">
    {/* photos */}
    <div className="rounded-lg ">
      <div className="px-4 py-2 bg-white rounded-t-lg">
      <p  
      className="font-semibold text-black">Photos</p>   
      </div>

    </div>

    <div className='flex flex-row flex-wrap w-full'>
      {images.map((src, index) => (
        <div className='w-1/2'>

        <img className='h-[200px] lg:h-[350px] object-cover bg-white'
          src={ src }
          onClick={ () => openImageViewer(index) }
          key={ index }
          alt="img"
          />
          </div>
      ))}

      {isViewerOpen && (
        <div className='z-50'>
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
          />
          </div>
      )}
    </div>
    </div>
  )
}

export default Picture