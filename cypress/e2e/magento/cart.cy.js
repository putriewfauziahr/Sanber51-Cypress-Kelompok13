require('@cypress/xpath');
import viewCart from '../../page_object/viewCart';
import ViewCart from '../../page_object/viewCart';
import '../../support/commands';


describe('View, Update and Delete Cart', () => {
    it('Succes Login, Add Product to Cart, View Cart, Update Size and Color and Delete Product', () => {
        //Testcase 1. Login and Add Product to Cart
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
        cy.get('.message-success > div').should('contain','was updated in your shopping cart.');

        //Delete Product
       cy.wait(2000);
       cy.get('.action-delete').click();
        cy.wait(1000);
        cy.get('.cart-empty > :nth-child(1)').should('contain', 'You have no items in your shopping cart.')
        cy.wait(2000);
    });

    //Testcase 2. Update Quantity of Product
  it('Positif Case - Update Quantity of Product', () => {
    cy.login();

    ViewCart.clickProduct();
    ViewCart.clickSize();
    ViewCart.clickColor();
    ViewCart.clickAddCart();
    ViewCart.successAdd();
    ViewCart.viewCart();
    ViewCart.viewDetailCart();
    cy.wait(3000);
    cy.xpath('/html[1]/body[1]/div[2]/main[1]/div[3]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/label[1]/input[1]').clear();
    cy.wait(2000);
    cy.xpath('/html[1]/body[1]/div[2]/main[1]/div[3]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/label[1]/input[1]').type('3');
    cy.wait(2000);
    cy.xpath('//span[contains(text(),"Update Shopping Cart")]').click();
    cy.wait(3000);
    cy.xpath('/html[1]/body[1]/div[2]/main[1]/div[3]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/label[1]/input[1]').should('have.value', '3');
    cy.wait(2000);
});

  //Testcase 3. Update Quantity of Product Become 0
  it('Negative Case - Update Quantity of Product Become 0', () => {
    cy.login();

    ViewCart.clickProduct();
    ViewCart.clickSize();
    ViewCart.clickColor();
    ViewCart.clickAddCart();
    ViewCart.successAdd();
    ViewCart.viewCart();
    ViewCart.viewDetailCart();
    cy.wait(3000);
    cy.xpath('/html[1]/body[1]/div[2]/main[1]/div[3]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/label[1]/input[1]').clear();
    cy.wait(2000);
    cy.xpath('/html[1]/body[1]/div[2]/main[1]/div[3]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/label[1]/input[1]').type('0');
    cy.wait(2000);
    cy.xpath('//span[contains(text(),"Update Shopping Cart")]').click();
    cy.wait(3000);
    cy.xpath('/html[1]/body[1]/div[2]/main[1]/div[3]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/label[1]/div[1]').should('contain','Please enter a number greater than 0 in this field.');
    cy.wait(2000); 
});


//Testcase 4. Update Quantity of Product Become 6554556
  it('Negative Case - Update Quantity of Product More Than Max', () => {
    cy.login();

    ViewCart.clickProduct();
    ViewCart.clickSize();
    ViewCart.clickColor();
    ViewCart.clickAddCart();
    ViewCart.successAdd();
    ViewCart.viewCart();
    ViewCart.viewDetailCart();
    cy.wait(3000);
    cy.xpath('/html[1]/body[1]/div[2]/main[1]/div[3]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/label[1]/input[1]').clear();
    cy.wait(2000);
    cy.xpath('/html[1]/body[1]/div[2]/main[1]/div[3]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/label[1]/input[1]').type('6554556');
    cy.wait(2000);
    cy.xpath('//span[contains(text(),"Update Shopping Cart")]').click();
    cy.wait(2000);
    cy.xpath('//div[contains(text(),"The requested qty exceeds the maximum qty allowed")]').should('contain','The requested qty exceeds the maximum qty allowed in shopping cart');
    cy.wait(1000);
    cy.get('.action-primary > span').click();
    cy.wait(3000);
  });


//Testcase 5. View Cart and Add Another Product
  it('Positif Case - View Cart and Add Another Product', () => {
    cy.login();

    ViewCart.clickProduct();
    ViewCart.clickSize();
    ViewCart.clickColor();
    ViewCart.clickAddCart();
    ViewCart.successAdd();
    ViewCart.viewCart();
    ViewCart.viewDetailCart();

    cy.wait(3000);
    cy.get(':nth-child(1)>.product-item-info>.details>.actions>.actions-primary>form>.action>span').click();
    cy.wait(3000);
    cy.get('.message-success > div').should('contain','You added');
  });
});


Cypress.on('uncaught:exception', (err, runnable) => {
    // Log pesan kesalahan atau lakukan tindakan khusus
    console.error('Uncaught Exception:', err.message);
    return false; // Tidak menghentikan pengujian secara otomatis
  });