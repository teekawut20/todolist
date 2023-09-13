import styled from "styled-components";

import { IButton } from "./types";

export default function Button({
  text = "",
  color = "#fff",
  bgColor = "#3F73DB",
  onClick = () => {},
}: IButton) {
  return (
    <Container color={color} bgcolor={bgColor} onClick={onClick}>
      {text}
    </Container>
  );
}

interface IStyle {
  color: string;
  bgcolor: string;
}

const Container = styled.div<IStyle>`
  display: inline-block;
  border-radius: 6px;
  background: #3f73db;
  padding: 10px 20px;
  color: ${(props) => props.color};
  background: ${(props) => props.bgcolor};
  cursor: pointer;
  font-family: "Kanit", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;
