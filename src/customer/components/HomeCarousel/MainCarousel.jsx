import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { mainCarouselData } from './MainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css'
function MainCarousel() {

    const items = mainCarouselData.map((item) => {
        return (
            <div className="item w-full -z-20' flex justify-center items-center" data-value={item.id}>
                <img className='cursor-pointer -z-20' role='presentation' src={item.image} alt={item.alt} />
            </div>
        )
    })

  return (
     <AliceCarousel
        
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
     />
  )
}

export default MainCarousel