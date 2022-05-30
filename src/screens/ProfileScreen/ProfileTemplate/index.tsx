import {PaddingTeamplte} from 'components/Shared';
import {UserProfile} from 'components/User';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import ProfileHeader from '../ProfileHeader';

function ProfileTemplate() {
  return (
    <SafeAreaView style={[styleUtils.fullScreen, styleUtils.bgWhite]}>
      <ProfileHeader name="profile" />
      <PaddingTeamplte>
        <UserProfile />
      </PaddingTeamplte>
    </SafeAreaView>
  );
}

export default ProfileTemplate;
