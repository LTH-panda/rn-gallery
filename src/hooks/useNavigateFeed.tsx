import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from 'navigations/HomeStack/type';
import {useCallback} from 'react';

export default function useNavigateFeed() {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const navigatePost = useCallback(() => navigation.navigate('Post'), []);
  const navigateProfile = useCallback(() => navigation.navigate('Profile'), []);

  return {navigatePost, navigateProfile};
}
