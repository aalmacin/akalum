import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Clamp } from './Clamp';

export default {
  title: 'Clamp',
  component: Clamp,
} as Meta;

const Template: Story = () => <Clamp />;

export const Default = Template.bind({});
