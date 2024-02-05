import { checkIsRecentTranscriptTimePassed, getPromiseList } from '@/action/affirmationAction';
import { Promise } from '@/type/promise';

export default async function H() {
const promiseList = await getPromiseList() as Promise[];
const isTimePassed = await checkIsRecentTranscriptTimePassed();

  return (

    <>aafsda</>
  );
}
