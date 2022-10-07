import React from 'react';

export default ({value, onChange}) => {
    return (
        <input 
            className='SearchBox' 
            value='ISS' 
            onChange={e => onChange && onChange(e.target.value)} 
            placeholder='Search'
        />
    )
}