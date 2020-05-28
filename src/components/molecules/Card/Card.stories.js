import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Moleculs/Card',
};

export const Note = () => <Card cardType="note" />;
export const Twitter = () => <Card cardType="twitter" />;
export const Article = () => <Card cardType="article" />;
