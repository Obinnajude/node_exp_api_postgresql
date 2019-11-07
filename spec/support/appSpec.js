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
