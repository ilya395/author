import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { MIN_WIDTH } from '../../types/constants';
import Button from '../Button';
import MoreIcon from '../svgs/More/Index';
import { getСoordinates } from './helpers';
import { IDropdownMenuProps } from './model';

const DropdownMenu = (props: IDropdownMenuProps) => {
  const { content } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandle = () => setIsOpen((state) => !state);
  const targetRef = useRef<HTMLButtonElement | null>(null);

  const menuRef  = useRef<HTMLDivElement | null>(null);

  const [menuNode, setMenuNode] = useState<HTMLDivElement | null>(null);

  const computedCoordinates = useMemo(() => {
    const targetСoordinates = getСoordinates(targetRef);

    const menuCoordinates = menuRef.current ? getСoordinates(menuRef) : getСoordinates({
      current: menuNode,
    });

    let left = targetСoordinates.xLeft;
    if (targetСoordinates?.xRight && targetСoordinates.xRight < MIN_WIDTH) {
      left = (targetСoordinates?.xLeft ?? 0) - (menuCoordinates?.width ?? 0) + (targetСoordinates?.width ?? 0)
    }

    let top = (targetСoordinates?.yTop ?? 0) + (targetСoordinates?.height ?? 0);
    if (targetСoordinates?.yBottom && targetСoordinates.yBottom < MIN_WIDTH) {
      top = (targetСoordinates?.yTop ?? 0) - (menuCoordinates?.height ?? 0);
    }

    return {
      top,
      left,
    }
  }, [targetRef, menuNode]);

  return (
    <>
      <Button onClick={onClickHandle} ref={targetRef}>
        <MoreIcon width={16} height={16} />
      </Button>
      {
        isOpen ? <ContentWrap ref={(node:HTMLDivElement) => {
          setMenuNode(node);
        }} top={computedCoordinates.top} left={computedCoordinates.left} >11111111111111111111111</ContentWrap> : null
      }
    </>
  );
}

export default DropdownMenu;

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