import { Given, When, Then } from "cucumber";
import { browser, by, element } from "protractor";
import chai from "chai";
import { Home } from "../../PageObjects/HomePage";
import { Addcustomer } from "../../PageObjects/AddCustomer";

let expect = chai.expect;

let objHome = new Home();
let objAddCustomer = new Addcustomer();


  