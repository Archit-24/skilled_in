import { FloatingDockDemo } from '@/components/fltdock'
import { AnimatedPinDemo, AnimatedPinDemo1, AnimatedPinDemo2 } from '@/components/ResourcesPin'
import React from 'react'

function page() {
  return (
    <div>
        <FloatingDockDemo/>
        <div className='flex'>
        <AnimatedPinDemo/>
        <AnimatedPinDemo1/>
        <AnimatedPinDemo2/>
        </div>
    </div>
  )
}

export default page
