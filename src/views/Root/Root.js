import React from 'react';
import Button from 'components/atoms/Button/Button';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <MainTemplate>
    <>
      <Button>Close/save</Button>
      <Button secondary>Remove</Button>
    </>
  </MainTemplate>
);

export default Root;
