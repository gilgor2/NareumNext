'use client';

import React, { ReactNode } from 'react';
import { NoticeContext, useNotice } from './hook';
import NoticeDispenser from './NoticeDispenser';

export default function NoticeContextProvider({ children }:{ children:ReactNode }) {
	const noticeStore = useNotice();
	return (
  <NoticeContext.Provider value={noticeStore}>
    {children}
    <NoticeDispenser />
  </NoticeContext.Provider>
	);
}
