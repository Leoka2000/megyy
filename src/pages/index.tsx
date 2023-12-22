import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
import MyNavbar from '@/components/navbar/navbar'
import HeroSection from './index/hero'
import LandingSection from './index/landing'

const inter = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >

<MyNavbar/>
<HeroSection/>
<LandingSection/>
     
    </main>
  )
}
