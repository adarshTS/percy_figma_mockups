export const config = {
  runner: "local",
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  specs: ["./test/specs/**/*.js"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
      "bstack:options": {
        browserVersion: "120.0",
        os: "Windows",
        osVersion: "10",
      },
      "goog:chromeOptions": {
        args: ["--start-maximized"],
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      "browserstack",
      { browserstackLocal: true, opts: { forcelocal: false } },
      {
        testObservabilityOptions: {
          buildName: "Smoke",
          projectName: "ADx Sample",
        },
      },
    ],
  ],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
