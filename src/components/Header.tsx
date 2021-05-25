import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash';
import { Link } from 'react-router-dom'
import { WbSunny, Brightness3 } from '@material-ui/icons'
import { ToggleButton } from 'react-bootstrap'

import { useTheme } from '../theme/useTheme'
import { getFromLocalStorage } from '../utils/storage'

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

interface data {
    name: string;
    age: number;
  }

const Header = (props: { setter: (arg0: any) => void; theme: any }) => {
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

    const themesFromStore = getFromLocalStorage('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    // const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = (selectedTheme: any) => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    // useEffect(() => {
    //     setThemes(_.keys(data));
    // }, [data]);



    return (
        <HeaderContainer>
            {/* {displayBackButton ? (<Link to="/">Back button</Link>) : ''} */}
            <Link to="/">Back button</Link>
            <Link to="/">
                <Title>Le 7éme art</Title>
            </Link>
            <div>toggle theme</div>
            <ToggleButton value={"pomme"} onClick={ (theme) => themeSwitcher(props.theme) }></ToggleButton>
        </HeaderContainer>
    )
}

export default Header