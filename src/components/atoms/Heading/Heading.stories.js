import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Heading',
};

export const heading = () => <Heading>Hello Ula</Heading>;

export const bigHeading = () => <Heading big>Hello Ula</Heading>;
