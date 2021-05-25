import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import WebFont from 'webfontloader'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { GlobalStyles } from './theme/GlobalStyles'
import { useTheme } from './theme/useTheme'
import Header from './components/Header'
import Home from './components/Home'
import ItemPage from './components/ItemPage'

const Container = styled.div`
  width: 80%;
  margin: auto;
`;


  const pathname = window.location.pathname

  console.log('teeest :', window.location.href);
  console.log('pathname :', pathname);

  // const conditionDisplay = (pathname === '/') !== displayBackButton
  // console.log('conditionDisplay :', conditionDisplay);


function App() {
   const {theme, themeLoaded, getFonts} = useTheme();
   const [selectedTheme, setSelectedTheme] = useState(theme);
   
   useEffect(() => {
     setSelectedTheme(theme);
    }, [themeLoaded]);
 
   useEffect(() => {
     WebFont.load({
       google: {
         families: getFonts()
       }
     });
   });
  
  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>
          <Router>
            <Header setter={ setSelectedTheme }/>
            <Route path="/" exact component={Home} />
            <Route path="/item-page/:id" component={ItemPage} />
          </Router>
        </Container>
      </ThemeProvider>
    }
    </>
  );
}

export default App;
