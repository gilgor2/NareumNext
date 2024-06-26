import Input from '@/component/atom/common/Input/Input';
import React from 'react';

type Props = {
  category: string;
  setcategory: (str: string) => void;
};
export default function CategoryNameinput({ category, setcategory }: Props) {
  return (
    <div className="py-1rem flex items-center justify-between">
      <h1 className="border-b-2 border-b-tg pb-8 text-3xl">
        <Input
          state={category}
          setstate={setcategory}
          placeholder="주제를 입력해주세요"
          debounceTime={400}
        />
      </h1>
    </div>
  );
}
