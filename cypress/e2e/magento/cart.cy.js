require('@cypress/xpath');
import ViewCart from '../../page_object/viewCart';
import '../../support/commands';

describe('View, Update and Delete Cart', () => {
    it('Succes Login, Add Product to Cart, View Cart, Update Size and Color and Delete Product', () => {
        
        cy.login();
        ViewCart.clickProduct();
        ViewCart.clickSize();
        ViewCart.clickColor();
        ViewCart.clickAddCart();
        ViewCart.successAdd();
        ViewCart.viewCart();
        ViewCart.viewDetailCart();

        //Update Cart (Size and Color Product)
        cy.wait(2000);
        cy.xpath('/html[1]/body[1]/div[2]/main[1]/div[3]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[2]/td[1]/div[1]/a[2]').click();
        cy.wait(2000);
        cy.get('#option-label-size-143-item-168').click();
        cy.wait(2000);
        cy.get('#option-label-color-93-item-56').click();
        cy.get('#product-updatecart-button').click();
        cy.wait(2000);
        cy.get('.message-success > div').should('contain','Radiant Tee was updated in your shopping cart.');
        cy.wait(3000);
        cy.get('.action-delete').click();
        cy.wait(1000);
        cy.get('.cart-empty > :nth-child(1)').should('contain', 'You have no items in your shopping cart.')
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught Exception:', err.message);
    return false;
  });