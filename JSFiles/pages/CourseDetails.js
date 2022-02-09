"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseDetailsPage = void 0;
const BasePage_1 = require("./BasePage");
const Locators = {
    Duration: {
        type: BasePage_1.IdntificationType[BasePage_1.IdntificationType.Xpath],
        value: "//Duration"
    }
};
class CourseDetailsPage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        //Was like this--> duration = element(by.xpath("//Duration"))
        this.duration = this.ElementLocator(Locators.Duration);
    }
    ClickDuration() {
        var _a;
        console.log(this.duration, "durationduration");
        (_a = this.duration) === null || _a === void 0 ? void 0 : _a.click();
    }
}
exports.CourseDetailsPage = CourseDetailsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291cnNlRGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL0NvdXJzZURldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEseUNBQXdEO0FBRXhELE1BQU0sUUFBUSxHQUFHO0lBQ2IsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLDRCQUFpQixDQUFDLDRCQUFpQixDQUFDLEtBQUssQ0FBQztRQUNoRCxLQUFLLEVBQUUsWUFBWTtLQUN0QjtDQUNKLENBQUE7QUFDRCxNQUFhLGlCQUFrQixTQUFRLG1CQUFRO0lBQS9DOztRQUNJLDZEQUE2RDtRQUM3RCxhQUFRLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFTcEQsQ0FBQztJQUxHLGFBQWE7O1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUMsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxLQUFLLEVBQUUsQ0FBQztJQUUzQixDQUFDO0NBQ0o7QUFYRCw4Q0FXQyJ9