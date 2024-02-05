import { expect, jest } from '@storybook/jest';

import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import EditPage from './page';

const meta: Meta<typeof EditPage> = {
	title: 'affirmation/edit/EditPage.stories.tsx',
	tags: ['autodocs'],
	component: EditPage,
};

export default meta;
type Story = StoryObj<typeof EditPage>;

export const Default: Story = {
	args: {},
};

export const AddPromise: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// 다짐 추가
		await userEvent.type(
			canvas.getAllByRole('textbox')[canvas.getAllByRole('textbox').length - 1],
			'promise',
		);
		const prevLength = canvas.getAllByRole('textbox').length;

		await userEvent.click(canvas.getAllByRole('button')[canvas.getAllByRole('button').length - 1]);

		await expect(canvas.getAllByRole('textbox').length).toBe(prevLength + 1);
	},
};

export const DeletePromise: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// 다짐 추가
		await userEvent.type(
			canvas.getAllByRole('textbox')[canvas.getAllByRole('textbox').length - 1],
			'promise',
		);

		await userEvent.click(canvas.getAllByRole('button')[canvas.getAllByRole('button').length - 1]);
		const prevLength = canvas.getAllByRole('textbox').length;
		// 다짐 삭제
		await userEvent.click(
			canvas.getAllByTestId('deleteButton')[0],
		);

		await expect(canvas.getAllByRole('textbox').length).toBe(prevLength - 1);
	},
};

export const Focus: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// 다짐 추가
		await userEvent.keyboard('promise');
		const prevLength = canvas.getAllByRole('textbox').length;

		await userEvent.keyboard('[Tab]');

		await userEvent.keyboard('[Enter]');

		await expect(canvas.getAllByRole('textbox').length).toBe(prevLength + 1);
	},
};
