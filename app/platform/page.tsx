import { HeroParallaxDemo } from '@/components/Aboutparalex'
import { TimelineDemo } from '@/components/AboutTimeline'
import { NavbarDemo } from '@/components/Navbar'
import { AnimatedTooltipPreview } from '@/components/team'
import React from 'react'

function page() {
  return (
    <div>
      <NavbarDemo/>
      <HeroParallaxDemo/>
      <TimelineDemo/>
      <AnimatedTooltipPreview/>
    </div>
  )
}

export default page
