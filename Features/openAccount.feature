Feature: Testing open account feature of banking application
        Background: Launch url
                Given  I launch the url "http://way2automation.com/angularjs-protractor/banking/#/login"
        Scenario Outline: Testing open account page

                When I click on Bank Manager Login
                And I click on Open account
                And I Select options from dropdown
                And I click on process
                Then I should see alert for succsses