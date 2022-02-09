"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = exports.IdntificationType = void 0;
//Protractor jasmine
const protractor_1 = require("protractor");
var IdntificationType;
(function (IdntificationType) {
    IdntificationType[IdntificationType["Id"] = 0] = "Id";
    IdntificationType[IdntificationType["Name"] = 1] = "Name";
    IdntificationType[IdntificationType["Css"] = 2] = "Css";
    IdntificationType[IdntificationType["Xpath"] = 3] = "Xpath";
    IdntificationType[IdntificationType["LinkText"] = 4] = "LinkText";
})(IdntificationType = exports.IdntificationType || (exports.IdntificationType = {}));
class BasePage {
    ElementLocator(obj) {
        if (obj.type == IdntificationType[IdntificationType.Css]) {
            return (0, protractor_1.element)(protractor_1.by.css(obj.value));
        }
        else if (obj.type == IdntificationType[IdntificationType.Xpath]) {
            return (0, protractor_1.element)(protractor_1.by.xpath(obj.value));
        }
        else if (obj.tyoe == IdntificationType[IdntificationType.Id]) {
            return (0, protractor_1.element)(protractor_1.by.id(obj.val));
        }
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9CYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQkFBb0I7QUFDcEIsMkNBQXdEO0FBRXhELElBQVksaUJBTVg7QUFORCxXQUFZLGlCQUFpQjtJQUN6QixxREFBRSxDQUFBO0lBQ0YseURBQUksQ0FBQTtJQUNKLHVEQUFHLENBQUE7SUFDSCwyREFBSyxDQUFBO0lBQ0wsaUVBQVEsQ0FBQTtBQUNaLENBQUMsRUFOVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQU01QjtBQUVELE1BQWEsUUFBUTtJQUNqQixjQUFjLENBQUMsR0FBRztRQUNkLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0RCxPQUFPLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ3BDO2FBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9ELE9BQU8sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDdEM7YUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDNUQsT0FBTyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUNqQztJQUNMLENBQUM7Q0FDSjtBQVZELDRCQVVDIn0=