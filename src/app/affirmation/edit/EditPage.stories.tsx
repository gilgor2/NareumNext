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
			canvas.getByRole('textbox'),
			'promise',
		);

		await userEvent.click(canvas.getAllByRole('button')[canvas.getAllByRole('button').length - 2]);
		expect(canvas.getAllByTestId('deleteButton').length).toBe(1);
	},
};

export const DeletePromise: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// 다짐 추가
		await userEvent.type(
			canvas.getByRole('textbox'),
			'promise',
		);

		await userEvent.click(canvas.getAllByRole('button')[canvas.getAllByRole('button').length - 2]);
		await userEvent.click(
			canvas.getAllByTestId('deleteButton')[0],
		);

		expect(canvas.queryByTestId('deleteButton')).toBeNull();
	},
};

export const Focus: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// 다짐 추가
		await userEvent.keyboard('promise');

		await userEvent.keyboard('[Tab]');

		await userEvent.keyboard('[Enter]');

		expect(canvas.getAllByTestId('deleteButton').length).toBe(1);
	},
};
