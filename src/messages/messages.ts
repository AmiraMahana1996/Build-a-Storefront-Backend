const Messages = (input) => {
  return {
    created: {
      error: false,
      status: 200,
      message: 'Successfully Created',
    },

    notFound: {
      error: true,
      status: 404,
      message: ` ${input} Not Found or invalid filename`,
    },

    invalidInput: {
      error: true,
      status: 404,
      message: ` Not Valid input, don't enter zero for width and height!`,
    },
    requiredInput: {
      error: true,
      status: 404,
      message: `you should add width and height they are Required `,
    },
    negativeValue: {
      error: true,
      status: 404,
      message: `width or height Cann't be negative! `,
    },
    somethingWentWrong: {
      error: true,
      status: 403,
      message: `Something Went Wrong `,
    },
    notalphabetic: {
      error: true,
      status: 404,
      message: 'filename must contain only alphabetic characters!',
    },
    DimNotNumber: {
      error: true,
      status: 404,
      message: 'Should width and height not contain alphabetic characters !',
    },
    NotNumber: {
      error: true,
      status: 404,
      message: 'Should filename not contain any numbers !',
    },
  };
};

export default Messages;
