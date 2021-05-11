import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #60A5FA;
    height: 60px;
    align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  cursor: pointer;
  text-decoration: none;
`;

const Header = () => {
    // useEffect(() => {
    //     weAreOnItemPage();
    // }, []); 

    // const [ displayBackButton, setDisplayBackButton ] = useState(Boolean);

    // const weAreOnItemPage = async () => {
    //     const pathname = window.location.pathname

    //     console.log('teeest :', window.location.href);
    //     console.log('pathname :', pathname);
    
    //     const conditionDisplay = (pathname === '/') !== displayBackButton
    //     console.log('conditionDisplay :', conditionDisplay);

    //     setDisplayBackButton(conditionDisplay)
    // }

    return (
        <HeaderContainer>
            {/* {displayBackButton ? (<Link to="/">Back button</Link>) : ''} */}
            <Link to="/">Back button</Link>
            <Link to="/">
                <Title>Le 7éme art</Title>
            </Link>
            <div>toggle theme</div>
        </HeaderContainer>
    )
}

export default Header