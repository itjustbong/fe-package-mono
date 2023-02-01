import React from 'react';

interface HelloProps {
  /** 이름 */
  name: string;
  /** 타이틀 크게 */
  big?: boolean;
  /** 이렇게 주석을 달면 Props의 Description에서 보여집니다 */
  onHello?: () => void;
}

// 컴포넌트 바로 위 주석은 Docs에서 컴포넌트 상단에 추가되는 설명
/**
 * 안녕하세요, 쓩 딜리버리 입니다 라는 컴포넌트입니다.
 * - props 값으로 name, big, onHello 를 인자로 받습니다.
 */
const Hello = ({ name, big = false, onHello }: HelloProps) => {
  if (big) {
    return <h1 onClick={onHello}>안녕하세요, 쓩 딜리버리 입니다! {name}!</h1>;
  }
  return <p onClick={onHello}>안녕하세요, 쓩 딜리버리 입니다! {name}!</p>;
};

export default Hello;
