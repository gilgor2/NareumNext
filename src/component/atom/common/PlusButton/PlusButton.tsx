import React from 'react';

export default function PlusButton({ className = '', onClick = () => {} }
:{ onClick?:()=>void, className?:string }) {
  return (
    <div
      className={`${className} material-icons cursor-pointer text-tg text-center align-middle`}
      role="button"
      onClick={onClick}
    >
      add
    </div>
  );
}
