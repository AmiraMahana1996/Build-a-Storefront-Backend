import express from 'express';
import Messages from '../messages/messages';
import invalidOptionValidation from '../validation/validation.rules';
export const validationMiddelware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const data = {
    filename: req.query.filename,
    width: req.query.width,
    height: req.query.height,
  };

  //validation
  for (const [key, value] of Object.entries(data)) {
    switch (invalidOptionValidation(data)) {
      case 'nullOrZero':
        res.status(404).json(Messages(key).invalidInput);
        break;
      case 'empty':
        res.status(404).json(Messages(value).requiredInput);
        break;
      case 'negativeValue':
        res.status(404).send(Messages(key).negativeValue);
        break;
      case 'notFound':
        res.status(404).json(Messages(key).notFound);
        break;
      case 'required':
        res.status(404).json(Messages(data).requiredInput);
        break;
      case 'notalphabetic':
        res.status(404).json(Messages(data).notalphabetic);
        break;
      case 'NotNumber':
        res.status(404).json(Messages(data).NotNumber);

        break;
      case 'DimNotNumber':
        res.status(404).json(Messages(data).DimNotNumber);

        break;
      default:
        next();
    }
    break;
  }
};
