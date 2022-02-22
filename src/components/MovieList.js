import React from 'react'
import styled from 'styled-components';
import SliderMovies from './SliderMovies';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MovieList = (props) => {
    return (
        <>
               {props.movies.map((movie, index)=>
                  <SwiperSlide> <Wrap> <img key={index} src={movie.Poster} alt="movie"></img></Wrap></SwiperSlide>
                )}
        </>
    )
}


export default MovieList

const Wrap = styled.div`

img{
    
}

`