import { useState } from 'react';
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import s from "./Homepage.module.scss";

import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import CardService from "../../components/CardService/CardService";
import Header from "../../components/Header/Header";
import ContactUs from "../../components/ContactUs/ContactUs";
import CardProcess from "../../components/CardProcess/CardProcess";
import Review from "../../components/Review/Review";

import HeroImg from "../../assets/homepage/hero.svg";
import ProposalImg from "../../assets/homepage/proposal.svg";

import CaseStudies from "../../components/CaseStudies/CaseStudies";
import Sections from "../../components/Sections/Sections";
import CardTeam from "../../components/CardTeam/CardTeam";


import ArrowLeftImg from "../../assets/testimonials/arrow-left.svg";
import ArrowRightImg from "../../assets/testimonials/arrow-right.svg";
import PointImg from "../../assets/testimonials/point.svg";

import { COMPANIES, SERVICES, TEAM, PROCESS, REVIEWS } from "../../store/homepageData"




export const handleScrollToSection = (sectionId: string) => {
  const el = document.getElementById(sectionId);
  if(el) {
    el.scrollIntoView({behavior:'smooth', block: 'start'});
  }
}

const Homepage = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div>
      <div className="container">
        <Header onNavigate={handleScrollToSection}/>
        <section className={s.hero}>
          <div className={s.hero__wrapper}>
            <div className={s.hero__text}>
              <h1>Navigating the digital landscape for success</h1>
              <div className={`${s.hero__img} ${s.hero__img_mobile}`}>
                <img src={HeroImg} alt="heroImg" loading='lazy'/>
              </div>
              <p>
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <Button title="Book a consultation" onClick={() =>handleScrollToSection('contactUs')}/>
            </div>
            <div className={`${s.hero__img} ${s.hero__img_desktop}`}>
              <img src={HeroImg} alt="heroImg" loading='lazy'/>
            </div>
          </div>
        </section>
        <section className={s.companies}>
          <div className={s.companies__wrapper}>
            {COMPANIES.map((company) => {
              return (
                <div key={company.id} className={s.logo_companies__item}>
                  <img src={company.src} alt={company.name} />
                </div>
              );
            })}
          </div>
        </section>
           

          <Sections
            id="services"
            title="Services"
            subtitle="At our digital marketing agency, we offer a range of services to
                  help businesses grow and succeed online. These services include:"
            width="px"
            pWidth="580px"
            body={
              <section className={s.services}>
                {SERVICES.map((item) => (
                  <CardService
                    key={item.id}
                    titleTop={item.titleTop}
                    titleBottom={item.titleBottom}
                    src={item.src}
                    bgText={item.bgText}
                    cardColor={item.cardColor}
                  />
                ))}
              </section>
            }
          />

        <section className={s.proposal}>
          <div className={s.proposal__wrapper}>
            <div className={s.proposal__text}>
              <h1>Let’s make things happen</h1>
              <p>
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <Button title="Get your free proposal" onClick={() => handleScrollToSection('contactUs')}/>
            </div>
            <div className={s.proposal__img}>
              <img src={ProposalImg} alt="proposal" loading='lazy'/>
            </div>
          </div>
        </section>

        <Sections
          id="cases"
          title="Case Studies"
          subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          width="900px"
          pWidth="580px"
          body={<CaseStudies />}
        />

        <Sections
          id="about"
          title="Our Working Process"
          subtitle="Step-by-Step Guide to . Your Business Goals"
          width="770px"
          pWidth="300px"
          body={
            <div className={s.process}>
              {PROCESS.map((item) => (
                <CardProcess
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          }
        />

        <Sections
          title="Team"
          subtitle="Meet the skilled and experienced team behind our successful digital marketing strategies"
          pWidth="475px"
          body={
            <section className={s.team}>
              {TEAM.map((item) => (
                <CardTeam
                  key={item.id}
                  src={item.src}
                  name={item.name}
                  position={item.position}
                  text={item.text}
                />
              ))}
              <div className={s.team__btn}>
                <Button title='See all team' onClick={()=> handleScrollToSection('contactUs')}/>
              </div>
              </section>
            
          }
        />
  

        <Sections
          title="Testimonials"
          subtitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          pWidth="480px"
          width="800px"
          body={
            <div className={s.swiper_reviews}>
              <div className={s.swiper_reviews__wrapper}>
                  <Swiper
                      modules={[Pagination]}
                      slidesPerView={1}
                      breakpoints={{
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        }
                      }}
                      centeredSlides={true}
                      pagination={{
                        el: `.${s.controls__customPagination}`,
                        clickable: true,
                        renderBullet: (index, className) => {
                          return `<span class="${className} ${s.controls__starBullet}">
                            <img src="${PointImg}" alt="slider ${index + 1}" loading='lazy'/>
                          </span>`;
                        },
                      }}
                      onSwiper={(swiper) => setSwiperInstance(swiper)}
                  >
                      {REVIEWS.map(item => (
                        <SwiperSlide key={item.id}>
                          <Review 
                            name={item.name} 
                            position={item.position} 
                            text={item.text} 
                          />
                    </SwiperSlide>
                  ))}
                  </Swiper>
                </div>
                  <div className={s.controls}>
                    <div className={s.controls__wrapper}>
                      <button   
                        className={`${s.navBtn} ${s.customPrev}`}   
                        onClick={() => swiperInstance?.slidePrev()}
                        type="button">
                        <img src={ArrowLeftImg} alt="Previous slide" loading='lazy'/>
                      </button>
              
                      <div className={s.controls__customPagination}></div> 
                      
                      <button   
                        className={`${s.navBtn} ${s.customNext}`}   
                        onClick={() => swiperInstance?.slideNext()}
                        type="button">
                        <img src={ArrowRightImg} alt="Next slide" loading='lazy'/>
                      </button>
                    </div>
                  </div>
            </div>
          }
        />
          <Sections
            id="contactUs"
            title="Contact Us"
            subtitle="Connect with Us: Let's Discuss Your Digital Marketing Needs"
            pWidth="320px"
            body={<ContactUs />}
          />

        
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
