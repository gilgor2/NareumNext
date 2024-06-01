import ModalRight from '@/component/molecule/common/ModalRight/ModalRight';
import React from 'react';
import DropDownBox from '@/component/molecule/common/DropDownBox/DropDownBox';
import PictureSearchSection from '../PictureSearchSection/PictureSearchSection';

type Props = {
    isOpen:boolean;
    openSelf?:()=>void;
    closeSelf?:()=>void;
    onClickPicture:(picture:string)=>void;
    onDropImage:(image:string | File)=>void
};
export default function PictureAddModal({
    isOpen, openSelf, closeSelf, onClickPicture, onDropImage,
   }:Props) {
  return (
    <ModalRight isOpen={isOpen} openSelf={openSelf} closeSelf={closeSelf}>
      <PictureSearchSection onClickPicture={onClickPicture} />
      <DropDownBox setstate={onDropImage} />
    </ModalRight>
  );
}
