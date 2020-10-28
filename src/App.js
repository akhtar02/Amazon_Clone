import React from 'react'
import Header from './Header'
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
        <h1>CheckOut</h1>
      </Route>
      <Route path = "/Login">
      <Header />
        <h1>Login</h1>
      </Route>
      <Route path="/">
      <Header />
        <h1>Home Page !!</h1>
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
