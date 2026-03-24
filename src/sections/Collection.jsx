import React, { useRef } from 'react'
import { collectionData } from '../util/collection'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import './styles/Collection.scss'

const Collection = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="inner collection-inner">
      <div className="t-wrap">
        <h2 className="tit">JOYWORKS&CO</h2>
        <p className="txt">Shop By Category</p>
      </div>

      <div className="collection-slider-wrap">
        <button type="button" className="prev" ref={prevRef}>
          prev
        </button>

        <button type="button" className="next" ref={nextRef}>
          next
        </button>

        <Swiper
          loop={true}
          spaceBetween={30}
          pagination={{
            type: 'progressbar'
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 16
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 18
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          modules={[Pagination, Navigation]}
          className="collection-slider"
        >
          {collectionData.map((sl, i) => (
            <SwiperSlide key={i}>
              <a href="/">
                <div className="info-wrap">
                  <div className="info-tit">{sl.title}</div>
                  <div className="name">{sl.name}</div>
                  <div className="k-name">{sl.kname}</div>
                </div>

                <div className="img-wrap">
                  <img src={sl.image} alt={sl.name} />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Collection