import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

import DropDownBox from './DropDownBox';

const files = [
    new File(['hello'], 'hello.png', { type: 'image/png' }),
    new File(['there'], 'there.png', { type: 'image/png' }),
  ];

const meta: Meta<typeof DropDownBox> = {
 title: 'component/molecule/common/DropDownBox/DropDownBox.stories.tsx',
 tags: ['autodocs'],
 component: DropDownBox,
};

export default meta;
type Story = StoryObj<typeof DropDownBox>;

export const Default: Story = {
  args: {
  },
  play: async ({ canvasElement }) => {

  },
};

export const Upload: Story = {
    args: {
        setstate: jest.fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const input = await canvas.getByTestId('dropdowninput');
        await userEvent.upload(input, files[0]);
        await expect(args.setstate).toBeCalledWith(files[0]);
    },
  };

export const MultipleUploadUpload: Story = {
    args: {
        setstate: jest.fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);

        const input = await canvas.getByTestId('dropdowninput');
        await userEvent.upload(input, files[0]);
        await expect(args.setstate).toBeCalledWith(files[0]);
        await userEvent.upload(input, files[1]);
        await expect(args.setstate).toBeCalledWith(files[1]);
    },
  };
