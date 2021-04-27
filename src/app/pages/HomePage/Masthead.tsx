import * as React from 'react';
import styled from 'styled-components/macro';
import { Logos } from './Logos';
import { Title } from './components/Title';
import { Lead } from './components/Lead';
import { A } from 'app/components/A';

export function Masthead() {
  return (
    <Wrapper>
      <Logos />
      <Title>عـاون خوك التونسي وبلّغ على أقرب فرصة لعبوّات الغاز المتاحة وكون سبب حياة شخص ♡ </Title>
      <Lead>
        
        <A
          href="https://github.com/tunpl/oxycare"
          target="_blank"
          rel="noopener noreferrer"
        >
          منّا
        </A>{' '}
        تنجّم تو تشوف عبوات الغاز المتاحة
      </Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
