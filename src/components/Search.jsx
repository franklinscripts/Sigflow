import React from 'react'
import SearchImg from '../assets/search-sm.svg'
const Search = () => {
  return (
    <div className=' flex float-right border px-6 py-2 rounded-md mt-4 md:w-[350px] w-full justify-between '>
        <input type="text" placeholder='Search transformation' className=' border-none outline-none placeholder:text-[14px]'/>
        <img src={SearchImg} alt="" className=" cursor-pointer" />
    </div>
  )
}

export default Search