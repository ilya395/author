import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MIN_WIDTH } from '../../types/constants';
import { EActionTypes } from '../../types/enums';
import Button from '../Button';
import MoreIcon from '../svgs/More/Index';
import { useClick } from './hooks/Clicks';
import { useCoordinates } from './hooks/Coordinates';
import { useIntersection } from './hooks/Intersection';
import { useMode } from './hooks/Mode';
import { IDropdownMenuProps } from './model';

const DropdownMenu = (props: IDropdownMenuProps) => {
  const { actionType = EActionTypes.Click, items } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandle = () => setIsOpen((state) => !state);

  const targetRef = useRef<HTMLButtonElement | null>(null);

  const [menuNode, setMenuNode] = useState<HTMLDivElement | null>(null);

  const { top, left } = useCoordinates({
    targetRef,
    menuRef: {
      current: menuNode
    },
  });

  const { isOnClick, isOnHover } = useMode(actionType);

  useClick({
    targetRef,
    menuRef: {
      current: menuNode
    },
    callback: () => setIsOpen(false),
  });

  const { isVisible } = useIntersection({
    targetRef,
  });

  const menuCallbackHandler = (callback?: () => void) => () => {
    callback?.();
    onClickHandle();
  }

  return (
    <>
      <Button onClick={isOnClick ? onClickHandle : undefined} ref={targetRef} onMouseOver={isOnHover ? onClickHandle : undefined} onMouseOut={isOnHover ? onClickHandle : undefined}>
        <MoreIcon width={16} height={16} />
      </Button>
      {
        isOpen && items && isVisible
          ? <ContentWrap ref={(node:HTMLDivElement) => {
              setMenuNode(node);
            }}
            top={top}
            left={left}
          >
            {items.map(({ id, callback, label, icon: Icon, props }) => <MenuButton key={id} onClick={menuCallbackHandler(callback)}><span>{label}</span>{Icon ? <IconWrap><Icon {...props} /></IconWrap> : null}</MenuButton>)}
          </ContentWrap>
          : null
      }
    </>
  );
}

export default DropdownMenu;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 15px;
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  background: transparent;

  padding: 5px 10px;

  cursor: pointer;
`;

const ContentWrap = styled.div<{ top?: number; left?: number; visible?: boolean }>`
  border-radius: 4px;
  border: 1px solid #000;
  padding: 10px;
  max-width: ${MIN_WIDTH}px;
  background-color: #fff;

  position: absolute;
  z-index: 10;

  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;