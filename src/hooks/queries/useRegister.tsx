import {register} from 'api/user-api';
import {useMutation} from 'react-query';

export default function useRegister() {
  const {mutate, isLoading, error} = useMutation(register);

  return {mutate, isLoading, error};
}
