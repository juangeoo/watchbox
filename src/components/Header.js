import React from 'react'
import styled from 'styled-components'
import SliderMovies  from './SliderMovies'



function Header() {

    return (
        <Nav>
            <Logo src="logo.svg" />
            <NavMenu>
                <a href="/" className="active">Movies</a>
                <a href="">TV Shows</a>
                <a href="">Sports</a>
                <a href="">Gaming</a>
            </NavMenu>
            <NavButtons>
                 <a className="botonsearch"><img src="search.svg"></img></a>
                 {/* <input className="inputsearch" type="text" placeholder="Search..."></input> */}
                 <a><img src="menu.svg"></img></a>
                 <a className="profile"></a>
            </NavButtons>
        </Nav>

        
    )

    
}

export default Header

const Nav = styled.nav`
    height:140px;
    background-color:#0A0A0A;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0px 60px;
`

const Logo = styled.img`
    width:184px;
`

const NavMenu = styled.div`
    display:flex;
    gap:50px;
    align-items:center;
    font-weight: 500;
    font-size: 16px;

    .active {
        background: linear-gradient(180deg, #8C2C9A 0%, #E22F6B 91.67%);
        border-radius:10px;
    }

    a {
        padding: 15px 42px;
        text-decoration:none;
        color:white;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            background-color:#414141;
            border-radius:10px;
        }
    }

`

const NavButtons = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    align-content:center;
    gap:14px;

    a {
        background-color: #414141;
        width:22px;
        height:22px;
        align-self:center;
        padding:10px;
        border-radius:50%;
        cursor:pointer;
        

        img {
            width:22px;
            height:22px;
        }
    
    }

    .profile{
        border: 3px solid #902C97;
        background-image:url("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
        background-size:cover;
        background-position:center;
    }


    .botonsearch{
        z-index:2;
        transition: all 250ms linear;
    }

    .botonsearch:hover{
        transform:scale(1.2);
    }

    .inputsearch{
      width:1px;
      position:absolute;
      display:block;
      right:200px;
      height:40px;
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
        width:200px;
        z-index:0;
    }

    .inputsearch:focus{
        outline: none;

    }


`