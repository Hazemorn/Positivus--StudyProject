import s from "./CaseStudies.module.scss";
import ArrowImg from '../../assets/homepage/arrow.svg'

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
        <div className={s.case__wrapper}>
          <div className={s.case__top}>
            <h2>Case Studies</h2>
            <p>
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>
          <div className={s.case__body}>
             <div className={s.case__content}>
                {CASE.map(n => (
                    <div className={s.case__card} key={n.id}>
                        <p>{n.text}</p>
                        <div className={s.case__arrow}>
                            <a href="#">
                                <span>Learn more</span>
                                <img src={ArrowImg} alt="Arrow" />
                            </a>
                        </div>
                    </div> 
                     
                ))}
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
