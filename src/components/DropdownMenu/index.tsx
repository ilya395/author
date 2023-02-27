import React from 'react';
import styled from 'styled-components';
import { IDropdownMenuProps } from './model';

const DropdownMenu = (props: IDropdownMenuProps) => {
  const { content } = props;
  return (
    <>
      <ContentWrap>
        {content}
      </ContentWrap>
    </>
  );
}

export default DropdownMenu;

const ContentWrap = styled.div`
  border: 4px;
  padding: 10px;
  max-width: 260px;
  background-color: #fff;
`;