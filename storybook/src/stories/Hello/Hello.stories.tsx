import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Hello from './Hello';
// @ts-ignore
import mdx from './Hello.mdx';

export default {
  title: 'Ssung/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  // decorators: [withKnobs], // 애드온 적용
  // Docs 탭에서 컴포넌트에 대한 부제목을 추가하는 옵션
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    // mdx 파일을 통한 docs 커스텀
    // 대부분의 경우에 자동으로 생성되는 docs로도 충분함
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

// 컴포넌트 props 넘기는 법 2가지.
// 하기와 같이 하면 전달하는 인자 값을 변경해보면서,
// 테스트 해볼 수 있음.
export const HelloWithArgs = Template.bind({});
HelloWithArgs.args = {
  name: 'hello',
};

export const HelloWithComponent = () => {
  return <Hello name={'이름'} big />;
};
