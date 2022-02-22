import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SearchBox from './SearchBox';


function SliderMovies() {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("spider-man");

    

    const getMovieRequest = async (searchValue) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=3256c90e`
        
        const response = await fetch(url);
        const responseJson = await response.json();
    
        if(responseJson.Search){
            setMovies(responseJson.Search);
        }

    }
    
    useEffect(()=>{
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
    
        <SwiperST
      
      slidesPerView={5}
      centeredSlides={true}
      slideToClickedSlide={true}
      rewind={true}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} >

<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

    <MovieLists>

      {movies &&
      movies.map((movie)=>(
        <SwiperSlide key={movie.imdbID}> 

            <img src={movie.Poster} alt="movie"></img>
            <button className="botonplay"><img src="play.png"></img></button>

            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>


            <div>
                <button>Trailer</button>
                <button>  </button>
                <button>  </button>
                <button>Details</button>
            </div>

        </SwiperSlide>

      ))}
     
     
     </MovieLists>

    </SwiperST>
    )
}


export default SliderMovies

const SwiperST = styled(Swiper)`
overflow:visible;


.swiper-wrapper{
    margin:70px 0px;
    
}

.swiper-slide{
    display:flex;
    align-items:center;
    flex-direction:column;
  
    img{
        transition: all 250ms linear;
        border-radius:10px;
        transform:scale(1.1);
        opacity:.4;
        text-align:center;
        cursor:pointer;

        &:hover{
            transform:scale(1.2);
        }
    }

    h1{
        opacity:0;
        transition: all 250ms linear;
        transform:scale(0);
    }

    p{
        opacity:0;
        transform:scale(0);
        transition: all 250ms linear;
    }

    div{
        opacity:0;
        transform:scale(0);
        transition: all 250ms linear;
    }

        .botonplay{
            opacity:0;
            background: linear-gradient(180deg, #8C2C9A 0%, #E22F6B 100%);
            width:100px;
            height:100px;
            z-index:99;
            border-radius:50%;
            border: 10px solid #0A0A0A;
            align-self:center;
            transition: all 250ms linear;
            cursor:pointer;
            margin-top:-40px;
        }

}

.swiper-slide-next{

    img{
        opacity:.9;
    }
}


.swiper-slide-prev{

    img{
        opacity:.9;
    }
}


.swiper-slide-active{
    z-index:15;

    img{
        transform:scale(1.2);
        transition: all 250ms linear;
        box-shadow: 1px -18px 119px 1px #E22F6B, 
                    -2px 47px 104px 8px rgba(140, 44, 154, 0.60);
                    position:relative;
                    border-radius:10px;
        opacity:1;
        text-align:center;   
        cursor:pointer;
     }

    h1{
        opacity:1;
        margin-top:25px;
        text-align:center;
        font-weight:600;
        z-index:10;
        position:relative;
        font-size:32px;
        width:500px;
        transition: all 250ms linear;
        transform:scale(1);
        overflow:visible;
    }

    p{
        letter-spacing: 2.5px;
        color:rgb(255,255,255,0.5);
        font-size:22px;
        opacity:1;
        text-align:center;
        margin-top:-20px;
        transform:scale(1);
    }

    div{
        transform:scale(1);
        display:flex;
        align-items:center;
        justify-content:center;
        gap:30px;
        opacity:1;
        

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
    }

    .botonplay{
        opacity:1;

        &:hover{
            transform:scale(1.05);
            

        }
        
    }


}

`

const MovieLists = styled.div`

`
