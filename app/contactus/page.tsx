import FaqSection from '@/components/animata/accordion/faq'
import CardSpread from '@/components/animata/card/cardspread'
import CommentReplyCard from '@/components/animata/card/commentreply'
import FlipCard from '@/components/animata/card/flipcard'
import FlowerMenu from '@/components/animata/list/flowermenu'
import { GlobeDemo } from '@/components/contactglobe'
import { SignupFormDemo } from '@/components/feedbackform'
import { FloatingDockDemo } from '@/components/fltdock'
import { FileUploadDemo } from '@/components/Upload'
import { WorldMapDemo } from '@/components/worldmap'
import React from 'react'

function page() {
  return (
    <div>
      <FloatingDockDemo/>
      <WorldMapDemo/>
      <div className='flex items-center justify-center gap-20'>
          <SignupFormDemo />
      <div>
          <FlipCard />
      </div>
            </div>
      {/* <GlobeDemo/> */}
      {/* <FileUploadDemo/>  */}
      {/* <FaqSection/> */}
      {/* <CardSpread/> */}
      {/* <CommentReplyCard/> */}
      {/* <FlowerMenu/> */}
      {/* <FlipCard/> */}
    </div>

  )
}

export default page
