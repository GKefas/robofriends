import React from "react";
import './componentsStyling.css';

const SearchBox = ({searchChange}) =>{
    return (
        <div className="pa2">
        <input className="sb pa3 ba b--green bg-lightest-blue" 
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;