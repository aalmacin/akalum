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

const MarkdownStyles = styled.div`
  font-size: 2rem;
  p,
  code {
    font-size: 2rem;
  }

  h1 {
    margin: 2.5rem 0;
  }

  h2 {
    margin: 1rem 0;
  }

  h3,
  h4,
  h5,
  h6 {
    margin: 0.5rem 0;
  }

  li {
    list-style-type: disc;
    list-style-position: inside;
    margin-top: 0.5rem;
  }
`;

export const App: React.FC = () => (
  <>
    <Global styles={globalStyles} />
    <AppDiv>Welcome to Akalum!</AppDiv>
    <MarkdownStyles>
      <ReactMarkdown children={`${MainReadme}`} />
    </MarkdownStyles>
  </>
);
