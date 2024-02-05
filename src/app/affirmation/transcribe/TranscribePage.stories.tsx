import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import * as action from '@/action/affirmationAction';

import { Suspense } from 'react';
import { createMock } from 'storybook-addon-module-mock';
import TranscribePage from './page';

const meta: Meta<typeof TranscribePage> = {
 title: 'affirmation/transcribe/TranscribePage.stories.tsx',
 tags: ['autodocs'],
 component: TranscribePage,
};

export default meta;
type Story = StoryObj<typeof TranscribePage>;

const mockedGetPromiseList = createMock(action, 'getPromiseList');
mockedGetPromiseList.mockResolvedValue([{ text: 'asd', transcribeCnt: 0, id: '2' }]);
const mockedCheckIsRecentTranscriptTimePassed = createMock(action, 'checkIsRecentTranscriptTimePassed');
mockedCheckIsRecentTranscriptTimePassed.mockResolvedValue(false);
export const Default: Story = {
  args: {
  },
  decorators: (Story) => (
    <Suspense>
      <Story />
    </Suspense>
),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

   // 2개의 promise를 미리 추가
	await userEvent.click(canvas.getAllByRole('button')[0]);
	await userEvent.click(canvas.getAllByRole('button')[0]);

	// test실행
	await userEvent.type(canvas.getAllByRole('textbox')[0], 'promise');
	await userEvent.click(canvas.getAllByRole('button')[1]);

	await userEvent.keyboard('promise');

	await expect(canvas.getAllByRole('textbox')[0]).toHaveValue('promise');
  },
};
