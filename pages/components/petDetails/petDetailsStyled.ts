import styled from "styled-components";

export const GridContainer = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(1fr, 2);
  width: 100vw;
  height: 100vh;
`;

export const ImageWrapper = styled.div`
  border: 1px solid green;
`;

export const Description = styled.div`
  border: 1px solid purple;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
`;
