import type { Meta, StoryObj } from '@storybook/react';

import MouseDodgingSpan from './MouseDodgingSpan';

const meta: Meta<typeof MouseDodgingSpan> = {
	title: 'component/atom/MouseDodgingSpan/MouseDodgingSpan.stories.tsx',
	tags: ['autodocs'],
	component: MouseDodgingSpan,
};

export default meta;
type Story = StoryObj<typeof MouseDodgingSpan>;

export const Default: Story = {
	args: { text: 'hello', className: 'text-[10px]' },
};
