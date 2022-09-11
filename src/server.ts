import App from './app'
import productHandler from '././handlers/product'
import categorytHandler from '././handlers/category'

const app = new App([
    new productHandler,
    new categorytHandler,
])
app.listen();