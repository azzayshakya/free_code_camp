import React, { useState } from 'react';
import Navbar from '../Component/Header';
import '../Css/About.css';

const About = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAboutInfo = async () => {
    setLoading(true);
    const accessToken = localStorage.getItem("accessToken");

    try {
      let response = await fetch("http://localhost:1000/api/YourDeals", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (response.status === 401 || response.status === 403) {
        throw new Error("Unauthorized or Forbidden");
      }

      const data = await response.json();
      setInfo(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching about info:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="about-container">
      <div className="navabar">
        <Navbar/>
      </div>

      <h1>About Us</h1>
      <p>Welcome to Foodiii, your number one source for all things food. We're dedicated to providing you the best of food delivery, with a focus on dependability, customer service, and uniqueness.</p>
      <p>Founded in 2023, Foodiii has come a long way from its beginnings. When we first started out, our passion for delivering fresh and delicious food drove us to start our own business.</p>
      <p>We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
      <p>Sincerely,</p>
      <p>The Foodiii Team</p>

      <button onClick={fetchAboutInfo}>Fetch About Info</button>
     
    </div>
  );
};

export default About;
