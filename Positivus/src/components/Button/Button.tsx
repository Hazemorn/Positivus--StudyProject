import s from "./Button.module.scss";

interface ButtonProps {
  title: string;
  max_width?: string;
  bgColor?: string;
}

const Button = ({ title, bgColor = 'var(--dark)', max_width =' 280px' }: ButtonProps) => {
  return (
    <button className={s.button__template} style={{ backgroundColor: bgColor, maxWidth:max_width }}>
      {title}
    </button>
  );
};

export default Button;
