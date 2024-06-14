import Link from 'next/link';
import React from 'react';

type Props = { title: string; href: string; isCurrent: boolean };
export default function HeaderLinkButton({ title, href, isCurrent }: Props) {
  return (
    <Link
      href={href}
      className={`hover:bg-grn-100 h-[80%] w-[8rem] rounded-t-[3rem] pt-1 text-center text-2xl shadow-inner ${isCurrent ? 'bg-grn-200' : 'bg-inherit'}`}
    >
      {title}
    </Link>
  );
}
