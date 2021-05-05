"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const conf = require('./lib/config');
const commands = require('./lib/commands');
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/e2e-pay.ts'
    ],
    exclude: [],
    maxInstances: conf.maxInstance,
    capabilities: [{
            maxInstances: 5,
            browserName: conf.browser,
            acceptInsecureCerts: true
        }],
    logLevel: conf.logLevel,
    bail: conf.bail,
    baseUrl: conf.baseURL,
    waitforTimeout: conf.timeout,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000
    },
    before: (capabilities, specs) => {
        browser.addCommand('waitAndClick', commands.waitAndClick);
    },
};
