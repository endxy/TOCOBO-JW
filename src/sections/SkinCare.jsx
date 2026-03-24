import React from 'react'
import skincare from '../util/skincare'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './styles/SkinCare.scss'

const SkinCare = () => {
  return (
    <div className="inner skincare-inner">
      <div className="t-wrap">
        <h2 className="tit">Brand</h2>

        <p className="txt">
          조이웍스엔코는 ‘레이디 가구’와 ‘이롭 음식물 처리기’를 비롯한 생활 가구·가전 브랜드를 운영하며,
          글로벌 러닝 브랜드 ‘HOKA’의 오프라인 사업을 편입해 스포츠 유통 시장까지 영역을 넓혀가고 있습니다.
        </p>

        <a href="#!" className="btn">
          meet
        </a>
      </div>

      <div className="slider-wrap">
        <div className="in">
          <Swiper
            loop={true}
            className="skincare-slider"
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 16
              },
              480: {
                slidesPerView: 1.2,
                spaceBetween: 16
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }}
          >
            {skincare.map((sl) => (
              <SwiperSlide
                key={sl.id}
                style={{ backgroundImage: `url(${sl.image})` }}
              >
                <a href={sl.link || '#!'} aria-label={`brand-${sl.id}`}>
                  {sl.id}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SkinCare