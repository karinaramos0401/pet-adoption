import React, { FC } from "react";
import { Button } from "../../ui/button/button";
import { IconButton } from "../../ui/button/iconButton";
import { Description, GridContainer, ImageWrapper } from "./petDetailsStyled";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

interface PetDetails {
  img: string;
  description: string;
}

const PetDetails: FC<PetDetails> = () => {
  return (
    <>
      <GridContainer>
        <ImageWrapper>
          <IconButton>
            <ArrowBackIosNewOutlinedIcon></ArrowBackIosNewOutlinedIcon>
          </IconButton>
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
