import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Contact from '../src/components/Contact';
import About from './components/About.js';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from "./components/Navbar";
import ZabeerHome from './pages/ZabeerHome';
import Login from './Login';
import Dashboard from '../src/components/Dashboard';
import { Switch, Route, Redirect } from "react-router-dom";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

function App() {
  return (
    <>

      <div>
      <AmplifySignOut/>
        <Navbar />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
            <Route exact path="/accomodation/" component={ZabeerHome} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/login" component={Login} />
            <Redirect from="/" to="/dashboard" />
            <Route component={Error} />
          </Switch>
       

      </div>


    </>
  );
}

export default withAuthenticator(App);
