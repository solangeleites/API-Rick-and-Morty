import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkItemStyled = styled(NavLink)`
  font-size: 16px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    108deg,
    rgba(0, 175, 205, 1) 0%,
    rgba(185, 198, 134, 1) 100%
  );
  text-decoration: none;

  &.active {
    font-size: 18px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      108deg,
      rgba(0, 175, 205, 1) 0%,
      rgba(185, 198, 134, 1) 100%
    );
  }
`;
