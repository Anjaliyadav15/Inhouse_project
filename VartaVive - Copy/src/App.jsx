import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import Testimonials from './components/Testimonials';
import SignUp from './components/signUp/SignUp.jsx';

import { Footer } from './components/Footer.jsx';
import SignIn from './components/signIn/SignIn.jsx';
import { ShootingStars } from './components/ui/shooting-stars.jsx';
import { StarsBackground } from './components/ui/stars-background.jsx';
import { Home } from './components/Home.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Route for the SignUp page */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/home' element={<Home/>} />
        {/* Route for the main content */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <AboutUs />
                <Services />
                <Testimonials />
                <Footer/>
                <ShootingStars />
                <StarsBackground />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
    <ShootingStars />
    <StarsBackground />
    </>
  );
}

export default App;
