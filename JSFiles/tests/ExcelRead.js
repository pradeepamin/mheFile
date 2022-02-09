"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
var Excel = require('exceljs');
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    it('Excel File Operations', function () {
        // set implicit time to 30 seconds
        console.log(Excel.ValueType, "Excel.ValueType.Number");
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        // create object for workbook
        var wb = new exceljs_1.Workbook();
        // read xlsx file type
        wb.xlsx.readFile("E:/tsMain/tsWithExcelAndProtractor/files/BulkUploadForAdmin.xlsx").then(function () {
            //sheet object
            let obj = {};
            let workSheet = wb.getWorksheet("Sheet1");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZWxSZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvRXhjZWxSZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkNBQWlGO0FBRWpGLHFDQUF5RDtBQUN6RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ25DLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUMsMkJBQTJCO0lBRWpFLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTtRQUN4QixrQ0FBa0M7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFFdkQsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsNkJBQTZCO1FBQzdCLElBQUksRUFBRSxHQUFhLElBQUksa0JBQVEsRUFBRSxDQUFDO1FBQ2xDLHNCQUFzQjtRQUN0QixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN0RixjQUFjO1lBQ2QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO1lBQ1osSUFBSSxTQUFTLEdBQWMsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVyRCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLFNBQVM7Z0JBQzlELElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxRyw0RUFBNEU7Z0JBRTVFLHdFQUF3RTtZQUM1RSxDQUFDLENBQUMsQ0FBQztZQUVILGlDQUFpQztZQUNqQyw4Q0FBOEM7WUFHOUMsNENBQTRDO1lBQzVDLDhFQUE4RTtZQUM5RSxpREFBaUQ7WUFDakQsd0RBQXdEO1lBQ3hELDJEQUEyRDtZQUMzRCwyREFBMkQ7WUFDM0QseURBQXlEO1lBQ3pELFVBQVU7WUFDVixJQUFJO1lBQ0osNEJBQTRCO1lBRzVCLHVFQUF1RTtZQUN2RSw4RUFBOEU7WUFDOUUsK0NBQStDO1lBQy9DLGlGQUFpRjtZQUNqRixZQUFZO1lBQ1osUUFBUTtRQU1aLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILHNCQUFzQjtBQUNyQiw4QkFBOEI7QUFDdkIsaURBQWlEO0FBQ2pELHNDQUFzQztBQUN0QyxnREFBZ0Q7QUFDaEQsb0RBQW9EO0FBQ3BELGtEQUFrRDtBQUNsRCwyQkFBMkI7QUFDM0IsMERBQTBEO0FBQzFELG9FQUFvRTtBQUNwRSxrRUFBa0U7QUFDbEUsSUFBSSJ9