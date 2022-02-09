"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
//import {exlHead} from "../steps/MheExcelHeader"
describe('Protractor Typescript Demo', function () {
    let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
    let XLSX = require('xlsx');
    //    console.log(excelHeaderBulk.allHeaderNames, "allllll");
    //    console.log(excelHeaderBulk.studentHeaderNames, "mandatroyy");
    let path = "E:/tsMain/tsWithExcelAndProtractor/files/BulkUploadForAdmin.xlsx";
    let workbook = XLSX.readFile(path);
    let sheetsList = workbook.SheetNames;
    let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetsList[0]], {
        header: 1,
        defval: '',
        blankrows: true
    });
    let bulkUploadHeader = sheetData[0];
    console.log(bulkUploadHeader, "bulkUploadHeader");
    let excelHeaders = [];
    // for(let i of bulkUploadHeader){
    //     excelHeaders.push((i.replace(/[^\w ]/, '').trim()));
    // }
    // console.log(arr1);
    it('CSV File Operations', function () {
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        // let address_of_cell = 'A1';
        // let desired_cell = worksheet[address_of_cell];
        // let desired_value = desired_cell.v;
        // console.log("So value of A1", desired_value);
        // console.log(XLSX.utils.sheet_to_json(worksheet));
        // let json = XLSX.utils.sheet_to_json(worksheet);
        // for (let data in json) {
        //     console.log(json[data]);        //Display all value
        //     console.log(json[data].fname);  //Displat all fname in column
        //     console.log(json[data].age);    //Displat all age in column
        // }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZWxSZWFkeGxzeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL0V4Y2VsUmVhZHhsc3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBaUY7QUFFakYsNERBQXVEO0FBQ3ZELGlEQUFpRDtBQUtqRCxRQUFRLENBQUMsNEJBQTRCLEVBQUU7SUFFbkMsSUFBSSxlQUFlLEdBQUMsSUFBSSxnQ0FBZSxFQUFFLENBQUM7SUFDMUMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLDZEQUE2RDtJQUM3RCxvRUFBb0U7SUFFaEUsSUFBSSxJQUFJLEdBQUcsa0VBQWtFLENBQUM7SUFDOUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFBO0lBRXBDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDckUsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFNBQVMsRUFBRSxJQUFJO0tBQ2xCLENBQUMsQ0FBQztJQUVILElBQUksZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUVsRCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDdEIsa0NBQWtDO0lBQ2xDLDJEQUEyRDtJQUMzRCxJQUFJO0lBQ0oscUJBQXFCO0lBRXJCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUN0QixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUtsRCw4QkFBOEI7UUFDOUIsaURBQWlEO1FBQ2pELHNDQUFzQztRQUN0QyxnREFBZ0Q7UUFDaEQsb0RBQW9EO1FBQ3BELGtEQUFrRDtRQUNsRCwyQkFBMkI7UUFDM0IsMERBQTBEO1FBQzFELG9FQUFvRTtRQUNwRSxrRUFBa0U7UUFDbEUsSUFBSTtJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==