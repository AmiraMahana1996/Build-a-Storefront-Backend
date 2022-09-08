
import { Request, Response } from 'express';
import IProduct from '../interfaces/Product';
import ProductStore from '../models/product'

const store = new ProductStore();

export const index = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await store.index();
        res.json(products);
    }
    catch (e) {
        res.status(400);
        res.json(e);
    }
}


export const show = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await store.show(req.params.id as unknown as number);
        res.json(product);
    }
    catch (e) {
        res.status(400);
        res.json(e);
    }
}

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await store.update(req.params.id as unknown as number, req.body as IProduct);
        res.json(product);
    }
    catch (e) {
        res.status(400);
        res.json(e);
    }
}
export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body, 'req.body')
        const product = await store.create(req.body as IProduct);
        res.json(product);
    }
    catch (e) {
        res.status(400);
        res.json(e);
    }
}

export const delete_ = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await store.delete(req.params.id as unknown as number);
        res.json(product);
    }
    catch (e) {
        res.status(400);
        res.json(e);
    }
}
export const getByCategoryId = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await store.getProductsByCategory(req.params.id as unknown as number);
        res.json(products);
    }
    catch (e) {
        res.status(400);
        res.json(e);
    }
}
export default [index, show, update, delete_, getByCategoryId]