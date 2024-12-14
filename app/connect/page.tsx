import { ExpandableCardDemo } from '@/components/Connect'
import { FloatingDockDemo } from '@/components/fltdock'
import React from 'react'

function page() {
  return (
    <div>
      <FloatingDockDemo />
      <div className="mt-[150px]">
        <ExpandableCardDemo />
      </div>
    </div>
  )
}

export default page
