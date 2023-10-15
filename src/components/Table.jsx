import React, { useState } from 'react';
import Dots from '../assets/dots-vertical.svg';
import Pop from './Pop';

const data = [
  {
    name: 'Gotham Asylum',
    date: new Date().toLocaleDateString(),
    status: 'Paused',
  },
  {
    name: 'New York Times',
    date: new Date().toLocaleDateString(),
    status: 'Archived',
  },
  {
    name: 'Forex Ways',
    date: new Date().toLocaleDateString(),
    status: 'Paused',
  },
  {
    name: 'London Spree',
    date: new Date().toLocaleDateString(),
    status: 'Archived',
  },
  {
    name: 'Call of Duty',
    date: new Date().toLocaleDateString(),
    status: 'Paused',
  },
];

const Table = () => {
  const [popUpStates, setPopUpStates] = useState(data.map(() => true));

  const handleClick = (index) => {
    const updatedStates = [...popUpStates];
    updatedStates[index] = !updatedStates[index];
    setPopUpStates(updatedStates);
  };

  return (
    <div className=''>
      <div className='flex items-center text-left justify-between w-[90%] text-[12px] text-[#828282]'>
        <div>Name</div>
        <div>Creation Date</div>
        <div>Status</div>
      </div>
      <div className=''>
        {data.map((item, index) => (
          <div key={item.name} className='flex items-center justify-between mt-6 border-b py-3 border-slate-100'>
            <div className='flex w-[90%] justify-between items-center text-[12px] text-[#34373f] '>
              <div>{item.name}</div>
              <div>{item.date}</div>
              <div className={`${item.status === 'Paused' ? 'text-[#32d583] bg-[#ECFDF3]' : 'bg-[#E0E0E0] text-white'} px-[12px] py-[5px] rounded-sm `}>
                {item.status}
              </div>
            </div>
            <Pop open={popUpStates[index]} handlClick={() => handleClick(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
