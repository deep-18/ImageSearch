import React, { Fragment, useState } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './image.css'

const SearchMain = () => {
    const [image,setImage] = useState([])
    const onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query: term
            },
            headers: {
                Authorization: 'Client-ID V7G469j74bFIi8f6eNC5jPhd9hNRjoc4ew2M_k4BJOE'
            }
        })
        setImage(response.data.results)
    }
    return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSearch={onSearchSubmit}/>
            <ImageList images={image}/>
        </div>
    )
}

export default SearchMain;