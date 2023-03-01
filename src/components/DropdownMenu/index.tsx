import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { MIN_WIDTH } from '../../types/constants';
import { EActionTypes } from '../../types/enums';
import Button from '../Button';
import MoreIcon from '../svgs/More/Index';
import { getСoordinates } from './helpers';
import { IDropdownMenuProps } from './model';

const DropdownMenu = (props: IDropdownMenuProps) => {
  const { content, actionType = EActionTypes.Click, items } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandle = () => setIsOpen((state) => !state);

  const targetRef = useRef<HTMLButtonElement | null>(null);

  const menuRef  = useRef<HTMLDivElement | null>(null);

  const [menuNode, setMenuNode] = useState<HTMLDivElement | null>(null);

  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

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
  }, [targetRef, menuNode,]);

  const isOnClick = useMemo(() => actionType === EActionTypes.Click, [actionType]);
  const isOnHover = useMemo(() => actionType === EActionTypes.Hover, [actionType]);

  useEffect(() => {
    const handle = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        targetRef.current !== target &&
        (target && !targetRef.current?.contains(target)) &&
        menuNode !== target &&
        (target && !menuNode?.contains(target))
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handle);
    return () => {
      document.removeEventListener('click', handle);
    };
  }, [targetRef.current, menuNode]);

  useEffect(() => {
    const handle = () => {
      console.log(computedCoordinates, scrollY);
    };
    window.addEventListener('scroll', handle);
    return () => {
      window.addEventListener('scroll', handle);;
    }
  }, [scrollY]);

  return (
    <>
      <Button onClick={isOnClick ? onClickHandle : undefined} ref={targetRef} onMouseOver={isOnHover ? onClickHandle : undefined} onMouseOut={isOnHover ? onClickHandle : undefined}>
        <MoreIcon width={16} height={16} />
      </Button>
      {
        isOpen && items
          ? <ContentWrap ref={(node:HTMLDivElement) => {
              setMenuNode(node);
            }}
            top={computedCoordinates.top}
            left={computedCoordinates.left}
          >
            {items.map(({ id, callback, label, icon: Icon, props }) => <MenuButton key={id} onClick={callback}><span>{label}</span>{Icon ? <IconWrap><Icon {...props} /></IconWrap> : null}</MenuButton>)}
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