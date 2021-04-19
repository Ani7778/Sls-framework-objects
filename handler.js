'use strict';

module.exports = {
  hello: async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hello, my first project',
        },
        null,
        2
      ),
    };
  },

  create: async (event) => {
    let bodyObj = {}

    try {
      bodyObj = JSON.stringify(event.body)
    } catch (jsonErr) {
      console.log("There eas an error ", jsonErr)

      return {
        statusCode: 400
      }
    }

    if (typeof bodyObj.name === "undefined" || 
      typeof bodyObj.age === "undefined") {
      console.log("Missing parameters")

      return {
        statusCode: 400
      }
    }

    return {
      statusCode: 200,
    }
  }
};
