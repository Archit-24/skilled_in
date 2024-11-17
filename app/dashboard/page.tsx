
import { AppleCardsCarouselDemo } from '@/components/cardcarosel'
import { FloatingDockDemo } from '@/components/fltdock'
import { GoogleGeminiEffectDemo } from '@/components/gemini'
import { LampDemo } from '@/components/GlowingLamp'
import { InfiniteMovingCardsDemo } from '@/components/infiniteCards'
import { MultiStepLoaderDemo } from '@/components/multistep'
import { WavyBackgroundDemo } from '@/components/wvbg'
import React from 'react'
import { useRef, useState } from "react"


function page() {
  return (
    <>
    <GoogleGeminiEffectDemo/>
    <FloatingDockDemo/>
    {/* <WavyBackgroundDemo/> */}
    {/* <AppleCardsCarouselDemo/> */}
    <InfiniteMovingCardsDemo/>
    <LampDemo/>
    <MultiStepLoaderDemo/>
    </>
  )
}

export default page