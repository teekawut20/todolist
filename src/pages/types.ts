export interface IHome {
  isManage: boolean;
}
export interface IBanner {
  isManage: boolean;
}
export interface IProduct {
  isManage: boolean;
}
export interface IFormDataBanner {
  title: string;
  description: string;
  image: string | any;
}
export interface IFormDataProduct {
  title: string;
  description: string;
  image: string | any;
  price: string;
  category: number;
}
