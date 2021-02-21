import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TwemojiExample } from './Twemoji';

export default {
  title: 'Twemoji',
  component: TwemojiExample
} as Meta;

const Template: Story = () => <TwemojiExample />;

export const Default = Template.bind({});
