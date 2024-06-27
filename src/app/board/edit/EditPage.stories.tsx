import type { Meta, StoryObj } from '@storybook/react';
import { getByDisplayValue, userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { http, HttpResponse } from 'msw';

import { DUMMY_BOARD_DATA, DUMMY_NAVER_IMAGE_LIST } from '@/utility/constants';
import { sleep } from '@/utility/utility';
import EditPage from './page';

const meta: Meta<typeof EditPage> = {
  title: 'board/edit/EditPage.stories.tsx',
  tags: ['autodocs'],
  component: EditPage,
};

export default meta;
type Story = StoryObj<typeof EditPage>;

const safeHandlers = [
  http.post(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board`, () => HttpResponse.json({})),
  http.delete(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board`, () => HttpResponse.json({})),
  http.delete(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/category`, () =>
    HttpResponse.json({}),
  ),
  http.put(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/category`, () => HttpResponse.json({})),
  http.post(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/storage`, () => HttpResponse.json({})),
  http.get(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/naver-image?searchText=카리나`, () =>
    HttpResponse.json(DUMMY_NAVER_IMAGE_LIST),
  ),
];

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/edit`, () =>
          HttpResponse.json(DUMMY_BOARD_DATA),
        ),
        ...safeHandlers,
      ],
    },
  },
};
export const AddCategory: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/edit`, () =>
          HttpResponse.json([]),
        ),
        ...safeHandlers,
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await sleep(1000);

    await userEvent.click(canvas.getAllByRole('button')[0]);

    await userEvent.type(canvas.getAllByDisplayValue('new!')[0], 'goal');

    await userEvent.type(canvas.getByPlaceholderText('이미지 검색'), 'goal');
    await sleep(1000);

    const firstImage = canvas.queryAllByAltText('img')[0] as HTMLImageElement;
    await userEvent.click(firstImage);

    await userEvent.click(canvas.getByText('x'));

    expect(canvas.getByText('new!goal')).toBeInTheDocument();

    const previewImage = canvas.getByText(
      (content, element) => element?.tagName.toLowerCase() === 'img',
    ) as HTMLImageElement;
    expect(previewImage?.srcset).toBe(firstImage.srcset);
  },
};
// export const EditCategory: Story = {
//   parameters: {
//     msw: {
//       handlers: [
//         http.post(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/edit`, () =>
//           HttpResponse.json(DUMMY_BOARD_DATA),
//         ),
//         // ...safeHandlers,
//       ],
//     },
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     await sleep(1000);

//     await userEvent.click(canvas.getAllByText('edit')[0]);

//     await userEvent.type(canvas.getAllByDisplayValue('운동')[0], '끝');

//     await userEvent.click(canvas.getByText('x'));
//     await sleep(1000);

//     expect(canvas.getByText('운동끝')).toBeInTheDocument();
//   },
// };
// export const DeleteCategory: Story = {
//   parameters: {
//     msw: {
//       handlers: [
//         http.post(`${process.env.NEXT_PUBLIC_ROUTER_URL}/board/edit`, () =>
//           HttpResponse.json(DUMMY_BOARD_DATA),
//         ),
//         ...safeHandlers,
//       ],
//     },
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     await sleep(1000);

//     await userEvent.click(canvas.getAllByText('edit')[0]);

//     await userEvent.click(canvas.getByText('"운동" 삭제하기'));

//     expect(canvas.queryByText('운동')).toBeNull();
//   },
// };
// export const DeleteImage: Story = {
//   parameters: {
//     msw: {
//       handlers: [
//         http.post(`${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/edit`, () =>
//           HttpResponse.json(DUMMY_BOARD_DATA),
//         ),
//         ...safeHandlers,
//       ],
//     },
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     await sleep(1000);

//     await userEvent.click(canvas.getAllByText('edit')[0]);

//     const firstDeleteButton = canvas.getAllByText('delete')[0];

//     await userEvent.click(firstDeleteButton);
//     expect(canvas.getAllByText('delete').length).toBe(5);
//   },
// };
