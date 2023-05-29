import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Insight from './pages/Insights';
import  Payment  from './pages/Payment';
import Settings  from './pages/Settings';
import IconLabelTabs from './Components/IconLabelTabs';
import Bookings from './pages/Bookings';
import Popular from './pages/Popular/Popular';
import SignInSide from './pages/LoginPage';
import FormDialog from './pages/gstmangement';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Bookings' element={<Bookings/>}/>
        <Route path='/login' element={<SignInSide/>}></Route>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Settings' element={<Settings/>}/>
        <Route path='/gstmanagement' element={<FormDialog/>}></Route>

        
      </Routes>
    </Router>
 
   {/* <Home/>
   <Popular/> */}
   </>
  )
}

export default App
