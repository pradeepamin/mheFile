"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelHeaderBulk = exports.allExcelHeader = void 0;
const MheBase_1 = require("../pages/MheBase");
exports.allExcelHeader = {
    [MheBase_1.excelHeadersEnum.userGuid]: {
        rowHeaderText: 'User GUID',
        admin: true,
        forStudent: true,
        forAdmin: 0,
        forStudentSeq: 0
    },
    [MheBase_1.excelHeadersEnum.userId]: {
        rowHeaderText: '* UserID',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.role]: {
        rowHeaderText: '* Role',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.firstName]: {
        rowHeaderText: '* First Name',
        admin: true,
        forStudent: true,
        forStudentSeq: 2
    },
    [MheBase_1.excelHeadersEnum.lastName]: {
        rowHeaderText: '* Last Name',
        admin: true,
        forStudent: true,
        forStudentSeq: 3
    },
    [MheBase_1.excelHeadersEnum.gradeLevel]: {
        rowHeaderText: 'Grade Level',
        admin: true,
        forStudent: true,
        forStudentSeq: 4
    },
    [MheBase_1.excelHeadersEnum.email]: {
        rowHeaderText: 'Email',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.username]: {
        rowHeaderText: 'Username',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.password]: {
        rowHeaderText: 'Password',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.classGUID]: {
        rowHeaderText: 'Class GUID',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.classID]: {
        rowHeaderText: 'Class ID',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.className]: {
        rowHeaderText: '* Class Name',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.classGradeLevel]: {
        rowHeaderText: '* Class Grade Level',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.classStartDate]: {
        rowHeaderText: '* Class Start Date',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.classEndDate]: {
        rowHeaderText: '* Class End Date',
        admin: true
    },
    [MheBase_1.excelHeadersEnum.masterCode]: {
        rowHeaderText: '* Master Code',
        admin: true,
        forStudent: true,
        forStudentSeq: 6
    },
    [MheBase_1.excelHeadersEnum.masterCode]: {
        rowHeaderText: '* Master Code',
        admin: true,
        forStudent: true,
        forStudentSeq: 6
    },
    [MheBase_1.excelHeadersEnum.studentId]: {
        rowHeaderText: '* Student ID',
        forStudent: true,
        forStudentSeq: 1
    },
    [MheBase_1.excelHeadersEnum.emailAddress]: {
        rowHeaderText: 'Email Address',
        forStudent: true,
        forStudentSeq: 5
    }
};
console.log(exports.allExcelHeader, "allExcelHeaderallExcelHeader");
const keysOfExel = Object.keys(exports.allExcelHeader);
const allHeaderNames = [];
const studentHeaders = [];
const studentHeaderss = [];
for (let tp of keysOfExel) {
    if (exports.allExcelHeader[tp].admin === true) {
        allHeaderNames.push(exports.allExcelHeader[tp].rowHeaderText);
    }
    if (exports.allExcelHeader[tp].forStudent === true) {
        studentHeaders.push(exports.allExcelHeader[tp]);
        studentHeaders.sort((a, b) => (a.forStudentSeq > b.forStudentSeq) ? 1 : ((b.forStudentSeq > a.forStudentSeq) ? -1 : 0));
    }
}
var newArr = studentHeaders.map((val) => {
    return val.rowHeaderText;
});
console.log(newArr, "xxxxxxxxxxxxxx");
// console.log(allHeaderNames, "Mandatory");
// console.log(studentHeaderNames, "not Mandatory");
class ExcelHeaderBulk {
    constructor() {
        this.excelHeaders = {
            userGuid: 'User GUID',
            userId: 'UserID',
            role: 'Role',
            firstName: 'First Name',
            lastName: 'Last Name',
            gradeLevel: 'Grade Level',
            email: 'Email',
            username: 'Username',
            password: 'Password',
            classGUID: 'Class GUID',
            classID: 'Class ID',
            className: 'Class Name',
            classGradeLevel: 'Class Grade Level',
            classStartDate: 'Class Start Date',
            classEndDate: 'Class End Date',
            masterCode: 'Master Code'
        };
        this.mandatoryHeaderNames = allHeaderNames;
        this.allHeaderNames = studentHeaders;
    }
}
exports.ExcelHeaderBulk = ExcelHeaderBulk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWhlRXhjZWxIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwcy9NaGVFeGNlbEhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4Q0FBNkU7QUFFaEUsUUFBQSxjQUFjLEdBQUc7SUFDMUIsQ0FBQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QixhQUFhLEVBQUUsV0FBVztRQUMxQixLQUFLLEVBQUUsSUFBSTtRQUNYLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFFBQVEsRUFBQyxDQUFDO1FBQ1YsYUFBYSxFQUFDLENBQUM7S0FDbEI7SUFDRCxDQUFDLDBCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3ZCLGFBQWEsRUFBRSxVQUFVO1FBQ3pCLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxDQUFDLDBCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLEtBQUssRUFBRSxJQUFJO0tBQ2Q7SUFDRCxDQUFDLDBCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzFCLGFBQWEsRUFBRSxjQUFjO1FBQzdCLEtBQUssRUFBRSxJQUFJO1FBQ1gsVUFBVSxFQUFFLElBQUk7UUFDaEIsYUFBYSxFQUFDLENBQUM7S0FDbEI7SUFDRCxDQUFDLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3pCLGFBQWEsRUFBRSxhQUFhO1FBQzVCLEtBQUssRUFBRSxJQUFJO1FBQ1gsVUFBVSxFQUFFLElBQUk7UUFDaEIsYUFBYSxFQUFDLENBQUM7S0FDbEI7SUFDRCxDQUFDLDBCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQzNCLGFBQWEsRUFBRSxhQUFhO1FBQzVCLEtBQUssRUFBRSxJQUFJO1FBQ1gsVUFBVSxFQUFFLElBQUk7UUFDaEIsYUFBYSxFQUFDLENBQUM7S0FDbEI7SUFDRCxDQUFDLDBCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLGFBQWEs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