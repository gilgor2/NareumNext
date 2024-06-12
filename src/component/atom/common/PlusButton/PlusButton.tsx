import React from 'react';

export default function PlusButton({
  className = '',
  onClick = () => {},
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div
      className={`${className} material-icons cursor-pointer text-center align-middle text-tg`}
      role="button"
      onClick={onClick}
    >
      add
    </div>
  );
}
