import React from 'react';
import styled from 'styled-components';
import DropdownMenu from './components/DropdownMenu';
import { GlobalStyles } from './global-styles';
import { menuItems, WORK_AREA_ID } from './types/constants';
import { EActionTypes } from './types/enums';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Content id={WORK_AREA_ID}>
          <One>
            <DropdownMenu items={menuItems} />
          </One>
          <Two>
            <DropdownMenu items={menuItems} />
          </Two>
          <Three>
            <DropdownMenu actionType={EActionTypes.Hover} items={menuItems} />
          </Three>
          <Four>
            <DropdownMenu items={menuItems} />
          </Four>
        </Content>
    </>
  );
};

export default App;

const Content = styled.div`
  width: 100%;
  height: 800px;
  display: grid;
  grid-template-areas:
  'one two'
  'three four';

  position: relative;
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
