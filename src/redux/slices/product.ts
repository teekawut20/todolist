import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./types";

export const productSlice = createSlice({
  name: "lang",
  initialState: {
    banner: {
      title: "",
      description: "",
      image: "",
    },
    productList: [],
    categoryList: [
      {
        id: 1,
        title: "เทคโนโลยี",
      },
      {
        id: 2,
        title: "แฟชั่น",
      },
      {
        id: 3,
        title: "เครื่องสำอางค์",
      },
    ],
    selectedCategory: 0,
  },
  reducers: {
    setBanner: (state, action) => {
      return { ...state, banner: action.payload };
    },
    setProductList: (state, action) => {
      return { ...state, productList: action.payload };
    },
    setSelectedCategory: (state, action) => {
      return { ...state, selectedCategory: action.payload };
    },
  },
});

export default productSlice.reducer;

export const { setBanner, setProductList, setSelectedCategory } =
  productSlice.actions;

export const getBanner = (state: IState) => state.product.banner;
export const getProductList = (state: IState) => state.product.productList;
export const getCategoryList = (state: IState) => state.product.categoryList;
export const getSelectedCategory = (state: IState) =>
  state.product.selectedCategory;
