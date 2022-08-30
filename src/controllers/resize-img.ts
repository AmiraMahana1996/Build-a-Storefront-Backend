import { Request, Response } from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import * as fsExtra from 'fs-extra';

export const resizeImage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { filename, width, height } = req.query;

  // remove all images from modefied folder images
  fsExtra.emptyDirSync(`${path.resolve('./')}/assets/modified-images/`);

  //start resizing

  if (fs.existsSync(`${path.resolve('./')}/assets/images/${filename}.png`)) {
    await sharp(`${path.resolve('./')}/assets/images/${filename}.png`)
      .resize({
        width: Number(width),
        height: Number(height),
      })
      .toFile(
        `${path.resolve(
          './'
        )}/assets/modified-images/${filename}_${width}_${height}.png`
      )
      .then((file) => {
        res.sendFile(
          path.resolve(
            `assets/modified-images/${filename}_${file.width}_${file.height}.png`
          )
        );
      });
  } else {
    res.status(404);
  }
};
