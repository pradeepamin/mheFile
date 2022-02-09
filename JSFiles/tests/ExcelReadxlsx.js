"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
const excelHelper_1 = require("../steps/excelHelper");
const environment_1 = require("../pages/environment");
let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
let excelData = new excelHelper_1.ExcelData();
describe('To check Header data matches the spec', function () {
    let adminExcelData = excelData.getExcelData(environment_1.environment.excelLinkForAdmin);
    it('To check excel headers matches or not for "BulkUploadForAdmin"', function () {
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        expect(adminExcelData).toEqual(excelHeaderBulk.adminHeadersIds);
    });
});
describe('To check Header data matches the spec', function () {
    let studentExcelData = excelData.getExcelData(environment_1.environment.excelLinkForStudent);
    it('To check excel headers matches or not for "BulkUploadForAdmin"', function () {
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        expect(studentExcelData).toEqual(excelHeaderBulk.studentHeadersIds);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZWxSZWFkeGxzeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL0V4Y2VsUmVhZHhsc3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBaUY7QUFDakYsNERBQXlEO0FBQ3pELHNEQUFpRDtBQUNqRCxzREFBZ0Q7QUFFaEQsSUFBSSxlQUFlLEdBQUcsSUFBSSxnQ0FBZSxFQUFFLENBQUM7QUFDNUMsSUFBSSxTQUFTLEdBQUMsSUFBSSx1QkFBUyxFQUFFLENBQUM7QUFFOUIsUUFBUSxDQUFDLHVDQUF1QyxFQUFFO0lBQzlDLElBQUksY0FBYyxHQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBRXhFLEVBQUUsQ0FBQyxnRUFBZ0UsRUFBRTtRQUNqRSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUNuRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLHVDQUF1QyxFQUFFO0lBQzlDLElBQUksZ0JBQWdCLEdBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFFNUUsRUFBRSxDQUFDLGdFQUFnRSxFQUFFO1FBQ2pFLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUN2RSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=