import {Text, TextInput} from 'react-native';
import React from 'react';
import styleUtils from 'styles/style-utils';
import {styles, WriteFormView} from './style';

function WriteForm() {
  return (
    <WriteFormView style={[styleUtils.fullScreen]}>
      <Text style={[styleUtils.mgBot]}>제목</Text>
      <TextInput
        style={[styles.styledInput, styleUtils.boxShadow, styleUtils.mgBot]}
      />
      <Text style={[styleUtils.mgBot]}>글</Text>
      <TextInput
        style={[
          styles.styledInput,
          styleUtils.boxShadow,
          styleUtils.mgBot,
          {flex: 1, paddingTop: 16},
        ]}
        multiline
      />
    </WriteFormView>
  );
}

export default WriteForm;
