import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon, { iconTypes } from './Icon';

export default {
  component: Icon,
  title: 'Ssung/Icon',
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

// 컴포넌트 props 넘기는 법 2가지.
// 하기와 같이 하면 전달하는 인자 값을 변경해보면서,
// 테스트 해볼 수 있음.
export const Primary = Template.bind({});
Primary.args = {
  icon: 'mark',
  color: 'red',
};

export const customSize = () => <Icon icon="mark" size="4rem" />;

export const customColor = () => <Icon icon="mark" color="red" />;

export const listOfIcons = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {/* iconTypes를 하기와 같이 사용할 수도 있음! */}
      {iconTypes.map((icon) => (
        <div key={icon}>
          <Icon icon={icon} />
          {icon}
        </div>
      ))}
    </div>
  );
};
