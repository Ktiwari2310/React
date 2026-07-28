import React from 'react'
import download from "../assets/download.webp"
import {Heart} from 'lucide-react';

const Card = () => {
  return (
    <>
    
    <div className="relative w-72 mt-20 mx-15 flex flex-wrap gap-1 justify-center">
          <div className="bg-white rounded-3xl shadow-lg pt-16 p-6">
              <h2 className="text-xl font-semibold flex justify-between">Pancake <Heart size={28} color="#c32828" strokeWidth={0.75} />
              </h2> 
              <p className="text-gray-500 mt-2">
                   Start your day right with our fluffy pancakes.
              </p>

          <div className="flex justify-between items-center mt-6">
           <span className="text-red-500 font-bold">₹199.0</span>

              <button className="bg-red-600 text-white px-5 py-2 rounded-xl">
                Add to Cart +
              </button>
          </div>
          </div>

        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-lg">
         <img
        src={download}
        alt="Pancake"
        className="w-20 h-20 rounded-full object-cover"
        />
        </div>
        </div>  
    </div>
    </>
    
  )
}

export default Card
