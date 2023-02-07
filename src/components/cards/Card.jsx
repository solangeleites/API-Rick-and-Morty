import React from 'react';
import {
  CardImg,
  CardStyled,
  Description,
  Name,
  ContainerDates
} from './CardStyles';

const Card = (props) => {
  const { name, gender, img, species, status } = props;
  return (
    <>
          <CardStyled>
            <CardImg src={img} />

            <ContainerDates>

            <Name>{name}</Name>
            <Description>{gender}</Description>
            <Description>{species}</Description>
            <Description>{status}</Description>

            </ContainerDates>

          </CardStyled>
    </>
  );
};

export default Card;
