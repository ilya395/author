import React from 'react';
import Button from '../Button';
import MoreIcon from '../svgs/More/Index';

const OptionButton = (props: { onClick?: (event: React.MouseEvent) => void; }) => {
  return (
    <Button {...props}>
      <MoreIcon width={16} height={16} />
    </Button>
  );
}

export default OptionButton;