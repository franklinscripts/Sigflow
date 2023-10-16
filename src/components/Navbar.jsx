import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      // const foundUser = JSON.parse(loggedInUser);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className='flex items-center md:max-w-full md:mx-12 mx-1 my-4 justify-between border-b py-2 border-slate-100'>
      <img src={Menu} alt="" className='w-[38px] md:hidden block cursor-pointer' onClick={() => setNavOpen(prev => !prev)} />
      <img src={Logo} alt="logo" className='md:block hidden' />

      {isAuthenticated && <div className='flex items-start gap-2'>
        <div className='w-[38px] h-[38px] text-center flex-shrink-0 rounded bg-[#32d583]'>
          <span className='text-white capitalize font-[500] text-[24px] text-center leading-[40px]'>S</span>
        </div>
        <div>
          <h3 className='text-[#101828] text-[14px] font-semibold leading-5'>Sigflow</h3>
          <p className='text-[#828282] leading-5 text-[14px] '>Okika Franklin</p>
        </div>
      </div>}

      <MobileNav open={navOpen} />
    </div>
  )
}

export default Navbar
