"use strict";
//Protractor jasmine
Object.defineProperty(exports, "__esModule", { value: true });
const HomePage_1 = require("../pages/HomePage");
describe("First code to check true or fale", () => {
    let homePage = new HomePage_1.HomePage();
    it("It is matching is some creteria", () => {
        homePage.OpenBrowser("http://localhost:8808/");
        homePage.GetAllHeading();
        homePage.ClickHeading();
        //Clikc only Selenium Framework development
        //    var heading=element(by.xpath("//h2[contains(.,'Selenium Framework development')]"))
        //    heading.click();
        // Get only one heading
        // var heading = element(by.css(".well.hoverwell.thumbnail>h2"))
        // heading.getText().then((txt) => {
        //     console.log("text", txt);
        // })
        //Get all Heading
        //    var heading=element.all(by.css(".well.hoverwell.thumbnail>h2"))
        //     //heading.click();
        //     heading.getText().then((txt)=>{
        //         console.log("text",txt);
        //     })
        // var heading = element(by.css("[ng-reflect-router-link='/course,1'] > h2"))
        // heading.getText().then((text)=>{
        //     console.log(text,"textttttt");
        // })
        // heading.click();
        // var heading = $$(".well.hoverwell.thumbnail>h2");
        // heading.getText().then((text => {
        //     console.log("txt,", text);
        // }))
        // var heading=element(by.xpath("//course-thumb/div/h2[text()='Selenium Framework development')]")).element(by.xpath("//span[contains(text(),'4th')]"));
        // console.log(heading,"headingheading");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyc3RUZXN0U3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL0ZpcnN0VGVzdFNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjs7QUFHcEIsZ0RBQTRDO0FBRTVDLFFBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7SUFFOUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFDOUIsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsRUFBRTtRQUV2QyxRQUFRLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDOUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QiwyQ0FBMkM7UUFDM0MseUZBQXlGO1FBQ3pGLHNCQUFzQjtRQUV0Qix1QkFBdUI7UUFDdkIsZ0VBQWdFO1FBQ2hFLG9DQUFvQztRQUNwQyxnQ0FBZ0M7UUFDaEMsS0FBSztRQUVMLGlCQUFpQjtRQUNqQixxRUFBcUU7UUFDckUseUJBQXlCO1FBQ3pCLHNDQUFzQztRQUN0QyxtQ0FBbUM7UUFDbkMsU0FBUztRQUVULDZFQUE2RTtRQUM3RSxtQ0FBbUM7UUFDbkMscUNBQXFDO1FBQ3JDLEtBQUs7UUFDTCxtQkFBbUI7UUFFbkIsb0RBQW9EO1FBQ3BELG9DQUFvQztRQUNwQyxpQ0FBaUM7UUFDakMsTUFBTTtRQUVOLHdKQUF3SjtRQUN4Six5Q0FBeUM7SUFDN0MsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9