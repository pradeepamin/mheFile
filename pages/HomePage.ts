//Protractor jasmine
import { browser, element, by, protractor, $$, $ } from "protractor";
import { BasePage, IdntificationType } from "./BasePage";

//Identify heading
const Locators = {
    heading: {
        type: IdntificationType[IdntificationType.Xpath],
        value: "//h2[contains(.,'Selenium Framework development')]"
    },
    headings: {
        type: IdntificationType[IdntificationType.Css],
        value: ".well.hoverwell.thumbnail>h2"
    }
}

export class HomePage extends BasePage{
    //Before Enum
    //heading = element(by.xpath("//h2[contains(.,'Selenium Framework development')]"))
    
    //After enum shortcut
    heading=this.ElementLocator(Locators.heading)

    headings = $$(".well.hoverwell.thumbnail>h2");

    async OpenBrowser(url: string) {
        await browser.get(url)
        await browser.sleep(200)
    }
    async GetAllHeading() {
        await this.headings.getText().then((text => {
            console.log("all Heading,", text);
        }))
    }

    ClickHeading() {
        this.heading?.click();
    }
}