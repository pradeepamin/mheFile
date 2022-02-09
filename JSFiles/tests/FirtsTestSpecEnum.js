"use strict";
//Protractor jasmine
Object.defineProperty(exports, "__esModule", { value: true });
const HomePage_1 = require("../pages/HomePage");
const CourseDetails_1 = require("../pages/CourseDetails");
describe("First code to check true or fale", () => {
    //Admin
    //Techer
    let arr = [
        'User GUID',
        'Role',
        'UserID',
    ];
    let arr2 = [
        'User GUID',
        'UserID',
        'Role'
    ];
    let homePage = new HomePage_1.HomePage();
    let courseDetailsPage = new CourseDetails_1.CourseDetailsPage();
    it("It is matching is some creteria", async () => {
        await homePage.OpenBrowser("http://localhost:8808/");
        await homePage.GetAllHeading();
        homePage.ClickHeading();
    });
    it("arrrra passs", async () => {
        await homePage.OpenBrowser("http://localhost:8808/");
        expect(arr).toEqual(arr2);
    });
});
describe("Demp des", () => {
    it("case file", () => {
        let a = 12;
        expect(a).toBe(12);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlydHNUZXN0U3BlY0VudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0cy9GaXJ0c1Rlc3RTcGVjRW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9COztBQUdwQixnREFBNEM7QUFDNUMsMERBQTBEO0FBSTFELFFBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7SUFFOUMsT0FBTztJQUdQLFFBQVE7SUFDUixJQUFJLEdBQUcsR0FBRztRQUNOLFdBQVc7UUFDWCxNQUFNO1FBQ04sUUFBUTtLQUNYLENBQUE7SUFDRCxJQUFJLElBQUksR0FBRztRQUNQLFdBQVc7UUFDWCxRQUFRO1FBQ1IsTUFBTTtLQUNULENBQUE7SUFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUM5QixJQUFJLGlCQUFpQixHQUFHLElBQUksaUNBQWlCLEVBQUUsQ0FBQztJQUdoRCxFQUFFLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFN0MsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDcEQsTUFBTSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0IsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTVCLENBQUMsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLGNBQWMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUUxQixNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUlwRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRzlCLENBQUMsQ0FBQyxDQUFBO0FBR04sQ0FBQyxDQUFDLENBQUE7QUFVRixRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUN0QixFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3RCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==