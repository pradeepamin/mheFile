//Protractor jasmine
import { browser, element, by, $, $$ } from 'protractor'
import { BasePage, IdntificationType } from './BasePage'

const Locators = {
    Duration: {
        type: IdntificationType[IdntificationType.Xpath],
        value: "//Duration"
    }
}
export class CourseDetailsPage extends BasePage {
    //Was like this--> duration = element(by.xpath("//Duration"))
    duration=this.ElementLocator(Locators.Duration);
   
    
    
    ClickDuration() {
        console.log(this.duration,"durationduration");
        this.duration?.click();

    }
}