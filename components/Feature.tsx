import React from 'react'

export default function Feature() {
  return (
    <div className='h-auto min-h-[15rem] lg:h-[15rem]  w-full lg:w-[25rem]  shrink-0 bg-[url("/b1.png")] bg-cover rounded-lg my-10 relative'>
        <div className='bg-zinc-200/10 backdrop-blur-lg text-blue-400 absolute top-0 left-0 m-2 px-4 py-2 rounded-lg text-xs'>
                Featured
        </div>
        <div className='absolute bg-gradient-to-t from-black to-black/30  bottom-0 right-0 left-0' >
                <div className='p-3 text-lg text-bold'>
                    Real World Assets
                </div>

        </div>
    </div>
  )
}
