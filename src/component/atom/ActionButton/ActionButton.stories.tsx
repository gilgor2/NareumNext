import type { Meta, StoryObj } from '@storybook/react';

import ActionButton from './ActionButton';

const meta: Meta<typeof ActionButton> = {
  title: 'component/atom/ActionButton/ActionButton.stories.tsx',
  tags: ['autodocs'],
  component: ActionButton,
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {},
};
