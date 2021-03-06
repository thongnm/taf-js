import {doLogin} from '../../page-objects/login/commands';
let home;
const beforeEach = function(browser) {
  doLogin(browser);
  home = browser.page.home();
};
const afterEach = function(browser, done) {
  setTimeout(() => {
    done();
  }, 200);
};

// Logout success
const logoutSuccess = (browser) => {
  home.logout()
      .shouldNavigateToLoginPage();

  browser.end();
};

// Should valid assessment period
const validAssessmentPeriod = (browser) => {
  home.shouldValidAssessmentPeriod();

  browser.end();
};

// Menu visible
const menuVisible = (browser) => {
  home.shouldValidMenu();

  browser.end();
};

// Dealine setting
const deadlineSetting = (browser) => {
  home.shouldValidDeadlineSetting();

  browser.end();
};
const hooks = {
  beforeEach,
  afterEach,
};
export default {
  logoutSuccess,
  menuVisible,
  validAssessmentPeriod,
  deadlineSetting,
  hooks,
};
