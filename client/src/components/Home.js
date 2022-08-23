import React from "react";
import {useSelector} from 'react-redux'

const Home = () =>{
    const {auth} = useSelector((state) => ({...state}))

    return (
        <div className='containter-fluid h1 p-5 text-center'>
            Homepage1 {JSON.stringify(auth)}
        </div>
    )
}

export default Home