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
      className={`material-icons !flex cursor-pointer items-center justify-center text-tg ${className}`}
      role="button"
      onClick={onClick}
    >
      add
    </div>
  );
}
