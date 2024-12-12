"use client";
import { AppleCardsCarouselDemo } from '@/components/cardcarosel'
import { FloatingDockDemo } from '@/components/fltdock'
import { GoogleGeminiEffectDemo } from '@/components/gemini'
import { LampDemo } from '@/components/GlowingLamp'
import { InfiniteMovingCardsDemo } from '@/components/infiniteCards'
import { MultiStepLoaderDemo } from '@/components/multistep'
import { WavyBackgroundDemo } from '@/components/wvbg'
import { UserButton, useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'
import { useRef, useState } from "react"


function page() {
  const {user} = useUser();
  if (!user){
    redirect('/')
  }
  return (
    <>
    <GoogleGeminiEffectDemo/>
    <FloatingDockDemo/>
    {/* <UserButton/> */}
    {/* <WavyBackgroundDemo/> */}
    {/* <AppleCardsCarouselDemo/> */}
    <InfiniteMovingCardsDemo/>
    <LampDemo/>
    <MultiStepLoaderDemo/>
    </>
  )
}

export default page