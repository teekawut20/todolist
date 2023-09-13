import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

import { IBanner } from "./types";
import { device } from "../../constants/styles";

export default function Button({
  title = "",
  description = "",
  bg = "",
  isManage = false,
}: IBanner) {
  const navigate = useNavigate();
  return (
    <Container className="banner" bg={bg}>
      <div className="banner__inner">
        <h1 className="banner__title">{title}</h1>
        <p className="banner__description">{description}</p>
      </div>
      {isManage && (
        <EditOutlined
          className="banner__edit"
          onClick={() => navigate("/manage/banner")}
        />
      )}
    </Container>
  );
}

interface Istyle {
  bg: string;
}

const Container = styled.div<Istyle>`
  position: relative;
  width: 100%;
  padding-top: calc(100% * (480 / 1110));
  background: url(${(props) => props.bg}) no-repeat center;
  background-size: cover;
  border-radius: 40px;
  overflow: hidden;
  border: 1px solid #d2d2d2;
  @media ${device.mobileLL} {
    padding-top: 100%;
  }
  .banner {
    &__inner {
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      left: 0;
      padding: 0 0 0 60px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      @media ${device.laptop} {
        width: 100%;
        padding: 40px;
      }
      @media ${device.mobileLL} {
        width: 100%;
        padding: 16px;
      }
    }
    &__title {
      font-family: "Kanit", sans-serif;
      font-size: 72px;
      font-weight: 700;
      word-break: break-word;
      line-height: 1.2;
      color: #000;
      margin: 0 0 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      @media ${device.mobileLL} {
        font-size: 50px;
      }
    }
    &__description {
      font-family: "Kanit", sans-serif;
      font-size: 18px;
      font-weight: 400;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media ${device.mobileLL} {
        font-size: 16px;
      }
    }
    &__edit {
      position: absolute;
      top: 4%;
      right: 4%;
      font-size: 30px;
      cursor: pointer;
      & svg {
        > path {
          fill: #3f73db;
        }
      }
    }
  }
`;
