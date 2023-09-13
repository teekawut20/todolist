import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import Banner from "../components/Banner";
import Tab from "../components/Tab";
import Box from "../components/Box";
import Button from "../components/Button";
import { device } from "../constants/styles";
import {
  getBanner,
  getProductList,
  getSelectedCategory,
  setProductList,
} from "../redux/slices/product";
import { IHome } from "./types";

export default function Home({ isManage = false }: IHome) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const banner = useSelector(getBanner);
  const productList = useSelector(getProductList);
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <Page className="home">
      {isManage && (
        <div className="home__add">
          <Button
            text="+ เพิ่มสินค้า"
            onClick={() => navigate("/manage/add")}
          />
        </div>
      )}
      <div className="home__banner">
        <Banner
          title={banner.title}
          description={banner.description}
          bg={banner.image}
          isManage={isManage}
        />
      </div>
      <Tab />
      <div className="home__group">
        {productList
          .filter((e) =>
            selectedCategory === 0 ? true : e.category === selectedCategory
          )
          .map((e, key) => {
            return (
              <Box
                key={key}
                title={e.title}
                description={e.description}
                price={e.price}
                cover={e.image}
                isManage={isManage}
                onEdit={() => navigate(`/manage/${key}`)}
                onDelete={() => {
                  const temp = _.cloneDeep(productList);
                  temp.splice(key, 1);
                  dispatch(setProductList([...temp]));
                }}
              />
            );
          })}
      </div>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  .home {
    &__add {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 0 0 16px;
    }
    &__banner {
      width: 100%;
      margin: 0 0 40px;
    }
    &__group {
      width: calc(100% + 32px);
      margin: 0 -16px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      > div {
        width: calc((100% - 96px) / 3);
        margin: 0 16px 32px;
      }
      @media ${device.tablet} {
        > div {
          width: calc((100% - 64px) / 2);
          margin: 0 16px 32px;
        }
      }
      @media ${device.mobileLL} {
        width: 100%;
        margin: 0;
        > div {
          width: 100%;
          margin: 0 0 32px;
        }
      }
    }
  }
`;
