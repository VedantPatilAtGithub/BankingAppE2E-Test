"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const HomePage_1 = require("../../PageObjects/HomePage");
const AddCustomer_1 = require("../../PageObjects/AddCustomer");
let expect = chai_1.default.expect;
let objHome = new HomePage_1.Home();
let objAddCustomer = new AddCustomer_1.Addcustomer();
cucumber_1.When('I click on Bank Manager Login', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objHome.btnManagerLogin.click();
        yield protractor_1.browser.sleep(2000);
    });
});
cucumber_1.When('I click on Add customer', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objAddCustomer.addcustomerLink.click();
        yield protractor_1.browser.sleep(1000);
    });
});
cucumber_1.When('I fill customer details {string}, {string}, {string}', { timeout: 60 * 1000 }, function (fname, lname, postCode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objAddCustomer.firstName.sendKeys(fname);
        yield objAddCustomer.lastName.sendKeys(lname);
        yield objAddCustomer.postCode.sendKeys(postCode);
        yield protractor_1.browser.sleep(2000);
    });
});
cucumber_1.Then('I click on add customer', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objAddCustomer.AddcustomerButton.click();
        yield protractor_1.browser.sleep(2000);
    });
});
cucumber_1.Then('I should see alert for succsses', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        //try{
        yield protractor_1.browser.switchTo().alert().getText().then(function (popupMsg) {
            expect(popupMsg).to.include('Customer added successfully with customer id');
            protractor_1.browser.switchTo().alert().accept();
            protractor_1.browser.sleep(1000);
        });
        // }
        //catch(err){
        //console.log("Exception is handled"+err);
        //}
    });
});
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().deleteAllCookies();
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL3N0ZXBfZGVmaW5hdGlvbnMvc3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFvRTtBQUNwRSwyQ0FBa0Q7QUFDbEQsZ0RBQXdCO0FBQ3hCLHlEQUFrRDtBQUNsRCwrREFBNEQ7QUFFNUQsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQUksRUFBRSxDQUFDO0FBQ3pCLElBQUksY0FBYyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRXZDLGVBQUksQ0FBQywrQkFBK0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBQzVELE1BQU0sT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFOztRQUN0RCxNQUFNLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDNUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMzQixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNEQUFzRCxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxVQUFnQixLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVE7O1FBQ3pILE1BQU0sY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsTUFBTSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxNQUFNLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBQ3RELE1BQU0sY0FBYyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9DLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyxpQ0FBaUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFDLEVBQUU7O1FBQzVELE1BQU07UUFDSixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFFLFVBQVMsUUFBUTtZQUNoRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO1lBQzNFLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFFTCxJQUFJO1FBQ0gsYUFBYTtRQUNYLDBDQUEwQztRQUM1QyxHQUFHO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVGLGlCQUFNLENBQUM7O1FBQ1AsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUMsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUdGLGdCQUFLLENBQUMsVUFBZSxRQUFROztRQUMzQixJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFDO1lBQzFDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7Q0FBQSxDQUFDLENBQUEifQ==