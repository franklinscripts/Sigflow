import React, { useEffect } from 'react';
import SideNav from '../components/SideNav';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('user');
  useEffect(() => {

    if (!isLoggedIn) {
      navigate('/auth/login'); // Use an absolute path
      // return null;
    }
  }, [navigate])

  return (
    <div className='flex md:max-w-full item-start mx-2 md:mx-12 my-4 gap-4'>
      <SideNav />
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
