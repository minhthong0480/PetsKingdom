import React from 'react';
import Login from './auth/Login';
import Home from './components/Home';
import Register from './auth/Register';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
     
    return(
        <BrowserRouter>
            <Navbar />
            <ToastContainer position="top-center"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="*" element={<NoPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
       

    // )
}

export default App;
