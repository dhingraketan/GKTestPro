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
    GET_TEST_CASE: 'getCase',
    EDIT_TEST_CASE: 'edit',
    IMPORT_TEST_CASES: 'import',
  },

  PROJECT_BASE_URL: 'http://localhost:3000/projects/',
  PROJECT: {
    GET_PROJECTS: 'list',
    ADD_PROJECT: 'add',
    ADD_BASELINE: 'addBaseline',
    ADD_BASELINES: 'addBaselines',
    REMOVE_BASELINE: 'removeBaseline',
    REMOVE_BASELINES: 'removeBaselines',
    DELETE_PROJECT: 'delete',
    GET_PROJECT: 'get',
    GET_PROJECTS_BY_ID: 'getProjects',
    GET_MOST_RECENT_PROJECTS: 'getRecent'
  },

  BASELINE_BASE_URL: 'http://localhost:3000/baselines/',
  BASELINE: {
    GET_BASELINES: 'list',
    ADD_BASELINE: 'add',
    ADD_TEST_SUITE: 'addTestSuite',
    ADD_TEST_SUITES: 'addTestSuites',
    REMOVE_TEST_SUITE: 'removeTestSuite',
    REMOVE_TEST_SUITES: 'removeTestSuites',
    DELETE_BASELINE: 'delete',
    GET_BASELINE: 'get',
    GET_BASELINES_BY_ID: 'getBaselines'
  }  

};