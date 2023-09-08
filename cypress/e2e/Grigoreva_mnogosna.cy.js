describe('Test assignment', () => {
    before(() => {
        cy.viewport(1024, 827);
        cy.visit('https://mnogosna.ru/tipy-matrasov/');
        cy.get('a[data-id="852581"]').contains('Да, все верно').click();
    });
    it('Type in Search field and inspect search results', () => {
        cy.get('input[type="search"]').first().click();
        cy.get('input[id="search-input"]').type('матрас аскона 160х200', {force: true});
        cy.get('button').contains('Найти').click({force: true});
        cy.wait(1000);
        cy.get('#slinks-popular-query').within(() => {
            cy.get('a').first().invoke('text').then(text => {
                var trimmed = text.trim();
                expect(trimmed).to.eq('Топперы Аскона 160х200');
            });
            cy.get('a').first().invoke('attr', 'href').then(href => {
                expect(href).to.eq('/tipy-matrasov/topper/ascona/160x200/');
            });
            /* we can make additional check by the following
            but it will make our test a little longer
            because we will have to repeat the search*/
            // cy.get('a').first().click();
            // cy.url().should('eq', 'https://mnogosna.ru/tipy-matrasov/topper/ascona/160x200/');
        });
        cy.get('#slinks-popular-goods').within(() => {
            cy.get('div[class="pop-card"]').first().within(() => {
                cy.get('a').eq(1).invoke('text').then(text => {
                    var trimmed = text.trim();
                    expect(trimmed).to.eq('Матрас Аскона Фитнес Формула 160x200');
                });
                cy.get('a').first().find('img').invoke('attr', 'src').then(source => {
                    expect(source).to.eq('/upload/iblock/afe/zqj01rmc90p1v2qk05f8m0dnxorou6lk/thumbs/1x/product_img_163.jpg')
                });
            });
        });
    });
});