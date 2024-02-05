import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import PromisePresenter from './PromisePresenter';

const meta: Meta<typeof PromisePresenter> = {
 title: 'component/molecule/x-affirmation/PromisePresenter/PromisePresenter.stories.tsx',
 tags: ['autodocs'],
 component: PromisePresenter,
};

export default meta;
type Story = StoryObj<typeof PromisePresenter>;

export const Default: Story = {
  args: {
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId(''), '');

    await userEvent.click(canvas.getByRole(''));

    await expect(
      canvas.getByText(
        'Everything is perfect',
      ),
    ).toBeInTheDocument();
  },
};
