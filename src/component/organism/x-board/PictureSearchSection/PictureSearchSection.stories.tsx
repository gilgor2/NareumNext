import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { HttpResponse, http } from 'msw';
import { DUMMY_NAVER_IMAGE_LIST } from '@/utility/constants';
import { sleep } from '@/utility/utility';
import PictureSearchSection from './PictureSearchSection';

const meta: Meta<typeof PictureSearchSection> = {
  title: 'component/organism/x-board/PictureSearchSection/PictureSearchSection.stories.tsx',
  tags: ['autodocs'],
  component: PictureSearchSection,
};

export default meta;
type Story = StoryObj<typeof PictureSearchSection>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement);
  },
};
const naverHandler = http.get(
  `${process.env.NEXT_PUBLIC_API_ROUTER_URL}/board/naver-image?searchText=카리나`,
  () => HttpResponse.json(DUMMY_NAVER_IMAGE_LIST),
);
export const Search: Story = {
  parameters: {
    msw: {
      handlers: [naverHandler],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByPlaceholderText('이미지 검색'), 'goal');
    await sleep(1000);

    await expect(canvas.queryAllByAltText('img')[0]).toBeInTheDocument();
  },
};
