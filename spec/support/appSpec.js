/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app.js');


describe('sever', () => {
  // eslint-disable-next-line no-unused-vars
  const server = app.listen();
  afterAll(() => {
    r.close();
  });
});

describe('POST /auth/create-user', () => {
  const url = "/api/v2/auth/create-user";
  const server = app.listen();
  afterAll(() => {
    server.close();
  });

  it("should return status 201", () => {
    request(server).post(url, (error, response) => {
      expect(response.statusCode).toBe(201);
    });
  });
  it("body", () => {
    request(server).post(url, (error, response) => {
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
describe('POST /auth/signin', () => {
  const url = "/api/v2/auth/signin";
  const server = app.listen();
  afterAll(() => {
    server.close();
  });

  it("should return status 200", () => {
    request(server).post(url, (error, response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  it("should have response spec json", () => {
    request(server).post(url, (error, response) => {
      expect(response.body).toEqual({
        status: response.body.status,
        data: {
          token: response.body.token,
          userId: response.body.userid
        }
      });
    });
  });
});

describe('POST /gifs', () => {
  const url = "/api/v2/gifs";
  const server = app.listen();
  afterAll(() => {
    server.close();
  });

  it("should return status 201", () => {
    request(server).post(url, (error, response) => {
      expect(response.statusCode).toBe(201);
    });
  });
  it("should have response spec", () => {
    request(server).post(url, (error, response) => {
      expect(response.body).toEqual({
        status: response.body.status,
        data: {
          gifId: response.body.gifId,
          message: response.body.message,
          createdOn: response.body.createdOn,
          title: response.body.title,
          imageUrl: response.body.imageUrl
        }
      });
    });
  });
});

describe('POST /articles', () => {
  const url = "/api/v2/articles";
  const server = app.listen();
  afterAll(() => {
    server.close();
  });

  it("should return status 201", () => {
    request(server).post(url, (error, response) => {
      expect(response.statusCode).toBe(201);
    });
  });
  it("should have response spec", () => {
    request(server).post(url, (error, response) => {
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
