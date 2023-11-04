'use client'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TESTIMONIALS_CARD, TESTIMONIALS_TEXT } from '@/constants';
import Image from 'next/image';

const Index = () => {
  return (
    <section className="section">
      <div className="container-center">
        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="700" className="testimonials-header">
          <h5 className="pretitle">{
            TESTIMONIALS_TEXT[0]
          }</h5>
          <h2 className="title-section">{
            TESTIMONIALS_TEXT[1]
          }</h2>
        </div>

        <Swiper data-ao="fade-left" data-aos-delay="300" data-aos-duration="1000"
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={'auto'}
          grabCursor
          autoHeight
          navigation
          pagination={{ dynamicBullets: true, clickable: true }}
          scrollbar={{ draggable: false }}
        >
          {
            TESTIMONIALS_CARD.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card-photo">
                  <Image
                    src={item.avatar}
                    fill
                    alt=''
                  />
                </div>
                <h4 className="card-name">{item.name}</h4>
                <p className="card-text">{item.body}</p>
            </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Index
