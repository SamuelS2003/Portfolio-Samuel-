import React, { useEffect } from 'react';
import {FiMenu} from "react-icons/fi";
import {BiSolidMoon} from "react-icons/bi";
import {BiSolidSun} from "react-icons/bi";
import linkedIn from "../../assets/LinkedIn.png";
import medium from "../../assets/Medium.png"
import gitHub from "../../assets/GitHub.png"
import gmail from "../../assets/Gmail.png"

const navMenus =[
    {
        name: "Home",
        link: "/#home",
    },
    {
        name: "Projects",
        link: "/#projects",
    },
];

const Navbar = () => {
    const [showMenu, setShowMenu]= React.useState(false);
    const[theme, setTheme]= React.useState(
        localStorage.getItem("theme")? localStorage.getItem("theme"): "light"
        
    );


    const toggleMenu =  () => {
        setShowMenu(!showMenu);

    }

    useEffect(()=>{
        if (theme==="dark"){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        
         },[theme])
    
    
  return (
    <>
        <nav className='bg-secondary dark:bg-gray-900 dark:text-white'>
            <div className='container flex justify-between items-center py-3 sm:py-0'>
                <h1 className='text-3xl text-primary'>Portfolio</h1>
                {/*Desktop Menu*/}
                <div className='hidden sm:block'>
                    <ul className='flex items-center gap-2 '>
                        {navMenus.map((menu)=> (
                            <li key={menu.name}>
                                <a href={menu.link}
                                className='text-xl font-semibold px-2 py-4 md:py-6 inline-block 
                                cursor-pointer'>{menu.name}</a>
                                
                            </li>
                            
                        ))}
                        <a href='https://www.linkedin.com/in/samuel-sholademi-133710159/' target='_blank'>
                                <img src={linkedIn} className='w-9 h-8'></img>
                        </a>
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdDxqPvzhKrWRCzJpsWpLBNKLZTXnRBHwDCLWJXBcWKSWmMDwQWkhbxCdzWRdtmJwJCTHfG' target='_blank'>
                                <img src={gmail} className='w-9 h-auto'></img>
                        </a>                    
                     {/*Theme toggle*/}
                     {
                            theme === "dark" ?(
                                <BiSolidSun className="text-2xl dark:text-white" 
                            onClick={()=> setTheme("light")}/>

                            ):
                            (
                                <BiSolidMoon className="text-2xl cursor-pointer dark:text-white" 
                                onClick={()=> setTheme("dark")}/>

                            )
                        }
                    </ul>
                </div>
                {/*Mobile Menu*/}
                <div className='block sm:hidden'>
                    <div className='flex items-center gap-4'>
                        {/*Theme toggle*/}
                        {
                            theme === "dark" ?(
                                <BiSolidSun className="text-2xl dark:text-white" 
                    onClick={()=> setTheme("light")}/>

                            ):
                            (
                                <BiSolidMoon className="text-2xl cursor-pointer dark:text-white" 
                                onClick={()=> setTheme("dark")}/>

                            )
                        }
                    
                    <FiMenu className='text-2xl cursor-pointer'
                    onClick={toggleMenu}/>
                    </div>
                    
                    {
                        showMenu &&( 
                        <div className='fixed top-16 left-0 right-0 bg-white shadow-md rounded-b-xl
                        z-10 py-10 dark:bg-gray-900 dark: text-white'>

                            <ul className='flex flex-col items-center gap-4'>
                                {
                                navMenus.map((menu)=>(
                                    <li key={menu.name}>
                                        <a href = {menu.link} className='text-xl font-semibold px-2 py-4 md:py-6 inline-block
                                        cursor-pointer'>
                                            {menu.name}
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                            
                    )}
                </div>
            </div>

        </nav>
    </>
  );
};

export default Navbar