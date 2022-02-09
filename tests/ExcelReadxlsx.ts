
import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { ExcelHeaderBulk } from "../steps/MheExcelHeader"
let XLSX = require('xlsx');

let excelHeaderBulk = new ExcelHeaderBulk();
describe('To check Header data matches the spec', function () {
    let path = "C:/Users/Pradeep/Downloads/BulkUploadForAdmin.xlsx";
    let workbook = XLSX.readFile(path)
    let sheetsList = workbook.SheetNames

    let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetsList[0]], {
        header: 1,
        defval: '',
        blankrows: true
    });
    let bulkUploadHeader = sheetData[0];

    let excelHeaders: any[] = [];
    for (let i of bulkUploadHeader) {
        excelHeaders.push((i.replace(/[^\w ]/, '').trim()));
    }

    it('To check excel headers matches or not for "BulkUploadForAdmin"', function () {
        browser.manage().timeouts().implicitlyWait(30000);
        expect(excelHeaders).toEqual(excelHeaderBulk.adminHeadersIds)
    });


});

describe('To check Header data matches the spec', function () {
    let path = "C:/Users/Pradeep/Downloads/BulkUploadForTeacher.xlsx";
    let workbook = XLSX.readFile(path)
    let sheetsList = workbook.SheetNames

    let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetsList[0]], {
        header: 1,
        defval: '',
        blankrows: true
    });
    let bulkUploadHeader = sheetData[0];

    let excelHeaders: any[] = [];
    for (let i of bulkUploadHeader) {
        excelHeaders.push((i.replace(/[^\w ]/, '').trim()));
    }

    it('To check excel headers matches or not for "BulkUploadForAdmin"', function () {
        browser.manage().timeouts().implicitlyWait(30000);
        expect(excelHeaders).toEqual(excelHeaderBulk.studentHeadersIds)
    });
});

