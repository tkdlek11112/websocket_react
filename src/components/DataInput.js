import React from 'react';
import './CommonHeader.css';

function DataInput({item, state, onChange}) {
    return (
        <div className="header">
            <p className="name_of_header">{item}</p>
            <input className="header" type='text' id={item}
                   value={state[`${item}`]}
                   onChange={onChange}/>
        </div>
    );
}

export default DataInput;