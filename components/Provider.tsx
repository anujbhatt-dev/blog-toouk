"use client"
import React, { ReactNode } from 'react'
import TopBar from './Topbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import SearchPopup from './SearchPopup'

export default function Provider({children}:{children:ReactNode}) {
  return (
    <div className='relative' >
             
             <svg className="fixed top-0 left-0 -translate-2/3 -z-10 opacity-30 blur-3xl " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-purple-400"  d="M11.6,-18.4C15.4,-15.5,19.2,-13,22.5,-9.3C25.8,-5.5,28.6,-0.5,34.8,10C41,20.4,50.7,36.4,49.9,50.6C49,64.7,37.7,77.2,23.3,82.9C9,88.6,-8.2,87.7,-14.5,74.4C-20.7,61.1,-15.9,35.4,-27.8,23.2C-39.6,11.1,-68.2,12.5,-68.7,9.8C-69.2,7.1,-41.7,0.3,-34.1,-15.2C-26.4,-30.8,-38.7,-55.1,-36.4,-58.6C-34,-62.2,-17,-45,-6.6,-34.7C3.9,-24.5,7.7,-21.3,11.6,-18.4Z" transform="translate(100 100)" />
              </svg>
              <svg className="absolute right-0 bottom-0  -z-10 opacity-30 blur-3xl " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-green-400"  d="M11.6,-18.4C15.4,-15.5,19.2,-13,22.5,-9.3C25.8,-5.5,28.6,-0.5,34.8,10C41,20.4,50.7,36.4,49.9,50.6C49,64.7,37.7,77.2,23.3,82.9C9,88.6,-8.2,87.7,-14.5,74.4C-20.7,61.1,-15.9,35.4,-27.8,23.2C-39.6,11.1,-68.2,12.5,-68.7,9.8C-69.2,7.1,-41.7,0.3,-34.1,-15.2C-26.4,-30.8,-38.7,-55.1,-36.4,-58.6C-34,-62.2,-17,-45,-6.6,-34.7C3.9,-24.5,7.7,-21.3,11.6,-18.4Z" transform="translate(100 100)" />
              </svg>
              <div className='lg:ml-16'>
              <TopBar/>
              {children}
              <SearchPopup/>
              <Footer/>
              </div>  
             <Sidebar />
    </div>
  )
}
