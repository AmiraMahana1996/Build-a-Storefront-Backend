interface IOrder {
  id?: number;
  product_id: number;
  product_qty: number;
  user_id: number;
  status: string;
}
export default IOrder;
