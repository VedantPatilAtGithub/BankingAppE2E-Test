import { Given, When, Then, Before, Status, After } from "cucumber";
import { browser, by, element } from "protractor";
import chai from "chai";
import { Home } from "../../PageObjects/HomePage";
import { Addcustomer } from "../../PageObjects/AddCustomer";

let expect = chai.expect;

let objHome = new Home();
let objAddCustomer = new Addcustomer();

When('I click on Bank Manager Login', { timeout: 60 * 1000 }, async function () {
  await objHome.btnManagerLogin.click();
  await browser.sleep(2000)
});

When('I click on Add customer', { timeout: 60 * 1000 }, async function () {
  await objAddCustomer.addcustomerLink.click()
  await browser.sleep(1000)
});

When('I fill customer details {string}, {string}, {string}', { timeout: 60 * 1000 }, async function (fname, lname, postCode) {
  await objAddCustomer.firstName.sendKeys(fname);
  await objAddCustomer.lastName.sendKeys(lname);
  await objAddCustomer.postCode.sendKeys(postCode)
  await browser.sleep(2000)
});

Then('I click on add customer', { timeout: 60 * 1000 }, async function () {
  await objAddCustomer.AddcustomerButton.click();
  await browser.sleep(2000)
})

Then('I should see alert for succsses', {timeout: 60 * 1000}, async function(){
  //try{
    await browser.switchTo().alert().getText().then( function(popupMsg){
      expect(popupMsg).to.include('Customer added successfully with customer id')
      browser.switchTo().alert().accept();
      browser.sleep(1000);
    })
    
 // }
  //catch(err){
    //console.log("Exception is handled"+err);
  //}
})

Before(async function(){
await browser.manage().deleteAllCookies();
}) 
  

After(async function(scenario){
  if(scenario.result.status === Status.FAILED){
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
})