import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Hello from './Hello';

export default {
  title: 'Ssung/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

// 컴포넌트 props 넘기는 법 2가지
export const HelloWithArgs = Template.bind({});
HelloWithArgs.args = {
  name: 'hello',
};

export const HelloWithComponent = () => <Hello name="Storybook" big />;
