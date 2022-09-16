Feature: Calculator
  This API has a calculator so people can use it.

  Scenario: Adds Numbers
    Given the first number is 20
    And the second number is 30
    When a user adds them
    Then the result should be 50

  Scenario: Subtracts Numbers
    Given the first number is 50
    And the second number is 20
    When a user subtracts them
    Then the result should be 30
