import React from 'react';
import {Fragment} from 'react';
import './Carousel.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gujrat from '../../Assets/Gujrat.png';
import delhi from '../../Assets/Delhi.png';
import chennai from '../../Assets/Chennai.png';
import {Autoplay, Pagination, Navigation} from 'swiper';

function Carousel () {
  return (
    <Fragment>
      <div className="carousel">
        <h1 className="text-center pt-5">Top Medical Tourism States</h1>

        <Swiper
          loop={true}
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
          className="mySwiper row"
        >
          <SwiperSlide className="row align-items-center p-5 justify-content-center">
            <img src={gujrat} alt="gujrat" className="img-fluid gujrat col-4" />
            <div className="col-6 text-center">
              <h2>Gujrat</h2>
              <p>
                Panchkarma treatment is famous in Gujarat. Relax, Rejuvenate and Revive-these three key mantras of Ayurveda can be best experienced in Gujarat. For those who want to relax, revive and rejuvenate should go for a vacation to Gujarat.
              </p>
              <button className="btn-dark rounded-pill px-3 py-2">
                <a
                  href="https://gujaratindia.gov.in/about-gujarat/medical-tourism.htm"
                  className="text-decoration-none text-white"
                >
                  Read More
                </a>
              </button>

            </div>
          </SwiperSlide>

          <SwiperSlide className="row align-items-center p-5 justify-content-center">
            <img src={delhi} alt="gujrat" className="img-fluid gujrat col-4" />
            <div className="col-6 text-center">
              <h2>New Delhi</h2>
              <p>
                India’s capital city boasts of the best medical treatment Centres.
                Top Dental clinics here have the latest and most sophisticated equipment for precision diagnosis, treatment procedures like implants, dentures, braces including cosmetic corrections of the teeth.
                It has everything to suit every pocket.  A patient can enjoy the best of care and have a relaxed and enjoyable medical holiday.
              </p>
              <button className="btn-dark rounded-pill px-3 py-2">
                <a
                  href="https://www.delhimedicaltourism.org/"
                  className="text-decoration-none text-white"
                >
                  Read More
                </a>
              </button>
            </div>
          </SwiperSlide>;

          <SwiperSlide className="row align-items-center p-5 justify-content-center">
            <img
              src={chennai}
              alt="gujrat"
              className="img-fluid gujrat col-4"
            />
            <div className="col-6 text-center">
              <h2>Chennai</h2>
              <p>

                Within India, Hyderabad (specifically Chennai) is regarded as the most efficient state for medical treatment in India. It is known as the 'health capital of India'. It offers a vast range of top-class medical facilities and has several multi-specialty and super-specialty hospitals.
              </p>
              <button className="btn-dark rounded-pill px-3 py-2">
                <a
                  href="https://chennaimedtour.com/"
                  className="text-decoration-none text-white"
                >
                  Read More
                </a>
              </button>

            </div>
          </SwiperSlide>;

        </Swiper>

      </div>
    </Fragment>
  );
}

export default Carousel;
