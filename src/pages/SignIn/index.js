/* eslint-disable no-alert */
import React, {useReducer, useState, useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

import {
  Container,
  InputArea,
  CustomButtom,
  CustomButtomText,
  SignMessageButtom,
  SignMessageButtomText,
  SignMessageButtomTextBold,
} from './styles';

import LogoInicial from '../../assets/logoInicial.svg';
import SignInput from '../../Components/SignInput';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import EmailIcom from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import EndPoints from '../../services/endPoints';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [
        {
          name: 'SignUp',
        },
      ],
    });
  };

  const handleSignClick = async () => {
    if (login !== '' && senha !== '') {
      const json = await EndPoints.Logar(login, senha);
      if (json.response) {
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
        alert('Email e/ou Senha errados.');
      }
    } else alert('Preencha os campos em tela.');
  };

  return (
    <Container>
      <LogoInicial width="100%" height="160" />
      <InputArea>
        <SignInput
          IconSvg={EmailIcom}
          placeholder="Digite seu Email"
          value={login}
          onChangeText={(t) => setLogin(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(e) => setSenha(e)}
          senha={true}
        />
        <CustomButtom onPress={handleSignClick}>
          <CustomButtomText>Login</CustomButtomText>
        </CustomButtom>
      </InputArea>
      <SignMessageButtom onPress={handleMessageButtonClick}>
        <SignMessageButtomText>
          Ainda não possui uma conta?
        </SignMessageButtomText>
        <SignMessageButtomTextBold>Cadastre-se</SignMessageButtomTextBold>
      </SignMessageButtom>
    </Container>
  );
};
