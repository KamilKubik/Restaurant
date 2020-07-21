import React from 'react';
import Container from './components/Container';
import GalleryPage from './components/galleryPage/GalleryPage';
import MenuPage from './components/menuPage/MenuPage';

import MenuData from './components/menuPage/MenuData';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/FirstPage.scss';
import './styles/secondPage.scss';
import './styles/thirdPage.scss';
import './styles/fourthPage.scss';
import './styles/fivePage.scss';
import './styles/sixPage.scss';
import './styles/SixPageTwo.scss';
import './styles/seventhPage.scss';
import './styles/ContactPage.scss';

import './styles/galleryPage.scss';
import './styles/MenuPage.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='' component={Container}></Route>
        <Route path='/gallery' component={GalleryPage}></Route>
        <Route path='/menu' component={MenuData}></Route>
      </Switch>
    </Router>
  );
}

export default App;
