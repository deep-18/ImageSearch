import React, { createRef, useLayoutEffect, useRef, useState }  from "react";

const ImageTag = (props) => {
    const imgRef = createRef();
    var [span,setSpan] = useState(0)
    const imgUpper = document.querySelector('.img-upper')
    const setSpans = () => {
        setSpan(Math.ceil(imgRef.current.clientHeight / 10));
        console.log(span);
    }
    useLayoutEffect(() => {
        imgRef.current.addEventListener('load', setSpans())
        // imgUpper.style.gridRowEnd = `span ${span}`;
    })
    return(
        <div className="img-upper" >
            <img  ref={imgRef} alt={props.description} src={props.src} />
        </div>
    )
}

export default ImageTag