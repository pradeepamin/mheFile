
import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { ExcelHeaderBulk } from "../steps/MheExcelHeader"
import { ExcelData } from '../steps/excelHelper';
import {environment} from "../pages/environment"

let excelHeaderBulk = new ExcelHeaderBulk();
let excelData=new ExcelData();

describe('To check Header data matches the spec', function () {
    let adminExcelData=excelData.getExcelData(environment.excelLinkForAdmin)

    it('To check excel headers matches or not for "BulkUploadForAdmin"', function () {
        browser.manage().timeouts().implicitlyWait(30000);
        expect(adminExcelData).toEqual(excelHeaderBulk.adminHeadersIds)
    });
});

describe('To check Header data matches the spec', function () {
    let studentExcelData=excelData.getExcelData(environment.excelLinkForStudent)

    it('To check excel headers matches or not for "BulkUploadForAdmin"', function () {
        browser.manage().timeouts().implicitlyWait(30000);
        expect(studentExcelData).toEqual(excelHeaderBulk.studentHeadersIds)
    });
});
//Added comment one line code again

