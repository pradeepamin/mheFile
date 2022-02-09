"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
let XLSX = require('xlsx');
let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
describe('To check Header data matches the spec', function () {
    let path = "C:/Users/Pradeep/Downloads/BulkUploadForAdmin.xlsx";
    let workbook = XLSX.readFile(path);
    let sheetsList = workbook.SheetNames;
    let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetsList[0]], {
        header: 1,
        defval: '',
        blankrows: true
    });
    let bulkUploadHeader = sheetData[0];
    let excelHeaders = [];
    for (let i of bulkUploadHeader) {
        excelHeaders.push((i.replace(/[^\w ]/, '').trim()));
    }
    it('To check excel headers matches or not for "BulkUploadForAdmin"', function () {
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        expect(excelHeaders).toEqual(excelHeaderBulk.adminHeadersIds);
    });
});
describe('To check Header data matches the spec', function () {
    let path = "C:/Users/Pradeep/Downloads/BulkUploadForTeacher.xlsx";
    let workbook = XLSX.readFile(path);
    let sheetsList = workbook.SheetNames;
    let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetsList[0]], {
        header: 1,
        defval: '',
        blankrows: true
    });
    let bulkUploadHeader = sheetData[0];
    let excelHeaders = [];
    for (let i of bulkUploadHeader) {
        excelHeaders.push((i.replace(/[^\w ]/, '').trim()));
    }
    console.log(excelHeaders, "excelHeadersexcelHeaders");
    it('To check excel headers matches or not for "BulkUploadForAdmin"', function () {
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        expect(excelHeaders).toEqual(excelHeaderBulk.studentHeadersIds);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZWxSZWFkeGxzeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL0V4Y2VsUmVhZHhsc3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBaUY7QUFDakYsNERBQXlEO0FBQ3pELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzQixJQUFJLGVBQWUsR0FBRyxJQUFJLGdDQUFlLEVBQUUsQ0FBQztBQUM1QyxRQUFRLENBQUMsdUNBQXVDLEVBQUU7SUFDOUMsSUFBSSxJQUFJLEdBQUcsb0RBQW9ELENBQUM7SUFDaEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFBO0lBRXBDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDckUsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFNBQVMsRUFBRSxJQUFJO0tBQ2xCLENBQUMsQ0FBQztJQUNILElBQUksZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBDLElBQUksWUFBWSxHQUFVLEVBQUUsQ0FBQztJQUM3QixLQUFLLElBQUksQ0FBQyxJQUFJLGdCQUFnQixFQUFFO1FBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkQ7SUFFRCxFQUFFLENBQUMsZ0VBQWdFLEVBQUU7UUFDakUsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDakUsQ0FBQyxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyx1Q0FBdUMsRUFBRTtJQUM5QyxJQUFJLElBQUksR0FBRyxzREFBc0QsQ0FBQztJQUNsRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2xDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUE7SUFFcEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNyRSxNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxFQUFFO1FBQ1YsU0FBUyxFQUFFLElBQUk7S0FDbEIsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEMsSUFBSSxZQUFZLEdBQVUsRUFBRSxDQUFDO0lBQzdCLEtBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCLEVBQUU7UUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2RDtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLDBCQUEwQixDQUFDLENBQUM7SUFHckQsRUFBRSxDQUFDLGdFQUFnRSxFQUFFO1FBQ2pFLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9