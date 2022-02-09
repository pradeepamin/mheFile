"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
//Protractor jasmine
const protractor_1 = require("protractor");
const BasePage_1 = require("./BasePage");
//Identify heading
const Locators = {
    heading: {
        type: BasePage_1.IdntificationType[BasePage_1.IdntificationType.Xpath],
        value: "//h2[contains(.,'Selenium Framework development')]"
    },
    headings: {
        type: BasePage_1.IdntificationType[BasePage_1.IdntificationType.Css],
        value: ".well.hoverwell.thumbnail>h2"
    }
};
class HomePage extends BasePage_1.BasePage {
    constructor() {
        //Before Enum
        //heading = element(by.xpath("//h2[contains(.,'Selenium Framework development')]"))
        super(...arguments);
        //After enum shortcut
        this.heading = this.ElementLocator(Locators.heading);
        this.headings = (0, protractor_1.$$)(".well.hoverwell.thumbnail>h2");
    }
    async OpenBrowser(url) {
        await protractor_1.browser.get(url);
        await protractor_1.browser.sleep(200);
    }
    async GetAllHeading() {
        await this.headings.getText().then((text => {
            console.log("all Heading,", text);
        }));
    }
    ClickHeading() {
        var _a;
        (_a = this.heading) === null || _a === void 0 ? void 0 : _a.click();
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9Ib21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQkFBb0I7QUFDcEIsMkNBQXFFO0FBQ3JFLHlDQUF5RDtBQUV6RCxrQkFBa0I7QUFDbEIsTUFBTSxRQUFRLEdBQUc7SUFDYixPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsNEJBQWlCLENBQUMsNEJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQ2hELEtBQUssRUFBRSxvREFBb0Q7S0FDOUQ7SUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsNEJBQWlCLENBQUMsNEJBQWlCLENBQUMsR0FBRyxDQUFDO1FBQzlDLEtBQUssRUFBRSw4QkFBOEI7S0FDeEM7Q0FDSixDQUFBO0FBRUQsTUFBYSxRQUFTLFNBQVEsbUJBQVE7SUFBdEM7UUFDSSxhQUFhO1FBQ2IsbUZBQW1GOztRQUVuRixxQkFBcUI7UUFDckIsWUFBTyxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTdDLGFBQVEsR0FBRyxJQUFBLGVBQUUsRUFBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBZWxELENBQUM7SUFiRyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQVc7UUFDekIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDRCxLQUFLLENBQUMsYUFBYTtRQUNmLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1AsQ0FBQztJQUVELFlBQVk7O1FBQ1IsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0o7QUF0QkQsNEJBc0JDIn0=