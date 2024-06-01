'use client';

import DeleteButton from '../../../atom/common/DeleteButton/DeleteButton';
import UnderlineContainer from '../../common/UnderlineContainer/UnderlineContainer';

type Props = {
	promise: string;
  promiseId:string;
  deletePromise:(id:string)=>void

};
export default function PromisePresenter({
    promise,
    promiseId,
    deletePromise,
}:Props) {
  const onDelete = (id: string) : React.MouseEventHandler<HTMLButtonElement> => () => {
    deletePromise(id);
	};
  return (
    <div className="relative flex h-max items-center justify-start gap-4">
      <UnderlineContainer disable>
        <div className="text-4">
          {promise}

        </div>
      </UnderlineContainer>
      <div className="w-[80px]" />
      <DeleteButton onClick={onDelete(promiseId)} className="absolute right-0 text-4" />

    </div>
  );
}
