import React from 'react';
import styled from 'styled-components';
import SliderMovies from './SliderMovies';

function Home() {
    return (
        <Container>
            <Nav>
                <a href="" className="active">Latest</a>
                <a href="">Upcoming</a>
                <a href="">Action</a>
                <a href="">Family</a>
                <a href="">Sci-Fi</a>
                <a href="">Comedies</a>
                <a href="">Crime</a>
            </Nav>
            <SliderMovies />
        </Container>
    )
}

export default Home



const Container = styled.main`
    min-height: calc(100vh - 140px);
`

const Nav = styled.div`
    display:flex;
    gap:70px;
    align-items:center;
    padding: 0px 60px;
    

    .active {
        color:white;
        font-size:60px; !important
    }

    a {
        font-size:32px;
        font-weight:700;
        color: rgba(255, 255, 255, 0.5);
        text-decoration:none;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            color:white;
            font-size:36px;
        }
    }

`