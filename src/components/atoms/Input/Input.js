import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 15px 30px;
  margin: ${({ first }) => (first ? '0' : '30px 0')};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      margin: 0;
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 20px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `};
`;

export default Input;
