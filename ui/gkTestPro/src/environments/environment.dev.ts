export const environment = {
  production: false,
  BASE_URL: 'http://localhost:3000/',
  USER_BASE_URL: 'http://localhost:3000/users/',
  USER: {
    ADD_USER: 'register',
    LOGIN: 'login',
    LOGOUT: 'logout',
    CHECK_AUTH: 'isUserAuth',
    GET_USER: 'getUser',
  },
  TEST_CASE_BASE_URL: 'http://localhost:3000/testCases/',
  TEST_CASE: {
    GET_TEST_CASES: 'list',
    ADD_TEST_CASE: 'add',
    GET_TEST_CASE: 'getCase'
  }
};