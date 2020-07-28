import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, pageType }) => theme[pageType]};
  padding: 0;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.bold};
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 ${({ center }) => center && 'auto'};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      background-color: ${theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
