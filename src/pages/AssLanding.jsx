import React from 'react'

export default function AssLanding() {

  return (
    <>
    <div className="bg-[#688ea0] h-[40px] w-full absolute top-0 left-0">
      <h1 className='text-3xl font-bold text-white'>Grandma's Secret Apple Pie</h1>
    </div>

    <div className='mt-8 mb-4'> 
      <div className='h-[120px] bg-blue-50 w-[500px] mb-3 rounded border-4 flex justify-center items-center text-center p-4 sm:text-left font-serif'>
        <p>This apple pie has been in my family for generations and never fails to delight</p>
        </div>

        <div className='h-[180px] bg-blue-50 w-[500px] mb-3 rounded border-4 p-6'>
          <p className='text-3xl text-[#7c0d84] align-text-left font-bold sm:text-left font-serif'>Ingredients</p>
          <ul className='sm:text-left list-disc list-inside indent-7 font-serif'>
            <li>1/2 cup of sugar</li>
            <li>2 tsp ground cinnamon</li>
            <li>6 medium-sized apples,peeled and sliced</li>
          </ul>
          </div>

      <div className='h-[180px] bg-blue-50 w-[500px] mb-3 rounded border-4 p-6'>
      <p className='text-3xl text-[#7c0d84] align-text-left font-bold sm:text-left font-serif'>Ingredients</p>
          <ol className='sm:text-left indent-7 list-decimal list-inside font-serif'>
            <li>Preheat oven to 375F (190C) </li>
            <li>In a bowl, mix the sugar and cinnamon</li>
            <li>Toss the apples in the sugar cinnamon mixture</li>
          </ol>
      </div>
    </div>

    <div className='bg-[#688ea0] h-[40px] w-full absolute left-0'>
      <p className='font-bold text-white mt-0'>Copyright 2023 by [Your Name]. All rights reserved</p></div>
    </>
  )
}
