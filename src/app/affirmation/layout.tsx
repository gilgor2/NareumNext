import NoticeContextProvider from '@/component/organism/common/NotificationBlockDispenser/NoticeContextProvider';

export default function Affirmationlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <NoticeContextProvider>
      <div className="flex  h-[100%] items-center justify-center">
        { children }
      </div>
    </NoticeContextProvider>
  );
}
