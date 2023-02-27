import React from 'react';
import styled from 'styled-components';
import { IButtonProps } from './model';

const Button = (props: IButtonProps) => {
  const { children, onClick } = props;
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;