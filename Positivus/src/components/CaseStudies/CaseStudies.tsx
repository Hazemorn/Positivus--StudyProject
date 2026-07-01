import s from "./CaseStudies.module.scss";
import ArrowImg from '../../assets/homepage/arrow.svg'
import { Swiper,  SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Case {
    id: number;
    text: string;
}

const CASE: Case[] = [
    { id: 1, text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.'},
    { id: 2, text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.'},
    { id: 3, text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'},
]

const CaseStudies = () => {
  return (
    <>
      <section className={s.case}>
          <div className={`${s.case__body}  ${s.case__body_desktop}`}>
             <div className={s.case__content}>
                    {CASE.map(n => (
                    <div className={s.case__card} key={n.id}>
                        <p>{n.text}</p>
                        <div className={s.case__arrow}>
                            <a href="#">
                                <span>Learn more</span>
                                <img src={ArrowImg} alt="Arrow" loading='lazy'/>
                            </a>
                        </div>
                    </div>     
                ))}
             </div>
          </div>
           
        
            <div className={s.case__swiper_mobile}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.2}
                    centeredSlides={true}
                >
                      {CASE.map(n => (
                         <SwiperSlide className={s.case__slide} key={n.id}>
                                <div className={`${s.case__body}`}>
                                    <div className={s.case__content}>
                                        <p>{n.text}</p>
                                        <div className={s.case__arrow}>
                                            <a href="#">
                                                <span>Learn more</span>
                                                <img src={ArrowImg} alt="Arrow" loading='lazy'/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>     
                        ))}
                </Swiper>
            </div>
      </section>
    </>
  );
};

export default CaseStudies;
