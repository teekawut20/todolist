import styled from "styled-components";

import { device } from "../../constants/styles";

export default function Tab() {
  return (
    <Container className="tab">
      <div className="tab__label tab__label--active">สินค้าทั้งหมด</div>
      <div className="tab__label">เทคโนโลยี</div>
      <div className="tab__label">แฟชั่น</div>
      <div className="tab__label">เครื่องสำอางค์</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .tab {
    &__label {
      display: inline-block;
      color: #000;
      background: transparent;
      padding: 8px 24px;
      margin: 0 0 32px;
      border-radius: 60px;
      cursor: pointer;
      &--active {
        color: #032f86;
        background: #d4e0f8;
      }
      @media ${device.mobileLL} {
        width: 100%;
        margin: 0 0 8px;
      }
    }
  }
`;
