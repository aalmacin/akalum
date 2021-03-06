/* eslint-disable react/no-children-prop */
import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import ReactMarkdown from 'react-markdown';
import { globalStyles } from './styles/globalStyles';
import MainReadme from '../README.md';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

export const App: React.FC = () => (
  <>
    <Global styles={globalStyles} />
    <AppDiv>Welcome to Akalum!</AppDiv>
    <ReactMarkdown children={`${MainReadme}`} />
  </>
);
