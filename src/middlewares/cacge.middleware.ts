import { Request, Response, NextFunction } from 'express';
import apicache from 'apicache';
import fs from 'fs';
import path from 'path';

const cache = apicache.middleware;
export const cacheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { filename, width, height } = req.query;
  if (
    fs.existsSync(
      `${path.resolve(
        './'
      )}/assets/modified-images/${filename}_${width}_${height}.png`
    )
  ) {
    res.sendFile(
      path.resolve(`assets/modified-images/${filename}_${width}_${height}.png`)
    );
  } else {
    cache(300);
    next();
  }
};
export default cacheMiddleware;
