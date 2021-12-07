import React from 'react';
import { Header } from './components/Header';
import { 
    Route, BrowserRouter as Router, Switch
} from 'react-router-dom';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import { Home } from './components/Home';
import './App.scss';


function App() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact-us">
                <ContactUs />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
