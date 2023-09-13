import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { device } from "../../constants/styles";
import {
  getCategoryList,
  getSelectedCategory,
  setSelectedCategory,
} from "../../redux/slices/product";

export default function Tab() {
  const dispatch = useDispatch();
  const categoryList = useSelector(getCategoryList);
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <Container className="tab">
      <div
        className={`tab__label ${
          selectedCategory === 0 ? "tab__label--active" : ""
        }`}
        onClick={() => dispatch(setSelectedCategory(0))}
      >
        สินค้าทั้งหมด
      </div>
      {categoryList.map((e, key) => {
        return (
          <div
            className={`tab__label ${
              selectedCategory === e.id ? "tab__label--active" : ""
            }`}
            key={key}
            onClick={() => dispatch(setSelectedCategory(e.id))}
          >
            {e.title}
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.mobileLL} {
    margin: 0 0 16px;
  }
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
