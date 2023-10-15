import React from 'react';
import SideNav from '../components/SideNav';
import { Outlet } from 'react-router-dom'; 

const Dashboard = () => {
 
  return (
    <div className='flex max-w-full item-start mx-12 my-4 gap-4'>
      <SideNav />
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
