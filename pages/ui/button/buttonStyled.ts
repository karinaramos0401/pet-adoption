import styled from "styled-components";
import { IButton } from "./button";

export const Button = styled.button`
  color: #262f56;
  background-color: #c3c3c3;
  width: 221px;
  height: 46px;
  font-size: 18px;
  border-radius: 16px;
  position: absolute;
  border: none;
  bottom: 43px;
  left: 120px;
  font-family: Sen;
  font-weight: ${(p: IButton) => p.fontWeight};
`;
