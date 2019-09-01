import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Fixture from "./components/Fixture/Fixture";
import Football from "./components/Football/Football";
import Login from "./components/Login/Login";
import LeagueForm from "./components/LeagueForm/LeagueForm";
import LeagueFormJoin from "./components/LeagueFormJoin/LeagueFormJoin";

import './App.css';
import Registration from "./components/Registration/Registration";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation/>

                <Route exact path="/" component={Fixture} />
                <Route exact path="/premier" component={Fixture} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Route path="/create-league" component={LeagueForm} />
                <Route path="/join-league" component={LeagueFormJoin} />
            </Router>
        </div>
    );
}

export default App;
