import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/type';
import {useCallback} from 'react';

export default function useNavigateAuth() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const navigateRegister = useCallback(
    () => navigation.navigate('RegisterStack'),
    [],
  );
  const navigateSignIn = useCallback(
    () => navigation.navigate('SignInStack'),
    [],
  );

  return {navigateRegister, navigateSignIn};
}
