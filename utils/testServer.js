const express = require('express');
const superTest = require('supertest');

const testServer = (route) => {
  const app = express();
  route(app);
  return superTest(app);
};
module.exports = testServer;
