import { useEffect } from 'react';
import { logout } from '../store/actions/authActions';
import { useDispatch } from 'react-redux';

const LogoutScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    props.navigation.navigate('Login');
  });
  return null;
};

export default LogoutScreen;
