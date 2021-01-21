import React, {useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {LoadingIcon, Background} from './styles';
import EndPoints from '../../services/endPoints';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const remote = '../../assets/Preload.jpg';

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const json = await EndPoints.checkToken(token);
        if (json.token) {
          await AsyncStorage.setItem('token', json.token);

          userDispatch({
            type: 'setAvatar',
            payload: {avatar: json.avatar},
          });
          navigation.reset({
            routes: [
              {
                name: 'Home',
              },
            ],
          });
        } else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Background source={require(remote)}>
      {/* <LoadingIcon size="large" color="#000" /> */}
    </Background>
  );
};
