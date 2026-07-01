import s from "./Button.module.scss";

interface ButtonProps {
  title: string;
  max_width?: string;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ title, bgColor = 'var(--dark)', max_width, color ='var(--white)', onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={s.button__template} style={{ backgroundColor: bgColor, maxWidth:max_width, color: color }}>
      {title}
    </button>
  );
};

export default Button;
