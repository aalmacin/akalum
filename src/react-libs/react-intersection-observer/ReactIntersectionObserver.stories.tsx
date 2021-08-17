import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ReactIntersectionObserver } from './ReactIntersectionObserver';

export default {
  title: 'React Intersection Observer',
  component: ReactIntersectionObserver
} as Meta;

const Template: Story = () => <ReactIntersectionObserver />;

export const Default = Template.bind({});
