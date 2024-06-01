import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import * as action from '@/action/affirmationAction';

import { Suspense } from 'react';
import { createMock } from 'storybook-addon-module-mock';
import { sleep } from '@/utility/utility';
import TranscribePage from './page';

const meta: Meta<typeof TranscribePage> = {
 title: 'affirmation/transcribe/TranscribePage.stories.tsx',
 tags: ['autodocs'],
 component: TranscribePage,
};

export default meta;
type Story = StoryObj<typeof TranscribePage>;

const mockedGetPromiseList = createMock(action, 'getPromiseList');
mockedGetPromiseList.mockResolvedValue([{ text: 'promise1', transcribeCnt: 0, id: '2' }]);
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

	// test실행
  await sleep(1000);
  await userEvent.keyboard('promise1');

  await userEvent.keyboard('[Enter]');

  await sleep(1000);

	await expect(canvas.getByText('check_circle')).toBeInTheDocument();
  },
};
