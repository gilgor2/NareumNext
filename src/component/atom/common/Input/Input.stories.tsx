import React from 'react';
import { jest, expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { sleep } from '../../../../utility/utility';
import Input from './Input';

const meta: Meta<typeof Input> = {
	title: 'component/atom/common/Input/Input.stories.tsx',
	tags: ['autodocs'],
	component: Input,

	argTypes: {
		setstate: { action: 'onChange' },
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const StateSameAsValue: Story = {
	args: {
		setstate: jest.fn(),
		placeholder: 'StateSameAsValue',
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('StateSameAsValue');
		await userEvent.type(input, 'ha');
		await expect(args.setstate).toBeCalledWith('h');
		await expect(args.setstate).toBeCalledWith('ha');
	},
};

export const Debouncer: Story = {
	args: {
		setstate: jest.fn(),
		placeholder: 'Debouncer',
		debounceTime: 300,
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Debouncer');
		await userEvent.type(input, 'ha');
		await sleep(400);
		await expect(args.setstate).toBeCalledWith('ha');
	},
};

export const OriginalStateShown: Story = {
	args: { state: 'hello' },
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByDisplayValue('hello')).toBeInTheDocument();
	},
};
