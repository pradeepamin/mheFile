"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
(0, cucumber_1.Given)('First code in cucumber', { timeout: 60 * 1000 }, function () {
    protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    protractor_1.browser.sleep(4000);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcERlZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9mZWF0dXJlcy9zdGVwRGVmaW5hdGlvbi9zdGVwRGVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFtRTtBQUNuRSwyQ0FBaUQ7QUFFakQsSUFBQSxnQkFBSyxFQUFDLHdCQUF3QixFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsR0FBQyxJQUFJLEVBQUMsRUFBQztJQUM3QyxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFBO0lBQ3hELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQyxDQUFBIn0=