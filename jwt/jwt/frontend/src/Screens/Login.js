import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Component/Header';

const Login = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [Button, setButton] = useState(true);
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        setButton(false);
        setShowPopup(true);
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:1000/auth/LogIn", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            
            if (!json.success) {
                alert(`Error: ${json.message}`);
                setShowPopup(false);
                setButton(true);
            } else {
                setShowPopup(false);
                setButton(true);
                localStorage.setItem("JWTuserEmail", credentials.email);
                localStorage.setItem("accessToken", json.accessToken);
                localStorage.setItem("refreshToken", json.refreshToken);
                console.log("accessToken", localStorage.getItem("accessToken"));
                navigate("/");
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("An error occurred during login.");
            setShowPopup(false);
            setButton(true);
        }
    };

    const handleNameChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <div className='loginpagemaincontainer'>
                <div><Navbar /></div>
                <div className="main">
                    <div className="login_form_container">
                        <div className="login_form">
                            <h2 className='animate_animated animate_bounce animate_infineite'>Login</h2>
                            <div className="input_group">
                                <i className="fa-solid fa-square-envelope"></i>
                                <input
                                    type="email"
                                    placeholder="Type Your E-mail Here"
                                    className="input_text"
                                    autoComplete="off"
                                    name="email"
                                    value={credentials.email}
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="input_group">
                                <i className="fa fa-unlock-alt"></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input_text"
                                    autoComplete="off"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleNameChange}
                                />
                            </div>
                            {showPopup && 
                                <div className="SingingUpLoading" style={{ marginTop: "100px" }}>
                                    <h2>Please Wait!</h2>
                                    <div className="SignUpLoader"></div>
                                </div>
                            }
                            {Button &&
                                <div className="button_group" onClick={handleSubmit} id="login_button">
                                    <a>Submit</a>
                                </div>
                            }
                            <div className="fotter">
                                <a><Link className="signuplink" to="/Signup">Signup</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </div>
        </div>
    );
};

export default Login;
