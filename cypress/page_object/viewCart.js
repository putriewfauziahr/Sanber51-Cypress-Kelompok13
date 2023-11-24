require('@cypress/xpath');

class ViewCart {
    Visit() {
      cy.visit('https://magento.softwaretestingboard.com/'); 
    }

    clickLogin(){
        cy.contains('Get fit and look fab in new seasonal styles')
        cy.wait(2000);
        cy.xpath('//header/div[1]/div[1]/ul[1]/li[2]/a[1]').click();
    }
  
    fillEmail(Email) {
      cy.get('#email').type(Email);
    }
  
    fillPass(Pass) {
      cy.get('#pass').type(Pass);
    }
  
    submitLoginForm() {
        cy.get('#send2').click();
    }

    clickProduct(){
        cy.wait(2000);
        cy.xpath('//body/div[2]/main[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/ol[1]/li[1]/div[1]/a[1]/span[1]/span[1]/img[1]').click();

    }

    clickSize(){
        cy.get('#option-label-size-143-item-167').click();
    }

    clickColor(){
        cy.get('#option-label-color-93-item-50').click();
    }

    clickAddCart(){
        cy.get('#product-addtocart-button').click();
    }

    successAdd(){
        cy.wait(2000);
        cy.get('.message-success>div').should('contain', 'You added Radiant Tee to your shopping cart.');
    }

    viewCart(){
        cy.wait(3000);
        cy.get('a.action.showcart').click();
    }
    
    viewDetailCart(){
        cy.wait(3000);
        cy.xpath('//span[contains(text(),"View and Edit Cart")]').click();
    }

  }
  
  export default new ViewCart();