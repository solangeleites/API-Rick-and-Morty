import styled from 'styled-components';
import { mobile } from '../../media/queries';

export const HamburgerContainer = styled.div`
  color:  rgba(185, 198, 134, 1);
  height: 55%;
  width: 2.2rem;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  display: none;

  ${mobile} {
    display: flex;
  }
`;

export const Icon = styled.span`
position: relative;
height: 2px;
width: 75%;
background: ${(props) => (props.clicked ? 'transparent' : ' rgba(185, 198, 134, 1) ' )};
display:inline-block;

&::before, &::after{
    background-color:rgba(0, 175, 205, 1);
    content: '';
    width: 100%;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
}

&::before{
    top: ${(props) => (props.clicked === true ? '0' : '-8px')};
    transform: ${(props) =>
      props.clicked === true ? 'rotate(45deg)' : 'rotate(0)'};
}
&::after{
    top: ${(props) => (props.clicked === true ? '0' : '-8px')};
    transform: ${(props) =>
      props.clicked === true ? 'rotate(-45deg)' : 'rotate(0)'};
}
`;
