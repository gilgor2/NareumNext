import Link from 'next/link';
import React from 'react';

type Props = { title:string, href:string, isCurrent:boolean };
export default function HeaderLinkButton({ title, href, isCurrent }:Props) {
    return (
      <Link href={href} className={`w-[8rem] h-[80%] rounded-t-[3rem] text-2xl text-center pt-1 shadow-inner hover:bg-grn-100 ${isCurrent ? 'bg-grn-200' : 'bg-inherit'}`}>
        {title}
      </Link>
    );
}
