import React from 'react';

export default function CheckSign({ className = '' }: { className?: string }) {
  return (
    <div
      data-testid="checkSign"
      className={`material-icons-outlined material-icons animate-appearFromBottom text-tg ${className}`}
    >
      check_circle
    </div>
  );
}
