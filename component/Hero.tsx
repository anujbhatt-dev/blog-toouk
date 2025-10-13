"use client"
import React from 'react'
import Carousel from './Carousel'
import SliderComp from './SliderComp'
import { usePathname } from 'next/navigation'

export default function Hero() {
  const pathname = usePathname();
  if((pathname.split("/").length-1)==2) return null
  return (
    <div className='my-5'>
        <SliderComp/>
        <Carousel/>
    </div>
  )
}
