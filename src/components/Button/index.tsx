import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { IButtonProps } from './model';

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, onClick} = props;
  return (
    <StyledButton onClick={onClick} ref={ref}>{children}</StyledButton>
  );
});

export default Button;

const StyledButton = styled.button`
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  padding: 5px;
  cursor: pointer;
`;