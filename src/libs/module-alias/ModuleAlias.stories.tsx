import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ModuleAlias } from './ModuleAlias';

export default {
  title: 'Module Alias',
  component: ModuleAlias,
} as Meta;

const Template: Story = () => <ModuleAlias />;

export const Default = Template.bind({});
