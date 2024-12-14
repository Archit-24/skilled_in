import Speeddial from '@/components/animata/fabs/speed-dial'
import { AppleCardsCarouselDemo } from '@/components/cardcarosel'
import { FloatingDockDemo } from '@/components/fltdock'
import React from 'react'

function page() {
  return (
    <>
      <FloatingDockDemo />
      <div className="mt-[100px]">
        <AppleCardsCarouselDemo />
      </div>
      {/* <Speeddial/> */}
    </>
  )
}

export default page
