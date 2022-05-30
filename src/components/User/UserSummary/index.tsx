import {Text} from 'react-native';
import React from 'react';
import styleUtils from 'styles/style-utils';
import {UserSummaryView} from './style';

function UserSummary() {
  return (
    <UserSummaryView>
      <Text style={[styleUtils.h2, styleUtils.mgBot]}>name</Text>
      <Text style={[styleUtils.text]}>info</Text>
    </UserSummaryView>
  );
}

export default UserSummary;
