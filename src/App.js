import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import './Components/Properties.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Builder from './Components/Builder';
import Myproperties from './Components/Myproperties';
import { Mypropertiesdetail } from './Components/Mypropertiesdetail';
import Otp from './Components/Otp';
import { Mobilenumber } from './Components/Mobilenumber';
import Home from './Components/Home';
import Posting from './Components/Posting';
import Result from './Components/Result';
import Budget from './Components/Budget';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Newotp from './Components/Newotp';
function App() {
  return (
    <div className="App">
    

<Router>
  
  <Routes>
    <Route path="/" element={<Home/>} />
   
    <Route path="/builder" element={<Builder />} />
    <Route path="/myproperties" element={<Myproperties />} />
    <Route path="/detail" element={<Mypropertiesdetail/>} />
  <Route path="/otpverify" element={<Otp />} />
  <Route path="/mobile" element={<Mobilenumber />} />
  <Route path="/post" element={<Posting/>} />
  <Route path="/result" element={<Result/>} />
  <Route path="/budget" element={<Budget/>} />
  <Route path="/new-path" element={<Newotp/>} />
  </Routes>
</Router>
<ToastContainer />
    </div>
  );
}

export default App;





