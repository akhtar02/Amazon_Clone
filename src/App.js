import React from 'react'
import Header from './Header'
import Home from './Home'
import Checkout from "./Checkout";
import Login from './Login'
import { useStateValue } from "./StateProvider";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
    <Switch>
      <Route path = "/Checkout">
      <Header />
        <Checkout />
      </Route>
      <Route path = "/Login">
      <Header />
        <Login />
      </Route>

      <Route path="/">
      <Header />
      <Home />
      
      
      </Route>
     
    </Switch>
      </div>
    </Router>
    
  


    //  <h1>Let's build an Amazon Clone with React Js</h1>
      // {/* We Need REact-Router */}

      // {/* localhost.com */}
      // {/* localhost.com/checkout */}
      // {/* localhost.com/login */}

   
  );
}

export default App;
