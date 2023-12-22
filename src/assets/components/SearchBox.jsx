import React from 'react'

function SearchBox({handleChange}) {

    const handleOnChange = (e) =>{
        handleChange(e.target.value);
       
    }

  return (
    <input type="text" onChange={(e)=> handleOnChange(e)} />
  )
}

export default SearchBox