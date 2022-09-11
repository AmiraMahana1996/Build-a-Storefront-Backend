import express from 'express';
import JWT from 'jsonwebtoken';
export const authMiddelware = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): void => {
    try {
        const auth = req.get("Authorization")
        const bearer = auth?.split(' ')[0];
        const token = auth?.split(' ')[1];
        if (bearer === 'bearer' && token) {
            JWT.verify(token,)
        }

    } catch (err) {
        console.error(err)
    }
}