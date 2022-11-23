describe('My First Test', () => {
  it('Visits the PokeApp default localhost', () => {
    cy.visit('http://localhost:4200/');
  });

  it('Finds the "Previous" button', () => {
    cy.contains('Previous');
  });

  it('Finds the "Next" button', () => {
    cy.contains('Next');
  });

  it('Clicks the "Previous" button on the first page and checks if the content has changed', () => {
    const firstPokemon = cy.get('pka-pokemon').first();
    cy.contains('Previous').click();
    firstPokemon.contains('Bulbasaur');
  });

  it('Clicks the "Next" button on the first page and checks if the content has changed', () => {
    cy.contains('Next').click();
    cy.get('pka-pokemon').first().contains('Weedle');
  });
});
