import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import HomeView from '../Components/HomeView/HomeView';
import PageNotFound from '../Components/PageNotFound/PageNotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route component={PageNotFound} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
