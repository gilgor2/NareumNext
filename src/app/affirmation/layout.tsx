import NoticeContextProvider from '@/component/organism/common/NoticeContextProvider';

export default function Affirmationlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <NoticeContextProvider>
      <div className="flex  h-[100vh] items-center justify-center">
        { children }
      </div>
    </NoticeContextProvider>
  );
}
