"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelData = void 0;
let XLSX = require('xlsx');
class ExcelData {
    getExcelData(url) {
        let workbook = XLSX.readFile(url);
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
        return excelHeaders;
    }
}
exports.ExcelData = ExcelData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWxIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwcy9leGNlbEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsTUFBYSxTQUFTO0lBQ2xCLFlBQVksQ0FBQyxHQUFXO1FBQ3BCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQTtRQUNwQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JFLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFDSCxJQUFJLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQyxJQUFJLFlBQVksR0FBVSxFQUFFLENBQUM7UUFDN0IsS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsRUFBRTtZQUM1QixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxZQUFZLENBQUE7SUFDdkIsQ0FBQztDQUNKO0FBakJELDhCQWlCQyJ9