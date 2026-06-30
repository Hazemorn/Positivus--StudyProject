import s from './CardService.module.scss'
import arrowImg from '../../assets/cardService/arrowService.svg'

interface ServiceProps {
    titleTop: string;
    titleBottom: string;
    src: string;
    bgText: string;
    cardColor: string;
}

const CardService: React.FC<ServiceProps> = ( {titleTop, titleBottom, src, bgText, cardColor}) => {
    const isBlackBg: boolean = cardColor === "var(--black)";
    console.log(isBlackBg);
    return ( 
    <>
    <section className={s.service} style={{backgroundColor: cardColor}} >
        <div className={s.service__wrapper} data-bg-black={isBlackBg}>
            <div className={s.service__text}>
                <h3>
                    <span style={{backgroundColor: bgText}}>{titleTop}</span>
                    <span style={{backgroundColor: bgText}}>{titleBottom}</span>
                </h3>
                <a href='#'>
                    <img src={arrowImg} alt='arrow' loading='lazy'/>
                    <span className={s.learnMore}>Learn more</span>
                </a>
            </div>
            <img src={src} alt='serviceImg'/>
        </div>

    </section>
    
    </> 
    );
}
 
export default CardService;