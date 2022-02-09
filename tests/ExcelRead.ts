

import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';
import { Workbook, Worksheet, Row, Cell } from 'exceljs';
var Excel = require('exceljs');
describe('Protractor Typescript Demo', function () {
    browser.ignoreSynchronization = true; // for non-angular websites

    it('Excel File Operations', function () {
        // set implicit time to 30 seconds
        console.log(Excel.ValueType, "Excel.ValueType.Number");

        browser.manage().timeouts().implicitlyWait(30000);
        // create object for workbook
        var wb: Workbook = new Workbook();
        // read xlsx file type
        wb.xlsx.readFile("E:/tsMain/tsWithExcelAndProtractor/files/BulkUploadForAdmin.xlsx").then(function () {
            //sheet object
            let obj = {}
            let workSheet: Worksheet = wb.getWorksheet("Sheet1");

            workSheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
                let currRow = workSheet.getRow(rowNumber);
                console.log(currRow.getCell(1).value + ", " + currRow.getCell(2).value + ", " + currRow.getCell(3).value);
                // console.log("1 row :" + row.values[1] +", 2nd row :" +  row.values[2] ); 

                // console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
            });

            // var row = workSheet.getRow(1);
            // console.log(row.getCell(2).value,"cel 22");


            // for(let i=0;i<=sheet.actualRowCount;i++){
            //     console.log(sheet.actualRowCount,"sh.actualRowCountsh.actualRowCount");
            //     if(sheet.getRow(i).getCell(1).value==101){
            //         obj["id"] = sheet.getRow(i).getCell(1).value;
            //         obj["fname"] = sheet.getRow(i).getCell(2).value;
            //         obj["lname"] = sheet.getRow(i).getCell(3).value;
            //         obj["age"] = sheet.getRow(i).getCell(4).value;
            //     }  
            // }
            // console.log(obj,"iiiii");


            // workSheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
            //   //  console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
            //     row.eachCell(function(cell, colNumber) {
            //         console.log('Cell ' + colNumber + ' = ' + JSON.stringify(cell.value));
            //       });
            //   });

            



        });
    });
});

// Extra file of xlsxx
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