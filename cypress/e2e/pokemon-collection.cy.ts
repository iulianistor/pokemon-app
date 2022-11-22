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

  it('Clicks the "Previous" button on the first page', () => {
    cy.contains('Previous').click();
  });

  it('Clicks the "Next" button on the first page', () => {
    cy.contains('Next').click();
  });
});
