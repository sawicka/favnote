import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  padding: 0;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.regular};
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary, theme }) =>
    secondary &&
    css`
      background-color: ${theme.grey100};
      width: 105px;
      height: 30px;
      font-size: 10px;
      font-weight: ${theme.light};
    `}
`;

export default Button;
