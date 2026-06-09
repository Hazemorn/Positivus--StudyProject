// import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import CardService from "../../components/CardService/CardService";
import Header from "../../components/Header/Header";
import s from "./Homepage.module.scss";

interface Company {
  id: number;
  name: string;
  src: string;
}

const COMPANIES: Company[] = [
  { id: 1, name: "Amazon", src: "/logos/amazon.svg" },
  { id: 2, name: "Dribbble", src: "/logos/dribbble.svg" },
  { id: 3, name: "HubSpot", src: "/logos/hubSpot.svg" },
  { id: 4, name: "Notion", src: "/logos/notion.svg" },
  { id: 5, name: "Netflix", src: "/logos/netflix.svg" },
  { id: 6, name: "Zoom", src: "/logos/zoom.svg" },
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
              <img src="/homepage/hero.svg" alt="hero-img" />
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
            <div className={s.services__header}>
              <h1>Services</h1>
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
              <img src="/homepage/proposal.svg" alt="proposal" />
            </div>
          </div>
        </section>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Homepage;
