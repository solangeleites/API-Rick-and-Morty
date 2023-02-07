import styled from 'styled-components';
import { mobile } from '../../media/queries';


export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`;
// export const CardWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
// `;
export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 250px;
  width:450px;
  border-radius: 10px;
  border: 1px solid white;
  background: rgb(0,175,205);
background: linear-gradient(108deg, rgba(0,175,205,1) 0%, rgba(185,198,134,1) 100%);

  ${mobile} {
    width: 90%;
    height: 200px;
  }

`;
export const ContainerDates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  ${mobile} {
    margin-right: 10px;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  background-image: linear-gradient(108deg, rgba(0,175,205,1) 0%, rgba(185,198,134,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;

  ${mobile} {
    font-size: 1.5rem;
  }
  `

export const CardImg = styled.img`
  height: 250px;
  width: 225px;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
  border-right: 1px solid white;

  ${mobile} {
    height: 200px;
  }

`;
export const Name = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;

  ${mobile} {
    font-size: 1rem;
  }

`;
export const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;

`;
