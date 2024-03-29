describe('Pagination tests', () => {
  it('checks that the the first pokemon is rendered', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', {
      fixture: 'pokemon-first-page.json',
    });
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', {
      fixture: 'pokemon-1.json',
    });
    cy.visit('/');
    cy.get('pka-pokemon').first().contains('Wulbasaur');
  });

  it('checks that the the "Previous" button is disabled on the first page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', {
      fixture: 'pokemon-first-page.json',
    });
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', {
      fixture: 'pokemon-1.json',
    });
    cy.visit('/');
    cy.contains('Previous').click();
    cy.get('pka-pokemon').first().contains('Wulbasaur');
  });

  it('checks that the "Next" button is enabled and renders a different pokemon', () => {
    cy.intercept(
      'GET',
      'https://pokeapi.co/api/v2/pokemon?limit=12&offset=12',
      {
        fixture: 'pokemon-second-page.json',
      }
    );
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', {
      fixture: 'pokemon-13.json',
    });
    cy.visit('/');
    cy.contains('Next').click();
    cy.get('pka-pokemon').first().contains('Teedle');
  });

  it('checks that the "Next" button is disabled on the last page by clicking it twice', () => {
    cy.intercept(
      'GET',
      'https://pokeapi.co/api/v2/pokemon?limit=12&offset=1152',
      {
        fixture: 'pokemon-last-page.json',
      }
    );
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', {
      fixture: 'pokemon-10248.json',
    }).as('getPokemon');
    cy.visit('/');
    cy.wait('@getPokemon').then(() => {
      cy.contains('Next').click();
      cy.contains('Next').click();
      cy.get('pka-pokemon').first().contains('Masculegion-female');
    });
  });
});
