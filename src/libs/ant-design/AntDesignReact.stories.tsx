import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AntDesignReactExample } from './AntDesignReact';

export default {
  title: 'Ant Design React',
  component: AntDesignReactExample
} as Meta;

const Template: Story = () => <AntDesignReactExample />;

export const Default = Template.bind({});
