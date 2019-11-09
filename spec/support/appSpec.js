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
      expect(response.status).toBe(success);
    });
  });
  it('body', () => {
    Request.post(url, (error, response) => {
      expect(response).toEqual({
        status: response.status,
        data: {
          message: response.message,
          articleId: response.articleId,
          createdOn: response.createdOn,
          articleTitle: response.articleTitle
        }
      });
    });
  });
});

describe('POST /auth/signin', () => {
  const url = "http://localhost:3000/api/v2/auth/signin";

  it("should return status 200", () => {
    Request.post(url, (error, response) => {
      expect(response.status).toBe(success);
    });
  });
  it("should have response spec json", () => {
    Request.post(url, (error, response) => {
      expect(response).toEqual({
        status: response.status,
        data: {
          token: response.token,
          userId: response.userid
        }
      });
    });
  });
});

describe('POST /gifs', () => {
  const url = "http://localhost:3000/api/v2/gifs";

  it("should return status 201", () => {
    Request.post(url, (error, response) => {
      expect(response.status).toBe(success);
    });
  });
  it("should have response spec", () => {
    Request.post(url, (error, response) => {
      expect(response).toEqual({
        status: response.status,
        data: {
          gifId: response.gifId,
          message: response.message,
          createdOn: response.createdOn,
          title: response.title,
          imageUrl: response.imageUrl
        }
      });
    });
  });
});
