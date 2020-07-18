import React from 'react';
import Container from './components/Container';
import GalleryPage from './components/galleryPage/GalleryPage';

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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Container}></Route>
        <Route path='/gallery' component={GalleryPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
