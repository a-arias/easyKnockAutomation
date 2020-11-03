
import data from '../selectors/locators.json';

context('Sell and Stay Leaseback functionality', () => {
  beforeEach(() => {
    cy.showMeLeaseBackCalculator();
  });

  it('should be able calculate the correct estimated cash proceeds using correct values', () => {
    //#Fills home value input.
    cy.get(data.homeValueInputLocator).type("200,000");

    //#Fills Other Liens input.
    cy.get(data.OtherLiensInputLocator).type("5000");

    //#Fills mortgage Balance input.
    cy.get(data.mortgageBalanceInputLocator).type("10000");

    //#Clicks calculate button.
    cy.get(data.calculateButtonLocator).contains("Calculate").click();

    //# Asserts title is displayed correclty.
    cy.get(data.titleMessageLocator).contains("Estimated cash proceeds at closing");

    //# Asserts results amount was calculated correctly.
    cy.get(data.resultsAmountLocator).contains("118,000");

    //#Perform  pixel perfect test on the screeen, making sure we did not break anything in the UI
    cy.percySnapshot();
  });

  it('should Not be able calculate the correct cash proceeds using a bigger Morgtage balance than the home value', () => {
    //#Fills home value input.
    cy.get(data.homeValueInputLocator).type("200,000");

    //#Fills Other Liens input.
    cy.get(data.OtherLiensInputLocator).type("5000");

    //#Fills mortgage Balance input.
    cy.get(data.mortgageBalanceInputLocator).type("300,000");

    //#Clicks calculate button.
    cy.get(data.calculateButtonLocator).contains("Calculate").click();

    //# Asserts results amount was calculated correctly.
    cy.get(data.calculationResultErrorLocator).contains("Based on your inputs for home value, mortgage balance, or other liens, you may not qualify for an EasyKnock product. Fill out the qualification form to see if you qualify today.");

    //#Perform  pixel perfect test on the screeen, making sure we did not break anything in the UI
    cy.percySnapshot();
  });

  it('should Not be able calculate cash proceeds using an Equal Liens amount as the home value', () => {
    //#Fills home value input.
    cy.get(data.homeValueInputLocator).type("200,000");

    //#Fills Other Liens input.
    cy.get(data.OtherLiensInputLocator).type("200,000");

    //#Fills mortgage Balance input.
    cy.get(data.mortgageBalanceInputLocator).type("10,000");

    //#Clicks calculate button.
    cy.get(data.calculateButtonLocator).contains("Calculate").click();

    //# Asserts results amount was calculated correctly.
    cy.get(data.calculationResultErrorLocator).contains("Based on your inputs for home value, mortgage balance, or other liens, you may not qualify for an EasyKnock product. Fill out the qualification form to see if you qualify today.");

    //#Perform  pixel perfect test on the screeen, making sure we did not break anything in the UI
    cy.percySnapshot();
  });

  it('should Not be able calculate cash proceeds using a bigger Liens amount as the home value', () => {
    //#Fills home value input.
    cy.get(data.homeValueInputLocator).type("200,000");

    //#Fills Other Liens input.
    cy.get(data.OtherLiensInputLocator).type("300,000");

    //#Fills mortgage Balance input.
    cy.get(data.mortgageBalanceInputLocator).type("10,000");

    //#Clicks calculate button.
    cy.get(data.calculateButtonLocator).contains("Calculate").click();

    //# Asserts results amount was calculated correctly.
    cy.get(data.calculationResultErrorLocator).contains("Based on your inputs for home value, mortgage balance, or other liens, you may not qualify for an EasyKnock product. Fill out the qualification form to see if you qualify today.");

    //#Perform  pixel perfect test on the screeen, making sure we did not break anything in the UI
    cy.percySnapshot();
  });
});