import FlipCard from '@/components/animata/card/flipcard'
import { ThreeDCardDemo } from '@/components/card'
import { SignupFormDemo } from '@/components/feedbackform'
import { NavbarDemo } from '@/components/Navbar'
import { WorldMapDemo } from '@/components/worldmap'
import React from 'react'


function page() {
  return (
    <>
      <NavbarDemo />
      <WorldMapDemo />
      <div className='flex items-center justify-center gap-20'>
        <SignupFormDemo />
        <div>
          <FlipCard />
        </div>
      </div>
    </>
  )
}

export default page
