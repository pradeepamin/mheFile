
import { browser, element, by, ExpectedConditions, protractor } from 'protractor'

import {ExcelHeaderBulk} from "../steps/MheExcelHeader"
//import {exlHead} from "../steps/MheExcelHeader"

describe('Protractor Typescript Demo', function () {

    let excelHeaderBulk=new ExcelHeaderBulk();
    let XLSX = require('xlsx');
//    console.log(excelHeaderBulk.allHeaderNames, "allllll");
//    console.log(excelHeaderBulk.studentHeaderNames, "mandatroyy");
    
    let path = "E:/tsMain/tsWithExcelAndProtractor/files/BulkUploadForAdmin.xlsx";
    let workbook = XLSX.readFile(path)
    let sheetsList = workbook.SheetNames

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
        browser.manage().timeouts().implicitlyWait(30000);




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
