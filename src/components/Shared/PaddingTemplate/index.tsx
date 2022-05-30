import React from 'react';
import {PaddingTemplateBlock} from './style';

type PaddingTemplateProps = {
  children?: React.ReactNode;
};

function PaddingTemplate({children}: PaddingTemplateProps) {
  return <PaddingTemplateBlock>{children}</PaddingTemplateBlock>;
}

export default PaddingTemplate;
