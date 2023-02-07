import styled from "styled-components";
import { mobile } from "../../media/queries";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & img{
        width: 100%;
        height: calc(100vh - 80px);
        object-fit: cover;
    }
`;
