import styled from 'styled-components';
import React from 'react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import { theme } from 'theme/mainTheme';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${theme.primary};
`;

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
  decorators: [(story) => <YellowBackground> {story()} </YellowBackground>],
};

export const pen = () => <ButtonIcon icon={penIcon} />;
export const penActive = () => <ButtonIcon active icon={penIcon} />;
export const bulb = () => <ButtonIcon icon={bulbIcon} />;
export const twitter = () => <ButtonIcon icon={twitterIcon} />;
export const plus = () => <ButtonIcon icon={plusIcon} />;
export const logout = () => <ButtonIcon icon={logoutIcon} />;
