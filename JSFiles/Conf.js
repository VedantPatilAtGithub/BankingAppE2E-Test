"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR1csUUFBQSxNQUFNLEdBQVc7SUFDeEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsaUJBQWlCLEVBQUU7UUFDbkIsTUFBTTtRQUNOLCtCQUErQjtRQUMvQixPQUFPO1FBQ0w7WUFDRSxhQUFhLEVBQUUsUUFBUTtTQUN4QjtLQUNGO0lBRUQsS0FBSyxFQUFFLENBQUMsMkJBQTJCO0tBQ2xDO0lBRUQsWUFBWSxFQUFFO1FBQ1YsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxNQUFNLEVBQUUsNkJBQTZCO1FBQ3JDLDZDQUE2QztRQUM3Qyx5Q0FBeUM7UUFFekMsVUFBVSxFQUFFLEdBQUcsRUFBRTtZQUNiLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBRWpELElBQUksT0FBTyxHQUFHO2dCQUNWLEtBQUssRUFBRSxXQUFXO2dCQUNsQixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQyxzQkFBc0IsRUFBRSxJQUFJO2dCQUM1QixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFO29CQUNOLGFBQWEsRUFBRSxPQUFPO29CQUN0QixrQkFBa0IsRUFBRSxTQUFTO29CQUM3QixTQUFTLEVBQUUscUJBQXFCO29CQUNoQyxVQUFVLEVBQUUsWUFBWTtvQkFDeEIsVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2lCQUN2QjthQUNKLENBQUM7WUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9CLENBQUM7S0FDSjtJQUNELE9BQU8sRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsbURBQW1ELENBQUM7WUFDN0UsT0FBTyxFQUFFO2dCQUNMLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLDRCQUE0QixFQUFFLElBQUk7Z0JBQ2xDLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLFNBQVMsRUFBRSxpQkFBaUI7Z0JBQzVCLFVBQVUsRUFBRSxvREFBb0Q7Z0JBQ2hFLFVBQVUsRUFBRTtvQkFDUixLQUFLLEVBQUUsNkJBQTZCO29CQUNwQyxJQUFJLEVBQUU7d0JBQ0YsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxrQ0FBa0MsRUFBRTt3QkFDL0QsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7cUJBQ2pEO2lCQUNKO2FBQ0o7U0FFSixDQUFDO0NBQ0wsQ0FBQSJ9