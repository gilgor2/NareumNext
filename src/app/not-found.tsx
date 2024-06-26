import { redirect } from 'next/navigation';
import React from 'react';

export default function NotFound() {
  redirect('/affirmation/transcribe');
  return <div>not-found</div>;
}
