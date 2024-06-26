import {
  deleteImage,
  getBoardData,
  insertBoardImage,
  deleteCategory,
  addFileToBoardStorage,
} from '@/action/boardAction';
import { CategoryObj } from '@/type/board';
import { MAX_IMAGE_PER_CATEGORY } from '@/utility/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useBoardEditPageState = () => {
  const [boardData, setboardData] = useState<CategoryObj[]>([]);
  const [isPopup, setisPopup] = useState(false);
  const [targetCategory, settargetCategory] = useState('');

  useEffect(() => {
    const setBoardDataState = async () => {
      const dataFromDB = await getBoardData();
      setboardData(dataFromDB);
    };
    setBoardDataState();
  }, []);

  const openPopup = (category: string) => {
    setisPopup(true);
    settargetCategory(category);
  };
  const closePopup = () => {
    setisPopup(false);
    settargetCategory('');
  };

  const insertImageFromDB = async (src: string) => {
    await insertBoardImage(src, targetCategory);
  };

  const deleteImageFromDB = async (src: string) => {
    await deleteImage(src);
  };
  const deleteCategoryFromDB = async (category: string) => {
    await deleteCategory(category);
  };
  const editCategoryFromDB = async (originalCategory: string, newCategory: string) => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/category`, {
      data: { originalCategory, newCategory },
    });
  };
  const insertFileToStorage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await addFileToBoardStorage(file);
    if (response === -1 || response === null) {
      return -1;
    }
    const src = response.path;
    return `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_ENDPOINT}/${src}`;
  };
  const addImageTo = (newSrc: string) => {
    const categoryIndex = boardData.findIndex((obj) => obj.name === targetCategory);
    if (categoryIndex > -1) {
      const { srcArr } = boardData[categoryIndex];
      if (srcArr.length < MAX_IMAGE_PER_CATEGORY) {
        setboardData((state) => {
          const tmp = structuredClone(state);
          tmp[categoryIndex].srcArr = [...srcArr, newSrc];
          return tmp;
        });
      }
      insertImageFromDB(newSrc);
    }
  };
  const addFileTo = async (file: string | File) => {
    if (typeof file !== 'string') {
      const src = await insertFileToStorage(file);
      return src;
    }
    return '-1';
  };
  const dropImageTo = async (file: string | File) => {
    const src = await addFileTo(file);
    if (src === -1) {
      return -1;
    }
    addImageTo(src);
    return 0;
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
    deleteImageFromDB(src);
  };
  const editCategory = (text: string) => {
    setboardData((state) => {
      const tmp = structuredClone(state);
      const originalCategory = tmp.find((obj) => obj.name === targetCategory);
      if (originalCategory) {
        originalCategory.name = text;
      }
      return tmp;
    });
    settargetCategory(text);
    if (text) {
      editCategoryFromDB(targetCategory, text);
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
    setisPopup(false);
    settargetCategory('');
    deleteCategoryFromDB(category);
  };
  const addNewCategory = () => {
    setboardData((state) => {
      const tmp = [...state];
      const newObj: CategoryObj = { name: 'new!', srcArr: [] };
      tmp.push(newObj);

      return tmp;
    });
    settargetCategory('new!');
    setisPopup(true);
  };
  return {
    boardData,
    targetCategory,
    isPopup,
    openPopup,
    closePopup,

    addImageTo,
    dropImageTo,
    deleteImageFrom,
    deleteCategory,
    editCategory,
    addNewCategory,
  };
};
