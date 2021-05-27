Feature: Testing Banking application

Background: Launch URL
    Given  I launch the url "http://way2automation.com/angularjs-protractor/banking/#/login"

Scenario Outline: Login Page Test
When I click on Bank Manager Login
And I click on Add customer
And I fill customer details "<FirstName>", "<LastName>", "<PostCode>"
And I click on add customer
Then I should see alert for succsses

Examples:
    | FirstName | LastName | PostCode |
    | Vedant  | Patil  | 444555 |
