import React from 'react';
import {HeaderBlock} from './style';

type HeaderProps = {
  children?: React.ReactNode;
};

function Header({children}: HeaderProps) {
  return <HeaderBlock>{children}</HeaderBlock>;
}

export default Header;
