import React from 'react';
import NewItemBar from './NewItemBar';

export default {
  component: NewItemBar,
  title: 'Organisms/NewItemBar',
};

export const newItemBarNote = () => <NewItemBar pageContext="notes" />;
export const newItemBarTwitter = () => <NewItemBar pageContext="twitters" />;
export const newItemBarArticle = () => <NewItemBar pageContext="articles" />;
