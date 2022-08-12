import React from 'react';
import Login from './auth/Login';
import Home from './components/Home';
import Register from './auth/Register';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    // const adminUser = {
    //     email: 'admin@admin.com',
    //     password: 'admin123'
    //   }
      
    //   const [user, setUser] = useState({name:'', email:''})
    //   const [error, setError] = useState('')
      
    //   const Login = details => {
    //     console.log(details)
      
    //     if(details.email == adminUser.email && details.password == adminUser.password){
    //         console.log('Login Succesfully')
    //         setUser({
    //           name: details.name,
    //           email: details.email
    //         })
    //     }else{
    //       console.log('Details not match')
    //       setError('Details not match')
    //     }
    //   }
      
    //   const Logout = () => {
    //     setUser({name:'', email:''})
    //   }
      
    // return (
        // <div className="App">
        //     {(user.email !== '')?(
        //       <div className = 'welcome'>
        //         <h2>Welcome, <span>{user.name}</span></h2>
        //         <button onClick={Logout}>Logout</button>
        //       </div>
        //     ):(<LoginForm Login={Login} error={error}/>)}
        //   </div>
        
    return(
        <BrowserRouter>
            <Navbar />
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
