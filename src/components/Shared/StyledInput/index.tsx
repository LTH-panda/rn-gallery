import React from 'react';
import {StyledInputBlock} from './style';

type StyledInputProps = {
  [attr: string]: any;
};

function StyledInput({...rest}: StyledInputProps) {
  return <StyledInputBlock {...rest} />;
}

export default StyledInput;
