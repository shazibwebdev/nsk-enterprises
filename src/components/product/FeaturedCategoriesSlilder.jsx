import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../../styles/FeaturedCategoriesSlilder.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { useAppContext } from '../../contexts/AppContext';
import img3 from '../../assets/images/Featured-category-img1.webp'
import img4 from '../../assets/images/Featured-category-img2.webp'
import img1 from '../../assets/images/Featured-category-img3.webp'
import img2 from '../../assets/images/Featured-category-img4.webp'
import { Link } from 'react-router-dom';

export default function FeaturedCategoriesSlilder() {

  const {
    categories,
    setActiveFilter
  } = useAppContext()

  // console.log(categories);

  const images = [img1, img2, img3, img4]
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
          categories.map((category, idx) => {
            return (
              <SwiperSlide onClick={() => {
                // FetchData(`https://fakestoreapi.com/products/category/${category}`)
                setActiveFilter(category)
              }}
                key={idx} className='relative'>
                <Link key={idx} to={'/shop'}>
                  <img className='w-full h-full object-cover object-center' src={images[idx]} alt="" />
                  <div className='bg-[#00000059] absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                    {category.toUpperCase()}
                  </div>
                </Link>
              </SwiperSlide>

            )
          })
        }

      </Swiper>
    </>
  );
}
