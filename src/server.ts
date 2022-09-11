import App from './app'
import productHandler from '././handlers/product'
const app = new App([
    new productHandler,
])
app.listen();