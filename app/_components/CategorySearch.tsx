import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
function CategorySearch() {
  return (
    <div className='mb-10 text-center items-center flex flex-col gap-4'>
        <h2 className='  text-4xl  font-bold  tracking-wider'>Search <span className='text-primary'>Photographers</span></h2>
        <h2 className=' text-gray-600 text-xl '>search your photoghrapher and book it as per your requirement </h2>
    <div className="flex w-full mt-4 max-w-sm items-center space-x-2 ">
      <Input type="text" placeholder="Search photographer...." />
      <Button className="hover:scale-105 hover:transition-all ease-in-out" type="submit"><Search  className='h-4 w-4 mr-2  '/>Search</Button>
    </div>
    </div>
  )
}

export default CategorySearch