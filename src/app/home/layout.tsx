'use server';

import { logInWithKakao } from '@/action/authAction';

export default async function HomePage({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <div className="p-48 h-[calc(100%-32rem)]">
          {children}
        </div>
        <div className="h-[32rem] flex items-end justify-between p-48 w-[100%]">
          <div className="">
            <div className="flex items-end">
              <div className="text-4xl font-semibold">마음먹기</div>
              <div className="ml-5" />
              <div className="text-9xl font-bold">나름</div>
            </div>
            <div className="mt-10" />
            <div className="text-[1.5rem] ">
              순간의 열정을 잃지 않도록
              <br />
              내가 어떤 사람인지 잊지 않도록.
              <br />
              우리가 도와드릴게요. 모든 건 마음먹기 나름이니까요.
            </div>
          </div>

          <form>
            <button formAction={logInWithKakao} type="submit" className="rounded-3xl bg-[#FAE100] text-[#391B1B] font-semibold text-4xl py-14 px-24">카카오로 로그인하기</button>

          </form>
        </div>
      </>

    );
  }
