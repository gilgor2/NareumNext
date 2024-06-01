import React, { ReactNode } from 'react';

type Props = {
    isOpen:boolean;
    openSelf?:()=>void;
    closeSelf?:()=>void;
    children?:ReactNode;
};
export default function ModalRight({
 isOpen, openSelf = () => {}, closeSelf = () => {}, children,
}:Props) {
    const className = `rounded-sm transition-all duration-1000 fixed right-0 bottom-0 h-[calc(100vh-5rem)] bg-bgg ${isOpen ? 'w-[40vw] p-10' : 'w-[16px]'}`;
  return (
    <div className={className}>
      {isOpen
        && (
        <>
          <button className="text-tg absolute top-10 left-[-1rem] text-[5rem]" type="button" onClick={closeSelf}>x</button>
          {children}
        </>
)}
    </div>
  );
}
