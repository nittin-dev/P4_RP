import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Insight from './pages/Insights';
import IconLabelTabs from './components/IconLabelTabs';
import Payment from './pages/Payment';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <Navbar />
      <IconLabelTabs/>
      <Routes>
      
        <Route exact path="/" element={<Home/>} />
        <Route path="/Insights" element={<Insight/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Settings" element={<Settings/>} />
     
      </Routes>
    </Router>
  );
};

export default App;
