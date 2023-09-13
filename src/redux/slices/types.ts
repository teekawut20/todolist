export interface IProduct {
  banner: IBanner;
  productList: IProductList[];
  categoryList: ICategoryList[];
  selectedCategory: number;
}
export interface IBanner {
  title: string;
  description: string;
  image: string;
}
export interface IProductList {
  title: string;
  description: string;
  image: string | any;
  price: string;
  category: number;
}
export interface ICategoryList {
  id: number;
  title: string;
}
export interface IState {
  product: IProduct;
}
