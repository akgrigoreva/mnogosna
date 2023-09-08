describe('Profile data updating', () => {
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://mnogosna.ru/tipy-matrasov/');

    });
    it('Open Profile menu and Log out', () => {
        cy.get('search-input').type('матрас аскона 160х200');
    });
});