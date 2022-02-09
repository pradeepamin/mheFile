//Protractor jasmine

import { browser, element, by, $, $$ } from 'protractor'
import { HomePage } from '../pages/HomePage'
import { CourseDetailsPage } from "../pages/CourseDetails"
import { getuid } from 'process'


describe("First code to check true or fale", () => {

    //Admin
    

    //Techer
    let arr = [
        'User GUID',
        'Role',
        'UserID',
    ]
    let arr2 = [
        'User GUID',
        'UserID',
        'Role'
    ]
    let homePage = new HomePage();
    let courseDetailsPage = new CourseDetailsPage();


    it("It is matching is some creteria", async () => {

        await homePage.OpenBrowser("http://localhost:8808/")
        await homePage.GetAllHeading();
        homePage.ClickHeading();

    })


    it("arrrra passs", async () => {

        await homePage.OpenBrowser("http://localhost:8808/")

    

        expect(arr).toEqual(arr2);
      

    })


})









describe("Demp des", () => {
    it("case file", () => {
        let a = 12;
        expect(a).toBe(12)
    })
})