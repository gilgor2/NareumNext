'use server';

import { Board } from '@/domain/board';
import { BoardImage } from '@/type/board';
import { revalidatePath } from 'next/cache';

export async function getBoardData() {
  const board = new Board();

  return board.getBoardData();
}

export async function addNewBoardImage(pic: BoardImage) {
  const board = new Board();

  await board.addImage(pic);

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
