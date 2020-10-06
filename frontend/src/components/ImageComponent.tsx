import React from 'react';

interface ImageProps{
  image_urls: string[]
}

const ImageComponent: React.FunctionComponent<ImageProps> = ({image_urls}) => {

  const img = `${image_urls.values().next().value}.jpg`

  return (
    <img src={img} alt="Image"/>
  );
}

export default ImageComponent;