
import { AppleCardsCarouselDemo } from '@/components/cardcarosel'
import { FloatingDockDemo } from '@/components/fltdock'
import { GoogleGeminiEffectDemo } from '@/components/gemini'
import { MultiStepLoaderDemo } from '@/components/multistep'
import { WavyBackgroundDemo } from '@/components/wvbg'
import React from 'react'
import { useRef, useState } from "react"


function page() {
  return (
    <>
    <FloatingDockDemo/>
    {/*<WavyBackgroundDemo/>}*/}
    <AppleCardsCarouselDemo/>
    <GoogleGeminiEffectDemo/>
    <MultiStepLoaderDemo/>

    </>
  )
}

export default page