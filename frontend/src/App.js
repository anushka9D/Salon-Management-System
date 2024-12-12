import './App.css';
import './componenet/css/Main_second_accent.css';
import './componenet/css/Header_Footer.css';
import './componenet/css/signup.css';
import './componenet/css/User_update.css';
import './componenet/css/Login.css';

import React from 'react'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Main_home_page from './componenet/Main_home_page';
import Home from './componenet/Home';
import Signup from './componenet/Signup';
import Login from './componenet/Login';
import User_update from './componenet/User_update';
import Header from './componenet/Header';
import Footer from './componenet/Footer';

function App() {
  return (
    <Router>
    <div>
        <Routes>
        <Route path ="/" element = {<Main_home_page/>}/>
        <Route path ="/home" element = {<Home/>}/>
        <Route path ="/signup" element = {<Signup/>}/>
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/user_update_page" element = {<User_update/>}/>
        <Route path ="/header" element = {<Header/>}/>
        <Route path ="/footer" element = {<Footer/>}/>

        </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
