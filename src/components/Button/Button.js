import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'};
  padding: 0;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(196, 83%, 75%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
