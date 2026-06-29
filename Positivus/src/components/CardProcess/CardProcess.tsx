import { useState } from 'react';
import s from './CardProcess.module.scss';

interface ProcessProps {
    id: number;
    title: string;
    text: string;
}

const CardProcess: React.FC<ProcessProps> = ({id, title, text}) => {
    const [openId, setId] = useState<number>(null);

    const ClickHandler = (id: number) => {
        if(openId === id) setId(null);
        else setId(id)
    };

    const isOpen: boolean = id === openId;
    console.log(id);
    return ( 
    <section className={`${s.process} ${isOpen ? s.open : ""}`}>
        <div className={`${s.process__wrapper} ${isOpen ? s.open : ""}`}>
            <div className={s.process__top}>
                <div className={s.process__title}>
                    <h3>0{id}</h3>
                    <h3>{title}</h3>
                </div>
                <button className={s.process_btn}
                    onClick={() => ClickHandler(id)}>
                <h1>
                {isOpen ? "+" : "−" }
                {/* change it to icons of plus and minus */}
                </h1>
                </button>  
            </div>
            <div className={`${s.process__collapse} ${isOpen? s.open : ""}`}>
                <div className={`${s.process__bottom} ${isOpen? s.open : ""}`}>
                    <p>{text}</p>
                </div>  
            </div>
        </div>
    </section>
     );
}
 
export default CardProcess;