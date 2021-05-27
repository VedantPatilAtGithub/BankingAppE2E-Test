import { Given } from "cucumber";
import { browser } from "protractor";

Given('I launch the url {string}', { timeout: 60 * 1000 }, async function (url) {
    await browser.waitForAngularEnabled(false);
    await browser.get(url)
      await browser.manage().window().maximize();
      await browser.sleep(2000);
})