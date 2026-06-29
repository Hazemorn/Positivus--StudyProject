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
import AmazonImg from "../../assets/logos/amazon.svg";
import DribbbleImg from "../../assets/logos/dribbble.svg";
import HubSpotImg from "../../assets/logos/hubSpot.svg";
import NotionImg from "../../assets/logos/notion.svg";
import NetflixImg from "../../assets/logos/netflix.svg";
import ZoomImg from "../../assets/logos/zoom.svg";
import CaseStudies from "../../components/CaseStudies/CaseStudies";
import Sections from "../../components/Sections/Sections";

import searchImg from "../../assets/cardService/search.svg";
import clickImg from "../../assets/cardService/click.svg";
import socialImg from "../../assets/cardService/social.svg";
import emailImg from "../../assets/cardService/email.svg";
import contentImg from "../../assets/cardService/content.svg";
import analyticsImg from "../../assets/cardService/analytics.svg";
import CardTeam from "../../components/CardTeam/CardTeam";

import JohnSmithImg from "../../assets/cardTeam/JohnSmith.svg";
import JaneDoeImg from "../../assets/cardTeam/JaneDoe.svg";
import MichaelBrownImg from "../../assets/cardTeam/MichaelBrown.svg";
import EmilyJohnsonImg from "../../assets/cardTeam/EmilyJohnson.svg";
import BrianWilliamsImg from "../../assets/cardTeam/Brian Williams.svg";
import SarahKimImg from "../../assets/cardTeam/SarahKim.svg";

import ArrowLeftImg from "../../assets/testimonials/arrow-left.svg";
import ArrowRightImg from "../../assets/testimonials/arrow-right.svg";
import PointImg from "../../assets/testimonials/point.svg";
// import SwiperReviews from "../../components/SwiperReviews/SwiperReviews";



interface Company {
  id: number;
  name: string;
  src: string;
}

const COMPANIES: Company[] = [
  { id: 1, name: "Amazon", src: AmazonImg },
  { id: 2, name: "Dribbble", src: DribbbleImg },
  { id: 3, name: "HubSpot", src: HubSpotImg },
  { id: 4, name: "Notion", src: NotionImg },
  { id: 5, name: "Netflix", src: NetflixImg },
  { id: 6, name: "Zoom", src: ZoomImg },
];

interface Service {
  id: number;
  titleTop: string;
  titleBottom: string;
  src: string;
  bgText: string;
  cardColor: string;
}

const SERVICES: Service[] = [
  {
    id: 1,
    titleTop: "Search engine",
    titleBottom: "optimization",
    src: searchImg,
    bgText: "var(--accent)",
    cardColor: "var(--grey)",
  },
  {
    id: 2,
    titleTop: "Pay-per-click",
    titleBottom: "advertising",
    src: clickImg,
    bgText: "var(--white)",
    cardColor: "var(--accent)",
  },
  {
    id: 3,
    titleTop: "Social Media",
    titleBottom: "Marketing",
    src: socialImg,
    bgText: "var(--white)",
    cardColor: "var(--black)",
  },
  {
    id: 4,
    titleTop: "Email",
    titleBottom: "Marketing",
    src: emailImg,
    bgText: "var(--accent)",
    cardColor: "var(--grey)",
  },
  {
    id: 5,
    titleTop: "Content",
    titleBottom: "Creation",
    src: contentImg,
    bgText: "var(--white)",
    cardColor: "var(--accent)",
  },
  {
    id: 6,
    titleTop: "Analytics and",
    titleBottom: "Tracking",
    src: analyticsImg,
    bgText: "var(--accent)",
    cardColor: "var(--black)",
  },
];

interface Team {
  id: number;
  src: string;
  name: string;
  position: string;
  text: string;
}

const TEAM: Team[] = [
  {
    id: 1,
    src: JohnSmithImg,
    name: "John Smith",
    position: "CEO and Founder",
    text: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    id: 2,
    src: JaneDoeImg,
    name: "Jane Doe",
    position: "CEO and Founder",
    text: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    id: 3,
    src: MichaelBrownImg,
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    text: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    id: 4,
    src: EmilyJohnsonImg,
    name: "Emily Johnson",
    position: "PPC Manager",
    text: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    id: 5,
    src: BrianWilliamsImg,
    name: "Brian Williams",
    position: "Social Media Specialist",
    text: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    id: 6,
    src: SarahKimImg,
    name: "Sarah Kim",
    position: "Content Creator",
    text: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

interface Process {
  id: number;
  title: string;
  text: string;
}

const PROCESS: Process[] = [
  {
    id: 1,
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 3,
    title: "Implementation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

interface Review {
  id: number;
  name: string;
  position: string;
  text: string;
}

const REVIEWS: Review[] = [
  {id: 1, name: "John Smith", position: "Marketing Director at XYZ Corp", text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."},
  {id: 2, name: "Stef Li", position: "Marketing at NI Corp", text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."},
  {id: 3, name: "Nick Baker", position: "Designer at U Corp", text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."},
  {id: 4, name: "Ryan Wayne", position: "Marketing Director at XYZ Corp", text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."},
  {id: 5, name: "Alex Kim", position: "Founder at WER Corp", text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."},
]


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
              <p>
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <Button title="Book a consultation" onClick={() =>handleScrollToSection('contactUs')}/>
            </div>
            <div className={s.hero__img}>
              <img src={HeroImg} alt="hero-img" />
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
              <img src={ProposalImg} alt="proposal" />
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
                      modules={[ Pagination]}
                      spaceBetween={40}
                      slidesPerView={2.5}
                      centeredSlides={true}
                      navigation={{
                        nextEl: `.${s.customNext}`,
                        prevEl: `.${s.customPrev}`,
                      }}
                      pagination={{
                        el: `.${s.controls__customPagination}`,
                        clickable: true,
                        renderBullet: (index, className) => {
                          return `<span class="${className} ${s.controls__starBullet}">
                            <img src="${PointImg}" alt="slider ${index + 1}" />
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
                        <img src={ArrowLeftImg} alt="Previous slide" />
                      </button>
              
                      <div className={s.controls__customPagination}></div> 
                      
                      <button   
                        className={`${s.navBtn} ${s.customNext}`}   
                        onClick={() => swiperInstance?.slideNext()}
                        type="button">
                        <img src={ArrowRightImg} alt="Next slide" />
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

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
