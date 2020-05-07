import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>
      <Button>Close/save</Button>
      <Button secondary>Remove</Button>
    </h1>
  </div>
);

export default Root;
