import React, { Fragment, useState } from "react";

const SearchBar = (props) => {
    const [term,setTerm] = useState('')
    const onInputChange = (e) => {
        setTerm(e.target.value)
    };
    const onSubmitChange = (e) => {
        e.preventDefault();
        props.onSearch(term);
    } 
    return(
        <Fragment>
            <div className="ui segment">
                <form onSubmit={onSubmitChange} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={term} onChange={onInputChange}/>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default SearchBar;