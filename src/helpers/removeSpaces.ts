const removeSpaces = (string: string) => {
  try {
    const returnedString = string.replace(/ /g, '');
    return returnedString.trim();
  } catch (err) {
    console.error(err);
  }
};
export default removeSpaces;
