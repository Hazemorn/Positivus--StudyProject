import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import CardService from "../../components/CardService/CardService";
import Header from "../../components/Header/Header";
import ContactUs from "../../components/ContactUs/ContactUs";

import s from "./Homepage.module.scss";

import HeroImg from "../../assets/homepage/hero.svg";
import ProposalImg from "../../assets/homepage/proposal.svg";
import AmazonImg from "../../assets/logos/amazon.svg";
import DribbbleImg from "../../assets/logos/dribbble.svg";
import HubSpotImg from "../../assets/logos/hubSpot.svg";
import NotionImg from "../../assets/logos/notion.svg";
import NetflixImg from "../../assets/logos/netflix.svg"; 
import ZoomImg from "../../assets/logos/zoom.svg";
import CaseStudies from "../../components/CaseStudies/CaseStudies";

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

const Homepage = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <section className={s.hero}>
          <div className={s.hero__wrapper}>
            <div className={s.hero__text}>
              <h1>Navigating the digital landscape for success</h1>
              <p>
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <Button title="Book a consultation" />
            </div>
            <div className={s.hero__img}>
              <img src={HeroImg} alt="hero-img" />
            </div>
          </div>
        </section>
        <section className={s.companies}>
          <div className={s.companies__wrapper}>
            {COMPANIES.map((company) => {
              //.concat(COMPANIES)
              return (
                <div key={company.id} className={s.logo_companies__item}>
                  <img src={company.src} alt={company.name} />
                </div>
              );
            })}
          </div>
        </section>

        <section className={s.services}>
          <div className={s.services__wrapper}>
            <div className={s.services__top}>
              <h2>Services</h2>
              <p>
                At our digital marketing agency, we offer a range of services to
                help businesses grow and succeed online. These services include:
              </p>
            </div>
            <div className={s.services__body}>
                <CardService/>
            </div>
          </div>
        </section>

        <section className={s.proposal}>
          <div className={s.proposal__wrapper}>
            <div className={s.proposal__text}>
              <h1>Let’s make things happen</h1>
              <p>
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <Button title="Get your free proposal" />
            </div>
            <div className={s.proposal__img}>
              <img src={ProposalImg} alt="proposal" />
            </div>
          </div>
        </section>
        <CaseStudies/>

        <ContactUs/>
        <Footer/>
      </div>
    </div>
  );
};

export default Homepage;
