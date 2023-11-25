require('@cypress/xpath');
import viewCart from '../../page_object/viewCart';
import ViewCart from '../../page_object/viewCart';
import '../../support/commands';

describe('Choose Product', () => {
    describe('Women', () => {
        // Choose Product for Women, but not choosing size and color
        it('Choose Product for Women (Negative)', () => {
            cy.login();
            cy.get('#ui-id-4').contains('Women');
            cy.get('#ui-id-4 > :nth-child(2)').click();
            cy.wait(1000);
            cy.get('.products-grid > .product-items').should('be.visible');
            cy.get('.products-grid > .product-items > :nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click();
            cy.get('#product-addtocart-button').click();
            cy.contains('This is a required field.').should('be.visible');
        });
        
        // Choose Product for Women and choosing size and color
        it('Choose Product for Women (Positive)', () => {
            cy.login();
            cy.get('#ui-id-4').contains('Women');
            cy.get('#ui-id-4 > :nth-child(2)').click();
            cy.wait(1000);
            cy.get('.products-grid > .product-items').should('be.visible');
            cy.get('.products-grid > .product-items > :nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click();
            cy.get('#option-label-size-143-item-168').click();
            cy.get('#option-label-color-93-item-50').click();
            cy.get('#qty').clear().type('2');
            cy.get('#product-addtocart-button').click();
        });
    })
    
    describe('Men', () => {
        // Choose Product for Men, choosing size and color but empty the quantity
        it('Choose Product for Men (Negative)', () => {
            cy.login();
            cy.get('#ui-id-5').contains('Men');
            cy.get('#ui-id-5 > :nth-child(2)').click();
            cy.wait(1000);
            cy.get('.products-grid > .product-items').should('be.visible');
            cy.get('.products-grid > .product-items > :nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click();
            cy.get('#option-label-size-143-item-168').click();
            cy.get('#option-label-color-93-item-52').click();
            cy.get('#qty').clear();
            cy.get('#product-addtocart-button').click();
            cy.contains('Please enter a valid number in this field.').should('be.visible');
        });

        // Choose Product for Men, choosing size, color and the quantity is not empty
        it('Choose Product for Men', () => {
            cy.login();
            cy.get('#ui-id-5').contains('Men');
            cy.get('#ui-id-5 > :nth-child(2)').click();
            cy.wait(1000);
            cy.get('.products-grid > .product-items').should('be.visible');
            cy.get('.products-grid > .product-items > :nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click();
            cy.get('#option-label-size-143-item-168').click();
            cy.get('#option-label-color-93-item-52').click();
            cy.get('#qty').clear().type('3');
            cy.get('#product-addtocart-button').click();
        });
    })

    describe('Gear', () => {
        // Choose Gear, but empty the quantity
        it('Choose Gear (Negative)', () => {
            cy.login();
            cy.get('#ui-id-6').contains('Gear');
            cy.get('#ui-id-6 > :nth-child(2)').click();
            cy.wait(1000);
            cy.get('.products-grid > .product-items').should('be.visible');
            cy.get('.products-grid > .product-items > :nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click();
            cy.get('#qty').clear();
            cy.get('#product-addtocart-button').click();
            cy.contains('Please enter a valid number in this field.').should('be.visible');
        });

        // Choose Gear, choosing color and the quantity is not empty
        it('Choose Gear (Positive)', () => {
            cy.login();
            cy.get('#ui-id-6').contains('Gear');
            cy.get('#ui-id-6 > :nth-child(2)').click();
            cy.wait(1000);
            cy.get('.products-grid > .product-items').should('be.visible');
            cy.get('.products-grid > .product-items > :nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click();
            cy.get('#qty').clear().type('3');
            cy.get('#product-addtocart-button').click();
        });
    })

    describe('Choose New Product', () => {
        // Choose New Product, but not choosing size, color and empty the quantity
        it('Choose New Product (Negative)', () => {
            cy.login();
            cy.get('#ui-id-3').contains('What\'s New');
            cy.get('#ui-id-3 > span').click();
            cy.wait(1000);
            cy.get('.products-grid > .product-items').should('be.visible');
            cy.get('.products-grid > .product-items > :nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click();
            cy.get('#qty').clear();
            cy.get('#product-addtocart-button').click();
            cy.contains('This is a required field.').should('be.visible');
            cy.contains('Please enter a valid number in this field.').should('be.visible');
        });

        // Choose New Product, choosing size, color and the quantity is not empty
        it('Choose New Product (Positive)', () => {
            cy.login();
            cy.get('#ui-id-3').contains('What\'s New');
            cy.get('#ui-id-3 > span').click();
            cy.wait(1000);
            cy.get('.products-grid > .product-items').should('be.visible');
            cy.get('.products-grid > .product-items > :nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click();
            cy.get('#option-label-size-143-item-169').click();
            cy.get('#option-label-color-93-item-59').click();
            cy.get('#product-addtocart-button').click();
        });
    }) 
});