'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  textStyles,
  iconRight,
  iconLeft,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles} ${textStyles}`}
      onClick={handleClick}
    >
      {iconLeft && (
        <div className='relative w-6 h-6'>
          <Image
            src={iconLeft}
            alt='arrow left'
            fill
            className='object-contain'
          />
        </div>
      )}
      <span className={`flex-1`}>{title}</span>
      {iconRight && (
        <div className='relative w-6 h-6'>
          <Image
            src={iconRight}
            alt='arrow right'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};
export default CustomButton;
