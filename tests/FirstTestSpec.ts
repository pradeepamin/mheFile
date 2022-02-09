//Protractor jasmine

import { browser, element, by, $, $$ } from 'protractor'
import { HomePage } from '../pages/HomePage'

describe("First code to check true or fale", () => {

    let homePage = new HomePage();
    it("It is matching is some creteria", () => {

        homePage.OpenBrowser("http://localhost:8808/")
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
    })
})