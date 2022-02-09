let XLSX = require('xlsx');
export class ExcelData {
    getExcelData(url: string) {
        let workbook = XLSX.readFile(url)
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
        return excelHeaders
    }
}