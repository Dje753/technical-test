import styled from 'styled-components';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
  return (
    <Container>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/item-page/:id" component={ItemPage} />
      </Router>
    </Container>
  );
}

export default App;
