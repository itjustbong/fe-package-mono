import React from 'react';

interface HelloProps {
  name: string;
  big?: boolean;
  onHello?: () => void;
}

const Hello = ({ name, big, onHello }: HelloProps) => {
  if (big) {
    return <h1 onClick={onHello}>안녕하세요, 쓩 딜리버리 입니다! {name}!</h1>;
  }
  return <p onClick={onHello}>안녕하세요, 쓩 딜리버리 입니다! {name}!</p>;
};

export default Hello;
