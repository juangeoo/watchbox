import React from 'react'
import styled from 'styled-components';
import SliderMovies from './SliderMovies';



function MovieInfo() {

    return (
        <InfoContainer>
            <h1 id="movietitle">Spider-Man: No Way Home</h1>
            <p>2021 • Fantasy/Science Fiction • Jon Watts</p>
            <ButtonGroup>
                <button>Trailer</button>
                <button>  </button>
                <button>  </button>
                <button>Details</button>
            </ButtonGroup>
        </InfoContainer>
        
    )
}

export default MovieInfo


const InfoContainer = styled.div`
margin-top:50px;
margin-bottom:50px;
text-align:center;

h1 {
    font-weight:600;
    z-index:10;
    position:relative;
}

p{
    letter-spacing: 2.5px;
    color:rgb(255,255,255,0.5);
    font-size:20px;
}
`

const ButtonGroup = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:30px;

button{
    padding:10px 40px;
    background-color:#414141;
    color:white;
    font-family:"Poppins",sans-serif;
    font-size:22px;
    letter-spacing: 1.5px;
    border-radius:10px;
    border: none;
    font-weight:600;
    cursor:pointer;
   
}

`