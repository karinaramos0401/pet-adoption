import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React, { FC } from 'react';
import {Button} from "../../ui/button/button";
import {IconButton} from "../../ui/button/iconButton";
import { ImageCarousel } from '../Carousel/Carousel';
import { Description, GridContainer, ImageWrapper } from './petDetailsStyled';

interface PetDetails {
    description: string,
}

const PetDetails: FC<PetDetails> = () => {
  return (
    <>
      <GridContainer>
          <ImageWrapper>
            <ImageCarousel></ImageCarousel>
          </ImageWrapper>
          <Description>
              <Button fontWeight={"bold"}>Adotar</Button>
              <IconButton>
                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
              </IconButton>  
          </Description>
      </GridContainer>
    </>
  );
};

export default PetDetails;


