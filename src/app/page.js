import Accodian from '@/components/Accodian'
import FrequentlyAsked from '@/components/FrequentlyAsked'
import HeroSection from '@/components/HeroSection'
import Insights from '@/components/Insights'
import PurpleReadySection from '@/components/PurpleReadySection'
import SwiperBlogs from '@/components/SwiperBlogs'
import React from 'react'

function page() {
  return (
    <div>
      <HeroSection/>
      <div className='mt-40'>
      <Insights/>
      </div>
      <div className='py-40'>
      <Accodian/>
      </div>
      <FrequentlyAsked/>
      <div className='mt-20'>

      <PurpleReadySection/>
      </div>
      <SwiperBlogs/>
    </div>
  )
}

export default page
