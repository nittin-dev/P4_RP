import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Insight from './pages/Insights';

const App = () => {
  return (
    <Router>
      <Navbar />
      <IconLabelTabs/>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/Insights" component={Insight} />
      </Routes>
    </Router>
  );
};

export default App;
