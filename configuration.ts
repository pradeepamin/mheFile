import { Config, Capabilities } from "protractor";

export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    Capabilities: {
        browserName: 'chrome'
    },

    specs: ['../features/Test1.feature'],

    cucumberOpts: {
        require: 'JSFiles/features/stepDefination/stepDefs.js'
    }
}
