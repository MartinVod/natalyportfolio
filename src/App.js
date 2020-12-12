import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navigation';
import Main from './components/Main';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import OneYear from './components/OneYear';
import Pregnency from './components/Pregnencies';
import NewBorn from './components/Babies';
import Footer from './components/Footer';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/contact' component={()=><Contact />} />
        <Route exact path='/pricing' component={()=><Pricing />} />
        <Route exact path='/oneYear' component={()=><OneYear />}/>
        <Route exact path='/pregnency' component={()=><Pregnency />}/>
        <Route exact path='/newborn' component={()=><NewBorn />}/>
        <Route exact path='/about' component={()=><About />}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
