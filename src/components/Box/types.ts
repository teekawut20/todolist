export interface IBox {
  title: string;
  description: string;
  cover: string;
  price: string;
  isManage: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}
