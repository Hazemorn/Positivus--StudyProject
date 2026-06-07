// import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import s from "./Homepage.module.scss";

const COMPANIES = [
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
              <button>Book a consultation</button>
            </div>
            <div className={s.hero__img}>
              <img src="/homepage/hero.svg" alt="hero-img" />
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
                    ) 
                })}
            </div>
        </section>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Homepage;
