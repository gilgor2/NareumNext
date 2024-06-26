import {
  deleteImage,
  getBoardData,
  deleteCategory as deleteCategoryAction,
  addFileToBoardStorage,
  addNewBoardImage,
  editCategory as editCategoryAction,
} from '@/action/boardAction';
import { CategoryObj } from '@/type/board';
import { MAX_IMAGE_PER_CATEGORY } from '@/utility/constants';
import { useEffect, useState } from 'react';

export const useBoardEditPageState = () => {
  const [boardData, setboardData] = useState<CategoryObj[]>([]);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [targetCategory, settargetCategory] = useState('');

  const initializeBoardData = async () => {
    setboardData(await getBoardData());
  };
  useEffect(() => {
    initializeBoardData();
  }, []);

  const openModal = (category: string) => {
    setisModalOpen(true);
    settargetCategory(category);
  };
  const closeModal = () => {
    setisModalOpen(false);
    settargetCategory('');
  };

  const addImageTo = (newSrc: string) => {
    const targetCategoryI = boardData.findIndex((obj) => obj.name === targetCategory);
    if (targetCategoryI > -1) {
      const { srcArr } = boardData[targetCategoryI];
      if (srcArr.length < MAX_IMAGE_PER_CATEGORY) {
        setboardData((state) => {
          const tmp = structuredClone(state);
          tmp[targetCategoryI].srcArr = [...srcArr, newSrc];
          return tmp;
        });
      }

      addNewBoardImage(newSrc, targetCategory); // serverAction
    }
  };

  const addFileToStorage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const src = await addFileToBoardStorage(formData);

    if (src) {
      return `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_ENDPOINT}/${src}`;
    }
    return null;
  };
  const dropImageTo = async (file: string | File) => {
    if (typeof file !== 'string') {
      const src = await addFileToStorage(file);
      if (src) {
        addImageTo(src);
      }
    }
  };

  const deleteImageFrom = (src: string) => {
    setboardData((state) => {
      const categoryIndex = state.findIndex((obj) => obj.name === targetCategory);
      if (categoryIndex > -1) {
        const tmp = structuredClone(state);
        const category = tmp[categoryIndex];
        const tmpSrcArr = [...category.srcArr];
        const targetIndex = tmpSrcArr.findIndex((str) => str === src);
        if (targetIndex > -1) {
          tmpSrcArr.splice(targetIndex, 1);
        }
        category.srcArr = tmpSrcArr;
        return tmp;
      }

      return state;
    });
    deleteImage(src); // serverAction
  };

  const editCategory = (text: string) => {
    setboardData((state) => {
      const tmp = structuredClone(state);
      const originalCategoryObj = tmp.find((obj) => obj.name === targetCategory);
      if (originalCategoryObj) {
        originalCategoryObj.name = text;
      }
      return tmp;
    });

    settargetCategory(text);
    if (text) {
      editCategoryAction(targetCategory, text);
    }
  };

  const deleteCategory = (category: string) => {
    setboardData((state) => {
      const tmp = [...state];
      const delIndex = tmp.findIndex((obj) => obj.name === category);
      if (delIndex > -1) {
        tmp.splice(delIndex, 1);

        return tmp;
      }
      return state;
    });

    setisModalOpen(false);
    settargetCategory('');

    deleteCategoryAction(category);
  };

  const addNewCategory = () => {
    setboardData((state) => [...state, { name: 'new!', srcArr: [] }]);
    settargetCategory('new!');
    setisModalOpen(true);
  };

  return {
    boardData,
    targetCategory,

    isModalOpen,
    openModal,
    closeModal,

    addImageTo,
    dropImageTo,
    deleteImageFrom,
    deleteCategory,
    editCategory,
    addNewCategory,
  };
};
