import React, { ReactNode } from 'react';

type Props = {
  onClickDelete?: () => void;
  children: ReactNode;
  className?: string;
};
export default function DeleteBox({ onClickDelete = () => {}, children, className }: Props) {
  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className="material-icon absolute right-[-1rem] top-[-1rem] rounded-md  bg-redd text-bgg"
        onClick={onClickDelete}
      >
        delete
      </button>
      {children}
    </div>
  );
}
