import React, { ReactNode, MouseEventHandler } from 'react';
import './Button.scss';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', className = '', onClick = () => {} }) => {
  return (
    <button className={`c__Button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
