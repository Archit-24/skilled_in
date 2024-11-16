import { HeroParallaxDemo } from '@/components/Aboutparalex'
import { TimelineDemo } from '@/components/AboutTimeline'
import { AnimatedTooltipPreview } from '@/components/team'
import React from 'react'

function page() {
  return (
    <div>
      <HeroParallaxDemo/>
      <TimelineDemo/>
      <AnimatedTooltipPreview/>
    </div>
  )
}

export default page
