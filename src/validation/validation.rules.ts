import fs from 'fs';
import path from 'path';

//validation function
const invalidOptionValidation = (data): string | void => {
  const regExp = new RegExp('/^[A-Za-z0-9]*$/');

  if (
    data.filename === undefined ||
    data.width === undefined ||
    data.height === undefined
  ) {
    return 'required';
  }
  if (data.width && data.height && data.filename) {
    if (
      regExp.test(data.width) ||
      regExp.test(data.width) ||
      isNaN(data.width) ||
      isNaN(data.height)
    ) {
      return 'DimNotNumber';
    } else if (data.width === '' || data.height === '') {
      return 'empty';
    } else if (data.width === '0' || data.height === '0') {
      return 'nullOrZero';
    } else if (!ispositive(data.width) && !ispositive(data.height)) {
      return 'negativeValue';
    }
    if (data.filename) {
      if (regExp.test(data.filename)) {
        return 'notalphabetic';
      } else if (
        !fs.existsSync(
          `${path.resolve('./')}/assets/images/${data.filename}.png`
        )
      ) {
        return 'notFound';
      }
      if (regExp.test(data.filename)) {
        return 'NotNumber';
      }
    }

    return 'valid';
  }
};

//check negative number
function ispositive(n) {
  return 1 / (n * 0) === 1 / 0;
}
export default invalidOptionValidation;
