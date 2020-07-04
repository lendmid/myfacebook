import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      {/* <header className="header">
        <img src="https://i.pinimg.com/600x315/13/e3/43/13e34340ef2625f926ed799e68b1a7e2.jpg" alt="just" />
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#1">Profile</a></li>
          <li><a href="#1">Messages</a></li>
          <li><a href="#1">News</a></li>
          <li><a href="#1">Music</a></li>
        </ul>
      </nav>
      <div className="content">
        <img src="https://intimacyheals.files.wordpress.com/2017/05/wavequotes.jpg" / >
      </div> */}
    </div>)
}

export default App;