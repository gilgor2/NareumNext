'use server';

import { Board } from '@/domain/board';
import { BoardImage } from '@/domain/boardImage';
import { revalidatePath } from 'next/cache';
import { addImageFileToStorage } from '@/db/boardDB';

export async function getBoardData() {
  const board = new Board();
  const boardData = await board.getBoardData();
  return boardData;
}

export async function insertBoardImage(src: string, tag: string) {
  const board = new Board();

  await board.addImage(new BoardImage(src, tag));
  revalidatePath('/board', 'page');
}

export async function deleteImage(src: string) {
  const board = new Board();
  await board.deleteImage(src);
  revalidatePath('/board', 'page');
}

export async function deleteCategory(category: string) {
  const board = new Board();
  await board.deleteCategory(category);
  revalidatePath('/board', 'page');
}

export async function editCategory(original: string, newCategory: string) {
  const board = new Board();
  await board.editCategory(original, newCategory);
  revalidatePath('/board', 'page');
}

export async function addFileToBoardStorage(file: File) {
  const response = await addImageFileToStorage(file);
  if (response === -1) {
    return -1;
  }
  return response.data;
}
