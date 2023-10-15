import React from 'react'
import Dots from '../assets/dots-vertical.svg'
import Eye from '../assets/eye.svg'
import Archive from '../assets/archive.svg'
import Delete from '../assets/trash-01.svg'

const Pop = ({open, handlClick}) => {
  return (
    <div>
        <img src={Dots} className='cursor-pointer' alt="" onClick={handlClick}/>
        { !open &&
        <div className="transition-all ease-linear duration-200 absolute shadow-md w-[250px] p-4 bg-white right-[100px] text-[11px] text-[#34373f] flex flex-col gap-3">
            <div className='flex items-center gap-4'>
                <img src={Eye} alt="" />
                <span>View Transformations</span>
            </div>
            <div className='flex items-center gap-4'>
                <img src={Archive} alt="" />
                <span>Archive Transformation</span>
            </div>
            <div className='flex items-center gap-4'>
                <img src={Delete} alt="" />
                <span className=' text-[#af202d]'>Delete</span>
            </div>
        </div>
        }
    </div>
  )
}

export default Pop