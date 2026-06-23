import s from './CardTeam.module.scss'
import linkedIcon from '../../assets/cardTeam/linkedIcon.svg'


interface TeamProps {
    src: string;
    name: string;
    position: string;
    text: string;
}

const CardTeam: React.FC<TeamProps> = ({src, name, position, text}) => {
    return ( 
        <section className={s.employee}>
            <div className={s.employee__wrapper}>
                <div className={s.employee__top}>
                    <img src={src} alt='Photo'/>
                    <div>
                        <h4>{name}</h4>
                        <p>{position}</p>
                    </div>
                    <a href='#'> <img src={linkedIcon} alt='linkedIn'/></a>
                   
                </div>
                <div className={s.employee__bottom}>
                    <p>{text}</p>
                </div>
            </div>
        </section> 
    );
}
 
export default CardTeam;