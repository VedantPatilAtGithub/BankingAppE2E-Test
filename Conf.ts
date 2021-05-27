import { Config, Capabilities } from "protractor";
import * as reporter from "cucumber-html-reporter"

export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    multiCapabilities: [
    //   {
    //     'browserName': 'firefox'
    //   },
      {
        'browserName': 'chrome'
      }
    ],

    specs: ['../Features/Test1.feature'
    ],

    cucumberOpts: {
        require: 'Features/step_definations',
        format: 'json:./cucumberreports.json',
        // format: ['progress', 'pretty:output.txt'],
        //format:'pretty:./cucumberreports2.txt',

        onComplete: () => {
            var reporter = require('cucumber-html-reporter');

            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreports.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome 85.0.4183.83",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };

            reporter.generate(options);

        },
    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            openReportInBrowser: true,
            pageTitle: "E2E Test Report",
            pageFooter: "<div><p>E2E Test for Banking Application</p></div>",
            customData: {
                title: 'Protractor Cucucmber Report',
                data: [
                    { label: 'Project', value: 'E2E Test for Banking Application' },
                    { label: 'Created By', value: 'Vedant Patil' }
                ]
            }
        },

    }]
}