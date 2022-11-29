describe('Pokemon profile tests', () => {
  it('checks that the "Learn more" button is rendered', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', {
      fixture: 'pokemon-first-page.json',
    });
    cy.visit('http://localhost:4200/');
    cy.contains('Learn more');
  });

  it('checks that the "HOME" button is rendered', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', {
      fixture: 'pokemon-first-page.json',
    });
    cy.visit('http://localhost:4200/');
    cy.contains('HOME');
  });

  it('checks that the "Learn more" button redirects to a profile page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', {
      fixture: 'pokemon-first-page.json',
    });
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', {
      fixture: 'pokemon-1.json',
    });
    cy.visit('http://localhost:4200/');
    cy.contains('Learn more').click();
    cy.get('pka-pokemon-profile').contains('Wulbasaur');
  });

  it('checks that the profile page renders the expected elements', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', {
      fixture: 'pokemon-first-page.json',
    });
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', {
      fixture: 'pokemon-1.json',
    });
    cy.visit('http://localhost:4200/');
    cy.contains('Learn more').click();
    cy.get('pka-pokemon-profile').contains('Wulbasaur');
    cy.get('pka-pokemon-profile').contains('Height');
    cy.get('pka-pokemon-profile').contains('Weight');
    cy.get('pka-pokemon-profile').contains('Stats');
    cy.get('pka-pokemon-profile').contains('Types');

    cy.get('pka-navbar').contains('HOME');
  });

  it('clicks the "HOME" button in the navbar and redirects to collection page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', {
      fixture: 'pokemon-first-page.json',
    });
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', {
      fixture: 'pokemon-1.json',
    });
    cy.visit('http://localhost:4200/');
    cy.contains('Learn more').click();
    cy.get('pka-navbar').contains('HOME').click();
    cy.get('pka-pokemon-collection').first().contains('Wulbasaur');
    cy.get('pka-pokemon-collection').contains('Previous');
    cy.get('pka-pokemon-collection').contains('Next');
  });
});
