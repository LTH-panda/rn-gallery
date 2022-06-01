import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'stores';
import {changeEmail, changePassword, changeUsername} from 'stores/form';

export default function useAuthForm() {
  const {username, email, password} = useSelector(
    (state: RootState) => state.form,
  );
  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    value => dispatch(changeUsername(value)),
    [],
  );

  const onChangeEmail = useCallback(value => dispatch(changeEmail(value)), []);
  const onChangePassword = useCallback(
    value => dispatch(changePassword(value)),
    [],
  );

  return {
    username,
    email,
    password,
    onChangeUsername,
    onChangeEmail,
    onChangePassword,
  };
}
