interface IOrderTransaction {
  id?: number;
  product_id: number;
  product_qty: number;
  order_id: number;
  user_id: number;
}
export default IOrderTransaction;
