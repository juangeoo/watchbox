import React from 'react'
import styled from 'styled-components';

const SearchBox = (props) => {
    return (
        <Search>
            <input className="inputsearch" value={props.value} onChange={(event)=> props.setSearchValue(event.target.value)} type="text" placeholder="Search..."></input>
        </Search>
    )
}

export default SearchBox



const Search = styled.div`

.botonsearch{
    z-index:2;
    transition: all 250ms linear;
}

.botonsearch:hover{
    transform:scale(1.2);
}

.inputsearch{
  width:200px;
  position:absolute;
  display:block;
  right:200px;
  top:-250px;
  height:30px;
  background-color:black;
  border-radius:10px;
  border:none;
  transition: all 250ms linear;
  z-index:-1;
  padding:8px;
  font-family:"Poppins";
  color:white;

}

.botonsearch:hover ~ .inputsearch{
    width:200px;
    z-index:0;
}

.inputsearch:hover{
    z-index:0;
}

.inputsearch:focus{
    outline: none;

}


`