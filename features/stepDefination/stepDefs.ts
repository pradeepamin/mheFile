import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by } from "protractor"



Given('I Launch the url', function () {
    browser.get("http://way2automation.com/angularjs-protractor/banking/#/login")
         browser.sleep(4000)
  });