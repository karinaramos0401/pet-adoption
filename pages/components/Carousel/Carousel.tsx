import Image from "next/image";
import React, { FC } from "react";
import Carousel from "react-material-ui-carousel";
import { carouselMock } from "../mock/carouselMock";

export interface CarouselImages {
  img: string;
}

export const ImageCarousel: FC<any> = () => {
  return (
    <>
      <Carousel>
        {carouselMock.map((ci) => (
          <Image src={ci.img} key={"key"} alt={"cego"}/>
        ))}
      </Carousel>
    </>
  );
};
