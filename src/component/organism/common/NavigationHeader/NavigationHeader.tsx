import { logOut } from '@/action/authAction';
import HeaderLinkButton from '@/component/molecule/common/HeaderLinkButton/HeaderLinkButton';
import { headers } from 'next/headers';
import React from 'react';

export default function NavigationHeader() {
    const currentUrlPath = headers().get('x-url');
    const isHome = currentUrlPath?.includes('/home');
    const linkList = [
        { title: '확언', href: isHome ? '/home/affirmation' : '/affirmation/transcribe', isCurrent: !!currentUrlPath?.includes('/affirmation') },
        { title: '비전보드', href: isHome ? '/home/board' : '/board/exhibit', isCurrent: !!currentUrlPath?.includes('/board') },

    ];
  return (
    <header className="flex h-[5rem] gap-[4px] w-[100vw] relative items-end justify-center bg-grn-300">
      {linkList.map((link, i) => <HeaderLinkButton key={i} href={link.href} isCurrent={link.isCurrent} title={link.title} />)}
      <form className="absolute right-[20rem] block">
        <button type="submit" formAction={logOut}>
          <div className="material-icons">logout</div>
        </button>
      </form>
    </header>
  );
}
