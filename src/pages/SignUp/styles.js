import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  background-color: #292e34;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;

export const CustomButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #000;
  border-radius: 30px;
`;

export const CustomButtomText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SignMessageButtom = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtomText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const SignMessageButtomTextBold = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
`;
