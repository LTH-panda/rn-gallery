import {useNavigation} from '@react-navigation/native';
import {applyToken} from 'api/client';
import {login} from 'api/user-api';
import {RootStackNavigationProp} from 'navigations/RootStack/type';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import authStorage from 'storages/authStorage';
import {clearForm} from 'stores/form';
import {setUser} from 'stores/user';

export default function useLogin() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useDispatch();
  const {mutate, isLoading, error} = useMutation(login, {
    onSuccess: res => {
      dispatch(setUser(res.user));
      navigation.navigate('MainTab');
      applyToken(res.jwt);
      authStorage.set(res);
      dispatch(clearForm());
    },
  });

  return {mutate, isLoading, error};
}
