import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big, medium }) => {
    if (big) return theme.fontSize.xl;
    if (medium) return theme.fontSize.m;
    return theme.fontSize.l;
  }};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
