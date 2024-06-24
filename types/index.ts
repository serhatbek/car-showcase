import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  btnType?: 'submit' | 'button';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
