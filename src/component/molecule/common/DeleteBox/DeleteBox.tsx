import React, { ReactNode } from 'react';

type Props = {
    onClickDelete?:()=>void;
    children:ReactNode;
    className?:string
};
export default function DeleteBox({ onClickDelete = () => {}, children, className }:Props) {
  return (
    <div className={`relative ${className}`}>
      <button type="button" className="text-bgg material-icon absolute right-[-1rem] top-[-1rem]  bg-redd rounded-md" onClick={onClickDelete}>delete</button>
      {children}
    </div>
  );
}
