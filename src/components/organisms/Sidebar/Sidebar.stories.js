import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

export default {
  component: Sidebar,
  title: 'Organisms/Sidebar',
  decorators: [StoryRouter()],
};

export const sidebarNote = () => <Sidebar />;
export const sidebarTwitter = () => <Sidebar sidebarType="twitter" />;
export const sidebarArticle = () => <Sidebar sidebarType="article" />;
