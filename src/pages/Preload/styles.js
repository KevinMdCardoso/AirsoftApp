import React from 'react';
import styled from 'styled-components';
import background from '../../assets/Preload.jpg';

export const Container = styled.SafeAreaView`
  background-color: #292e34;
  flex: 1;
  justify-content: center;
  align-items: center;
  /* background-image: url(${background}); */
`;

export const Background = styled.Image`
  /* background-image: url(${background}); */
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
