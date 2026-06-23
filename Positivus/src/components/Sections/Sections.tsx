import s from './Section.module.scss';

interface SectionsProps {
    title: string;
    subtitle: string;
    width?: string;
    pWidth: string;
    body: React.ReactNode;
}


const Sections: React.FC<SectionsProps> = ({ title, subtitle, width = '700px', pWidth, body}) => {
    return (
         <>
        <section className={s.sections}>
            <div className={s.sections__wrapper}>
                <div className={s.sections__top} style={{maxWidth: width}}>
                    <h2>{title}</h2>
                    <p style={{maxWidth: pWidth}}>{subtitle}</p>
                </div>
                <div className={s.sections__body}>{body}</div>
            </div>
        </section>
    </> 
    );
}
 
export default Sections;