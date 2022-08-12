import React from "react";
import {userSelector, useSelector, useStore} from 'react-redux'

const Home = () =>{
    const {user} = useSelector((state) => ({...state}))
    return(
        <div className='containter-fluid h1 p-5 text-center'>
            Homepage {JSON.stringify(user)}
        </div>
    )
}

export default Home