import React from 'react';
import './../App.css';
const CButton = ({ name, onSubmit }) => {

    return(

        <button 
        className="button"
      onClick={onSubmit}>{name}</button>

    )

}

export default CButton;