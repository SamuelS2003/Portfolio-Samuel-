import React from 'react';
import linkedIn from "../../assets/LinkedIn.png";
import medium from "../../assets/Medium.png"
import gitHub from "../../assets/GitHub.png"
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <footer className='text-center py-6 dark:bg-slate-950 dark:text-white'>
      <p className='container'>
        ©2025{" "} Made by <b className='text-blue-700'>Samuel</b> with ❤                            
      </p>
      <div className='icons flex justify-center space-x-3 w-full dark:bg-slate-700 py-4 '>
      <a href='https://www.linkedin.com/in/samuel-sholademi-133710159/'>
        <img src={linkedIn} className='w-9 h-8'></img>
      </a>
      <a href='https://medium.com/@samuelsholademi37'>
        <img src={medium} className='w-auto h-7'></img>
      </a>
      <a href='https://github.com/SamuelS2003'>
        <img src={gitHub} className='w-auto h-7'></img>
      </a>
      </div>
    </footer>
    
    </>
  );
};

export default Footer;