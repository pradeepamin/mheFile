//Protractor jasmine
import { browser, element, by, $, $$ } from 'protractor'

export enum IdntificationType {
    Id,
    Name,
    Css,
    Xpath,
    LinkText
}

export class BasePage {
    ElementLocator(obj) {
        if (obj.type == IdntificationType[IdntificationType.Css]) {
            return element(by.css(obj.value))
        } else if (obj.type == IdntificationType[IdntificationType.Xpath]) {
            return element(by.xpath(obj.value))
        } else if (obj.tyoe == IdntificationType[IdntificationType.Id]) {
            return element(by.id(obj.val))
        }
    }
}