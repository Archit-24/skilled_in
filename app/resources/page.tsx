import { FloatingDockDemo } from '@/components/fltdock'
import { AnimatedPinDemo, AnimatedPinDemo1, AnimatedPinDemo2 } from '@/components/ResourcesPin'
import { FileUploadDemo } from '@/components/Upload'
import React from 'react'

function page() {
  return (
    <div>
        <FloatingDockDemo/>
        <div className='mt-[150px]'>
        {/* <AnimatedPinDemo/>
        <AnimatedPinDemo1/>
        <AnimatedPinDemo2/> */}
        <FileUploadDemo/>
        </div>
    </div>
  )
}

export default page
