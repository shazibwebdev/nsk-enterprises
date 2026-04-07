import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/FeaturedProductsSlider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import products from '../../data/products';

const featuredIds = [10, 6, 11, 13, 14];
const featuredProducts = products.filter(p => featuredIds.includes(p.id)).reverse();

export default function FeaturedProductsSlider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const [isSliderImg, setIsSliderImg] = useState('true')

    const checkWidth = () => {
        if (window.innerWidth < 500) {
            setIsSliderImg(false)
        }
        else {
            setIsSliderImg(true)

        }

    }

    useEffect(() => {
        window.addEventListener('resize', checkWidth)
        
        checkWidth()
        
        return ()=>{
            window.removeEventListener('resize', checkWidth)

        }
    }, [])


    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="swiper-prod h-[100vh]"
            >
                {
                    featuredProducts.map(prods => {
                        const { image, sliderImage, id, title } = prods
                        return (
                            <SwiperSlide key={id} className='swiper-prod-slide'>
                                <Link to={`/product/${id}`}>
                                    <img className='w-full h-full object-cover rounded' src={isSliderImg ? sliderImage : image} alt={title} />
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }


                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
