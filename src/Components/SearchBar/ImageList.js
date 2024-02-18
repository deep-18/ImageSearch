import React from 'react';

import ImageTag from './ImageTag';
const ImageList = (props) => {
    
    const images= props.images.map((image) => {
        return <ImageTag description={image.description} key={image.id} src={image.urls.regular} />
    })
    return(
        <div className="image-list">{images}</div>
    )
}

export default ImageList