import styled from "styled-components";
import { mobile } from "../../media/queries";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    gap: 50px;
    margin: 0 auto;
    background-color: #131415;
`

export const Logo = styled.div`
display: flex;
align-items: center;
cursor: pointer;

& img{
height: 75px;
}
    `
export const  Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 70px;

    &p{
        font-size: 30px;
    }

    ${mobile}{
        flex-direction: column;
        position: absolute;
        top: 79px;
        left: 0px;
        background: #131415;
        width: 100%;
        padding: 25px 0px;
        gap: 25px;
        z-index:5;
        transition: all 0.5s ease-in-out;
        transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-200%)'};
    }
`