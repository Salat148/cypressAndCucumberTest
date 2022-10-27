Feature: Code Fresh feature

    Background:
        Given I go to codefresh

    Scenario: Success Login
        When A user enters the username "codefresh-v2-e2e-managed-runtime", the password "wZ9MXp3e8j9WUQhBZCHT", and clicks on the login button
        Given I go to codefresh
        When I open profile dropdown
        When I click on " codefresh-v2-e2e-playground-dummy " button
        Then The user with "codefresh-v2-e2e-playground-dummy" name is displayed
        When I open profile dropdown
        When I click on " codefresh-v2-e2e-managed-runtime-dummy " button
        Then The user with "codefresh-v2-e2e-managed-runtime" name is displayed

    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | testName | secret_sauce |
        Then The error message "Username or password incorrect" is displayed

    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username      | password     |
            | standard_user | testPassword |
        Then The error message "Username or password incorrect" is displayed

