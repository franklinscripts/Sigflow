import React from 'react'
import Button from './Button'

const Pagination = () => {
  return (
    <div className='flex items-center gap-2 absolute bottom-[150px]'>
        
        <Button text={5} className='bg-[#32D583] text-white border-none px-[20px] text-[14px] font-bold hover:opacity-80 rounded-md py-[8px]'/>
        <Button text={10} className='focus:bg-[#32D583] bg-[#F5F5F5] text-white border-none px-[20px] text-[14px] font-bold hover:opacity-80 rounded-md py-[8px]'/>
        <Button text={15} className='focus:bg-[#32D583] bg-[#F5F5F5] text-white border-none px-[20px] text-[14px] font-bold hover:opacity-80 rounded-md py-[8px]'/>
    </div>
  )
}

export default Pagination