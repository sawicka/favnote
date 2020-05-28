import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Atoms/Input',
};

export const input = () => <Input placeholder="login" />;
export const searchInput = () => <Input placeholder="search" search />;
