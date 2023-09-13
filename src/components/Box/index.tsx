import styled from "styled-components";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { IBox } from "./types";

export default function Box({
  title = "",
  description = "",
  cover = "",
  price = "",
  isManage = false,
  onEdit = () => {},
  onDelete = () => {},
}: IBox) {
  return (
    <Container className="box">
      <div className="box__cover">
        <img src={cover} alt="" />
        {isManage && (
          <div className="box__editor">
            <EditOutlined className="box__edit" onClick={onEdit} />
            <DeleteOutlined className="box__delete" onClick={onDelete} />
          </div>
        )}
      </div>
      <h2 className="box__title">{title}</h2>
      <h3 className="box__description">{description}</h3>
      <p className="box__price">฿{price}</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  .box {
    &__cover {
      position: relative;
      width: 100%;
      padding-top: 100%;
      overflow: hidden;
      border-radius: 12px;
      border: 1px solid #d2d2d2;
      > img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 101%;
        height: 101%;
        max-width: unset;
        max-height: unset;
        object-fit: cover;
      }
    }
    &__title {
      font-family: "Kanit", sans-serif;
      font-size: 24px;
      font-weight: 500;
      color: #000;
      margin: 16px 0 0;
      line-height: 1.2;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &__description {
      font-family: "Kanit", sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: #000;
      margin: 4px 0 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &__price {
      font-family: "Kanit", sans-serif;
      font-size: 24px;
      font-weight: 500;
      color: #000;
      margin: 4px 0 0;
    }
    &__editor {
      position: absolute;
      top: 4%;
      right: 4%;
    }
    &__edit {
      font-size: 22px;
      cursor: pointer;
      margin: 0 8px 0 0;
      & svg {
        > path {
          fill: #3f73db;
        }
      }
    }
    &__delete {
      font-size: 22px;
      cursor: pointer;
      & svg {
        > path {
          fill: red;
        }
      }
    }
  }
`;
