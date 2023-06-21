import React from 'react';

// IMPORT SWIPER COMPONENTES (FROM NPM)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// STYLES
import "../Styles/Estilos.scss";

// IMAGES
import slide_image_1 from '../../public/Images/barberia-fondo.jpg';

export default function Estilos() {

  return (

    <div className="container">

      <h1 className="heading">Estilos</h1>

      <p className='heading-desc'>Conocé todos nuestros estilos.</p>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}

          coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          }}

          navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
          }}

          modules={[EffectCoverflow, Pagination, Navigation]}

          className="swiper_container"
        >

          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">

            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>

            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>

          </div>

        </Swiper>

    </div>

  );
}
