import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import Fixture from "./components/Fixture/Fixture";
import Football from "./components/Football/Football";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation/>

                <Route exact path="/" component={Fixture} />
                <Route exact path="/premier" component={Fixture} />
                <Route path="/login" component={Login} />
                <Route path="/my-league" component={Football} />
            </Router>
        </div>
    );
}

export default App;
