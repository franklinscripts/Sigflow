import React from 'react';
import Archive from '../assets/archive.svg';
import File from '../assets/file-02.svg';
import Transform from '../assets/transform.svg';
import Settings from '../assets/settings-01.svg';
import Trash from '../assets/trash-01.svg';
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

const MobileNav = ( {open} ) => {
    return (
        <div className={`w-[300px] transition-all ease-linear duration-200  absolute top-[100px] bg-gray-100 p-4 transform ${!open ? "translate-x-[-150%]": "translate-x-[5%] rounded-md"} md:hidden`}>
            <div className='flex items-center bg-[#18181b0d] rounded-[6px] px-2 py-2 w-[184px] justify-between'>
                <span className='text-[14px] text-[#101828]'>Sigflow</span>
                <img src={Dropdown} alt="img" className='w-[]' />
            </div>
            <div className='px-2  mx-auto'>
                {navData.map(item => (
                    <span
                        className='flex items-center gap-6 py-3 px-2 rounded-[6px]'
                        key={item.title}
                        to={item.path}
                        activeStyle={{
                            background: "#ECFDF3",
                            color: "#32d583"
                        }}
                        end={item.path === "transformation"}
                    >
                        <img src={item.img} alt={item.title} />
                        <span>{item.title}</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MobileNav;
