import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import DropdownMenu from './components/DropdownMenu';
import MoreIcon from './components/svgs/More/Index';
import { GlobalStyles } from './global-styles';
import { menuItems, WORK_AREA_ID } from './types/constants';
import { EActionTypes } from './types/enums';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Content id={WORK_AREA_ID}>
          <One>
            <DropdownMenu
              items={menuItems}
              target={{
                component: Button,
                componentProps: {
                  children: <MoreIcon width={16} height={16} />
                },
              }}
            />
          </One>
          <Two>
            <DropdownMenu
              items={menuItems}
              target={{
                component: Button,
                componentProps: {
                  children: <MoreIcon width={16} height={16} />
                },
              }}
            />
          </Two>
          <Three>
            <DropdownMenu
              actionType={EActionTypes.Hover}
              items={menuItems}
              target={{
                component: Button,
                componentProps: {
                  children: <MoreIcon width={16} height={16} />
                },
              }}
            />
          </Three>
          <Four>
            <DropdownMenu
              items={menuItems}
              target={{
                component: Button,
                componentProps: {
                  children: <MoreIcon width={16} height={16} />
                },
              }}
            />
          </Four>
        </Content>
    </>
  );
};

export default App;

const Content = styled.div`
  width: 100%;
  height: 1200px;
  display: grid;
  grid-template-areas:
  'one two'
  'three four';

  position: relative;
  padding: 250px;
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
