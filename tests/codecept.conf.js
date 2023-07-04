const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://www.saucedemo.com",
      show: true,
      browser: "chromium",
    },
  },
  include: {
    I: "./steps_file.js",

    loginPage: "./pages/login.js",
    additemtocartPage: "./pages/additemtocart.js",
    cartitemcheckoutPage: "./pages/cartitemcheckout.js",
    requestdemoPage: "./pages/requestdemo.js",
    logoutPage: "./pages/logout.js"
  },
  mocha: {
    reporterOptions: {
      mochaFile: "output/result.xml",
      reportDir: "output",
    },
  },
  name: "Test_poc",
  plugins: {
    retryFailedstep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
      screenshotsForAllureReport: true,
    },
    /*stepByStepReport:{
      enabled: true,
    },*/
    allure: {
      enabled: true,
      //require: '@codeceptjs/allure-legacy',
      
    },
    /*multiple:{
      parallel :{
        chunks: 2
      },
    },*/
  },
};
