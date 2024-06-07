import {React, useState} from 'react'
// import {} from '../Css/Navbar.css'
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { GiCrossFlare } from "react-icons/gi";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../Css/Header.css"
const Navbar=()=>{

    const [IsOpen,setIsOpen]=useState(false);
    const Navigate =useNavigate();
    
    const toggleButton=()=>{
        setIsOpen(!IsOpen);
    }
    const handleLogout=()=>{

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("JWTuserEmail")
        // Navigate("LogIn")
    }


    
    return (<>
    
<div className='Header'>

        <div className="logoSide">
            <div className="companyIcon active zx">
               {/* <GiCrossFlare/> */}
            </div>
            <div className="companyName zx">
               JWT
            </div>
        </div>

       

{(localStorage.getItem("accessToken")) ?
       

        <div className="navbarMid a">
            <ul>
                <li className="navbarNames active"><Link className='LinkTAG LinkTAGHome active' to={"/"}>Home</Link></li> 
                <li className="navbarNames active"><Link className='LinkTAG LinkTAGHome active' to={"/About"}>About</Link></li> 

            </ul>
        </div>

       
        :
        <div>

            <div className="navbarMid a">
            <ul>
                <li className="navbarNames active"><Link className='LinkTAG LinkTAGHome active' to={"/"}>Home</Link></li>
            </ul>
            </div>
        
        </div>
}

{(localStorage.getItem("accessToken")) ?

    <div className="buttonside a">
    
        <div className="loginButton">
            <button onClick={handleLogout}><Link className='LinkTag' to="/LogIn">Log Out</Link></button>
        </div>

    </div>

        :

    <div className="buttonside a">
    
        <div className="loginButton">
            <button><Link className='LinkTag' to="/LogIn">Log In</Link></button>
        </div>

        <div className="logoutButton">
            <button><Link className='LinkTag' to="/SignUp">Sign Up</Link></button>
        </div>

    </div>       
}


</div>
     
   
       
    </>)
}
export default Navbar;