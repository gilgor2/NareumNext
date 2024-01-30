import type { Meta, StoryObj } from '@storybook/react';

import DeleteButton from './DeleteButton';

const meta: Meta<typeof DeleteButton> = {
	title: 'component/atom/DeleteButton/DeleteButton.stories.tsx',
	tags: ['autodocs'],
	component: DeleteButton,
};

export default meta;
type Story = StoryObj<typeof DeleteButton>;

export const Default: Story = {
	args: {},
};
