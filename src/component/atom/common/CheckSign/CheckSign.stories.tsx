import type { Meta, StoryObj } from '@storybook/react';

import CheckSign from './CheckSign';

const meta: Meta<typeof CheckSign> = {
	title: 'component/atom/CheckSign/CheckSign.stories.tsx',
	tags: ['autodocs'],
	component: CheckSign,
};

export default meta;
type Story = StoryObj<typeof CheckSign>;

export const Default: Story = {
	args: {},
};
