import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';


const Picture = ({grid} : any) => {


  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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
      {grid && grid?.map( (o: any,index:any) => (
        <div className='w-1/2'>

        <img className='h-[200px] lg:h-[350px] w-full object-cover bg-white'
          src={ o.url }
          onClick={ () => openImageViewer(index) }
          key={ index }
          alt="img"
          />
          </div>

      ))}
      {isViewerOpen && (
        <div className='z-50'>
        <ImageViewer
          src={ grid }
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