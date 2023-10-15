import React from 'react'
import Header from '../components/Header'
import Table from '../components/Table'
import Search from '../components/Search'
import Pagination from '../components/Pagination'
const Transformation = () => {
  return (
    <div className=' '>
     <Header />
     <div className='mb-20'>
     <Search/>
     </div>
     <div className='border h-[70vh] p-4 border-gray-100 rounded-lg'>
     <Table />
     <Pagination />
     </div>
  </div>
  )
}

export default Transformation