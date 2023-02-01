import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Dialog from './Dialog';

export default {
  title: 'Ssung/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      // docs 탭에서 박스 영역내에서 모달 창이 열리도록
      inlineStories: false,
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '결제 성공',
  description: '결제가 성공적이야',
  visible: true,
};

export const customContent = () => {
  return (
    <Dialog visible={true} hideButtons>
      Custom Content
    </Dialog>
  );
};
