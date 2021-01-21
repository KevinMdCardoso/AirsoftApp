import React, {useState, useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  InputArea,
  CustomButtom,
  CustomButtomText,
  SignMessageButtom,
  SignMessageButtomText,
  SignMessageButtomTextBold,
} from './styles';

import SignInput from '../../Components/SignInput';
import {useNavigation} from '@react-navigation/native';

import LogoInicial from '../../assets/logoInicial.svg';
import EmailIcom from '../../assets/email.svg';
import personIcom from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';

import EndPoints from '../../services/endPoints';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [
        {
          name: 'SignIn',
        },
      ],
    });
  };

  const handleSignClick = async () => {
    if (nome !== '' && cpf !== '' && email !== '' && senha !== '') {
      let json = await EndPoints.CadastrarUsuario(
        JSON.stringify({nome, cpf, email, senha}),
      );

      if (json.response) {
        alert('Cadastrado com sucesso.');
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
        alert('Problema interno ao cadastrar usuario.');
      }
    } else {
      alert('Preencha os campos.');
    }
  };

  return (
    <Container>
      <LogoInicial width="100%" height="100" />
      <InputArea>
        <SignInput
          IconSvg={personIcom}
          placeholder="Digite seu Nome"
          value={nome}
          onChangeText={(t) => setNome(t)}
        />
        <SignInput
          IconSvg={personIcom}
          placeholder="Digite seu Cpf"
          value={cpf}
          onChangeText={(t) => setCpf(t)}
        />
        <SignInput
          IconSvg={EmailIcom}
          placeholder="Digite seu Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(e) => setSenha(e)}
          senha={true}
        />
        <CustomButtom onPress={handleSignClick}>
          <CustomButtomText>Cadastrar</CustomButtomText>
        </CustomButtom>
      </InputArea>
      <SignMessageButtom onPress={handleMessageButtonClick}>
        <SignMessageButtomText>Ja possui uma conta?</SignMessageButtomText>
        <SignMessageButtomTextBold>Logue-se</SignMessageButtomTextBold>
      </SignMessageButtom>
    </Container>
  );
};
