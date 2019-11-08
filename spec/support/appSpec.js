/* eslint-disable no-undef */
const Request = require('request');


describe('sever', () => {
  // eslint-disable-next-line no-unused-vars
  let server;

  beforeAll(() => {
    // eslint-disable-next-line global-require
    server = require('../../server');
  });
  afterAll(() => {
    sever.close();
  });
});

describe('POST /auth/create-user', () => {
  const url = "http://localhost:3000/api/v2/auth/create-user";

  it("should return status 201", () => {
    Request.post(url, (error, response) => {
      expect(response.statusCode).toBe(201);
    });
  });
  it("body", () => {
    Request.post(url, (error, response) => {
      expect(response.body).toEqual({
        status: response.body.status,
        data: {
          message: response.body.message,
          articleId: response.body.articleId,
          createdOn: response.body.createdOn,
          articleTitle: response.body.articleTitle
        }
      });
    });
  });
});
