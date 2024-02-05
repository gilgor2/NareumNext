'use client';

import React, { ReactNode } from 'react';
import { NoticeContext, useNotice } from './NotificationBlockDispenser/hook';
import NoticeDispenser from './NotificationBlockDispenser/NoticeDispenser';

export default function NoticeContextProvider({ children }:{ children:ReactNode }) {
	const noticeStore = useNotice();

	return (
  <NoticeContext.Provider value={noticeStore}>
    {children}
    <NoticeDispenser />
  </NoticeContext.Provider>
	);
}
