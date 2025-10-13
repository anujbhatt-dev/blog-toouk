"use client"
import React, { ReactNode } from 'react'
import TopBar from './Topbar'

export default function Provider({children}:{children:ReactNode}) {
  return (
    <div>
            <TopBar/>
            {children}
    </div>
  )
}
