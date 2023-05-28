import React from 'react';
import './app.css'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Insight from './pages/Insights';
import  Payment  from './pages/Payment';
import Settings  from './pages/Settings';
import IconLabelTabs from './Components/IconLabelTabs';
import Bookings from './pages/Bookings';

const App = () => {
  return (
    <Router>
      
      <IconLabelTabs/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route path="/Insights" element={<Insight/>} />
        <Route path='/Payment' element={<Payment/>} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/Bookings" element={<Bookings/>} /> */}
       
      </Routes>
    </Router>
  );
};

export default App;
