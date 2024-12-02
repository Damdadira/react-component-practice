import React from 'react';
import Counter from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: { onIncrease: { action: 'clicked' }, onDecrease: { action: 'clicked' } }
}

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});