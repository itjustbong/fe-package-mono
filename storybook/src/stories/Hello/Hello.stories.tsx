import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Hello from './Hello';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Ssung/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

// 컴포넌트 props 넘기는 법 2가지
export const HelloWithArgs = Template.bind({});
HelloWithArgs.args = {
  name: 'hello',
};

// @storybook/addon-knobs 를 통해 각종 타입들의 props들이
// 이벤트에 반응하여 변경될 수 있음
export const HelloWithComponent = () => {
  const big = boolean('big', false);
  const name = text('name', 'Storybook');
  return <Hello name={name} big={big} />;
};
