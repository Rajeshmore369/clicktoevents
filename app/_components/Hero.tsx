import React from 'react'
import { Button } from '@/components/ui/button'
function Hero() {
  return (
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="./wedding.jpg"
          width={800}
          height={800}
          className="absolute inset-0 h-full rounded-3xl w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Capture <span className='text-primary'>Your </span>Perfect <span className='text-primary'>Moment</span> </h2>

        <p className="mt-4 text-gray-600">
          Welcome to our photography booking platform, where every cherished moment can be beautifully captured. Whether it's your dream wedding, a romantic pre-wedding shoot, the joy of a baby shower, or the precious first photos of your little one, we have talented photographers ready to bring your memories to life.
        </p>
        <br/>
        <Button className='hover:scale-105 hover:transition-all ease-in-out'>Get Started</Button>
      </div>
    </div>
  </div>
</section>
  
  )
}

export default Hero