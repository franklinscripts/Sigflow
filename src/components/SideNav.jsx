import React from 'react';
import Archive from '../assets/archive.svg';
import File from '../assets/file-02.svg';
import Transform from '../assets/transform.svg';
import Settings from '../assets/settings-01.svg';
import User from '../assets/user-01.svg';
import BookOpen from '../assets/book-open-01.svg';
import LinkImg from '../assets/link-05.svg';
import Share from '../assets/share-04.svg';
import Dropdown from '../assets/chevron-selector-vertical.svg';
import { NavLink } from 'react-router-dom';

const navData = [
    {
        title: "Events",
        img: File,
        path: "/"
    },
    {
        title: "Pipeline",
        img: LinkImg,
        path: "/"
    },
    {
        title: "Source",
        img: Share,
        path: "/"
    },
    {
        title: "Destination",
        img: Share,
        path: "/"
    },
    {
        title: "Transformations",
        img: Transform,
        path: "transformation"
    },
];
const user=[
    {
        title:"Account",
        img: User
    },
    {
        title:"Settings",
        img: Settings
    },
]
const help = [
    {
        title: "Help",
        img: BookOpen
    },
    {
        title: "Documentation",
        img: BookOpen,
    },
]
const SideNav = () => {
    return (
        <div className='w-[300px] transition hidden md:block h-full '>
            <div className='flex items-center bg-[#18181b0d] rounded-[6px] px-2 py-2 w-[184px] justify-between'>
                <span className='text-[14px] text-[#101828]'>Sigflow</span>
                <img src={Dropdown} alt="img" className='w-[]' />
            </div>
            <div className=' py-4 mx-auto'>
                {navData.map(item => (
                    <NavLink
                        key={item.title}
                        to={item.path}
                        activeStyle={{
                            background: "#ECFDF3",
                            color: "#32d583"
                        }}
                        end={item.path === "transformation"}
                        className='flex items-center gap-6 py-3 px-2 rounded-[6px]'
                    >
                        

                        <img src={item.img} alt={item.title} />
                        <span>{item.title}</span>
        
                      
                        
                    </NavLink>
                ))}
                 <div className='border-[.1px] my-4 border-gray-100'></div>
                 {user.map(item => (
                    <NavLink
                        key={item.title}
                        to={item.path}
                        activeStyle={{
                            background: "#ECFDF3",
                            color: "#32d583"
                        }}
                        end={item.path === "transformation"}
                        className='flex items-center gap-6 py-4 px-2 rounded-[6px]'
                    >
                       

                        <img src={item.img} alt={item.title} />
                        <span>{item.title}</span>
                        
                    </NavLink>
                ))}
                <div className='absolute bottom-[50px]'>

                 {help.map(item => (
                    <NavLink
                        key={item.title}
                        to={item.path}
                        
                        end={item.path === "transformation"}
                        
                    >
                        <div className='flex items-center gap-6 py-3 px-2 rounded-[6px]'>

                        <img src={item.img} alt={item.title} />
                        <span className='text-[#32D583] font-bold text-[14px]' >{item.title}</span>
                        </div>
                      
                        
                    </NavLink>
                ))}
                </div>

            </div>
        </div>
    );
};

export default SideNav;
