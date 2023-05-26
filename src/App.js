import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Insight from './pages/Insights';
import SignInSide from './pages/LoginPage';
import { SettingsInputSvideo } from '@mui/icons-material';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='LoginPage' component={SignInSide}/>
        <Route exact path="/" component={App} />
        <Route path="/Insights" component={Insight} />
      </Routes>
    </Router>
  );
};

export default App;
