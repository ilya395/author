import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import DropdownMenu from './components/DropdownMenu';
import MoreIcon from './components/svgs/More/Index';
import { GlobalStyles } from './global-styles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrap>
        <One>
          <DropdownMenu />
        </One>
        <Two>
          <DropdownMenu />
        </Two>
        <Three>
          <DropdownMenu />
        </Three>
        <Four>
          <DropdownMenu />
        </Four>
      </Wrap>
    </>
  );
};

export default App;

const Wrap = styled.div`
  width: 100vw;
  // margin-left: calc(100vw - 100%);
  height: 100vh;
  display: grid;
  grid-template-areas:
  'one two'
  'three four';

  padding: 25px;
`;

const One = styled.div`
  grid-area: one;
  justify-self: start;
  align-self: start;
`;
const Two = styled.div`
  grid-area: two;
  justify-self: end;
  align-self: start;
`;
const Three = styled.div`
  grid-area: three;
  justify-self: start;
  align-self: end;
`;
const Four = styled.div`
  grid-area: four;
  justify-self: end;
  align-self: end;
`;
