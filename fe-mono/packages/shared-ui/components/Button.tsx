import React from 'react';
import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const Button: FC<Props> = ({ children }) => {
  return <button style={{ backgroundColor: 'white' }}>{children}</button>;
};

export default Button;
