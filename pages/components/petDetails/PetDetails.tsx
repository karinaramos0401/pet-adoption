import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React, { FC } from 'react';
import {Button} from "../../ui/button/button"
import {IconButton} from "../../ui/button/iconButton"
import { Description, GridContainer, ImageWrapper } from './petDetailsStyled';

interface PetDetails {
    img: string,
    description: string,
}

const PetDetails: FC<PetDetails> = () => {
  return (
    <>
      <GridContainer>
          <ImageWrapper></ImageWrapper>
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


