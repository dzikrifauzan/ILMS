import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
};
