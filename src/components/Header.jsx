import React from "react";
import Button from "./Button";
const Header = () => {
  return (
    <header className="flex items-center justify-between ">
      <h1 className="text-[20px] leading-[28px] font-semibold ">
        Transformation
      </h1>
      <div className="flex items-center md:gap-4 gap-1">
        <Button text={"Create a new Transformation"} className='bg-[#32D583] text-white border-none px-[20px] text-[14px] font-bold hover:opacity-80 rounded-md py-[8px] hidden md:block'/>
        <Button text={"Filters"} className='bg-[#32D583] text-white border-none px-[20px] text-[14px] font-bold hover:opacity-80 rounded-md py-[8px] hidden md:block'/>
        <Button text={(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        
        )} className=" md:hidden block bg-[#32D583] text-white border-none px-[20px] text-[14px] font-bold hover:opacity-80 rounded-md py-[8px]"/>
        <Button text={(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
        </svg>
        
        )} className="md:hidden block bg-[#32D583] text-white border-none px-[20px] text-[14px] font-bold hover:opacity-80 rounded-md py-[8px]" />
      </div>
    </header>
  );
};

export default Header;
