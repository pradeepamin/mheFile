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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWxSZWFkeGxzeC1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvZXhjZWxSZWFkeGxzeC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQWlGO0FBQ2pGLDREQUF5RDtBQUN6RCxzREFBaUQ7QUFDakQsc0RBQWdEO0FBRWhELElBQUksZUFBZSxHQUFHLElBQUksZ0NBQWUsRUFBRSxDQUFDO0FBQzVDLElBQUksU0FBUyxHQUFDLElBQUksdUJBQVMsRUFBRSxDQUFDO0FBRTlCLFFBQVEsQ0FBQyx1Q0FBdUMsRUFBRTtJQUM5QyxJQUFJLGNBQWMsR0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUV4RSxFQUFFLENBQUMsZ0VBQWdFLEVBQUU7UUFDakUsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyx1Q0FBdUMsRUFBRTtJQUM5QyxJQUFJLGdCQUFnQixHQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBRTVFLEVBQUUsQ0FBQyxnRUFBZ0UsRUFBRTtRQUNqRSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDdkUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9