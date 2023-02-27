import React from 'react';
import Button from './components/Button';
import MoreIcon from './components/svgs/More/Index';
import { GlobalStyles } from './global-styles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <span>Загоотовка под приложение!</span>
      <Button>
        <MoreIcon />
      </Button>
    </>
  );
};

export default App;