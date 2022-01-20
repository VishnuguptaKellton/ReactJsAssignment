import React from 'react';
import './../App.css';
const CInput = ({ placeholder, value, Onevent,className }) => {

    return(

      <input
      className={className}
       placeholder={placeholder}
        type="text"
        value={value}
        onChange={data=>Onevent(data)}
      />
    )

}

export default CInput;