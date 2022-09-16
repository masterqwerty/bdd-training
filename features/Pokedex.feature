Feature: Pokedex
  This API has a pokedex to satisfy user's nerdy needs.

  Scenario: Retrieves pokemon by Id
    Given the id is 25
    When the user retrieves that id from the pokedex
    Then the result should be Pikachu
