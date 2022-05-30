import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export default function useGoBack() {
  const navigation = useNavigation();

  const navigateGoBack = useCallback(() => navigation.goBack(), []);

  return {navigateGoBack};
}
