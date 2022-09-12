import App from './app';
import productHandler from '././handlers/product';
import categorytHandler from '././handlers/category';
import userHandler from './handlers/user';
import orderHandler from './handlers/order'
const app = new App([
  new productHandler(),
  new categorytHandler(),
  new userHandler(),
  new orderHandler()
]);
app.listen();
