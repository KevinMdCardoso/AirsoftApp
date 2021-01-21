/* eslint-disable no-alert */
import React, {useReducer, useState, useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, LoadingIcon, Text} from './styles';

import EndPoints from '../../services/endPoints';

export default () => {
  return (
    <Container>
      <Text>Desenvolvendo HOME</Text>
      <LoadingIcon size="large" color="#fff" />
    </Container>
  );
};
