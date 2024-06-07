
import React from 'react';
import  '../Css/Home.css'
import Navbar from '../Component/Header'

const HomePage = () => {
    return (
        
        <div className='homapagemain'>

            <div className="navbar">
                <Navbar/>
            </div>
           <div className="homeinfo">
           <h2>Home Page</h2>
            <p>Welcome to the home page!</p>
           </div>


        </div>
    );
};

export default HomePage;
