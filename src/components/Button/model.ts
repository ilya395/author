export interface IButtonProps {
  children?: JSX.Element;
  onClick?: (event: React.MouseEvent) => void;
  onMouseOver?: (event: React.MouseEvent) => void;
  onMouseOut?: (event: React.MouseEvent) => void;
}