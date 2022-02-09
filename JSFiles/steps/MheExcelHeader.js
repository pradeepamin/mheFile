"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelHeaderBulk = exports.allExcelHeader = void 0;
const MheBase_1 = require("../pages/MheBase");
exports.allExcelHeader = {
    [MheBase_1.excelHeadersEnum.userGuid]: {
        rowHeaderText: 'User GUID',
        adminHeader: true,
        adminSeq: 1,
    },
    [MheBase_1.excelHeadersEnum.userId]: {
        rowHeaderText: 'UserID',
        adminSeq: 2,
        adminHeader: true
    },
    [MheBase_1.excelHeadersEnum.role]: {
        rowHeaderText: 'Role',
        adminHeader: true,
        adminSeq: 3
    },
    [MheBase_1.excelHeadersEnum.firstName]: {
        rowHeaderText: 'First Name',
        adminHeader: true,
        adminSeq: 4,
        studentHeader: true,
        studentSeq: 3
    },
    [MheBase_1.excelHeadersEnum.lastName]: {
        rowHeaderText: 'Last Name',
        adminHeader: true,
        adminSeq: 5,
        studentHeader: true,
        studentSeq: 4
    },
    [MheBase_1.excelHeadersEnum.gradeLevel]: {
        rowHeaderText: 'Grade Level',
        adminHeader: true,
        adminSeq: 6,
        studentHeader: true,
        studentSeq: 5
    },
    [MheBase_1.excelHeadersEnum.email]: {
        rowHeaderText: 'Email',
        adminHeader: true,
        adminSeq: 7,
        studentHeader: true,
        studentSeq: 6
    },
    [MheBase_1.excelHeadersEnum.username]: {
        rowHeaderText: 'Username',
        adminHeader: true,
        adminSeq: 8,
        studentHeader: true,
        studentSeq: 7
    },
    [MheBase_1.excelHeadersEnum.password]: {
        rowHeaderText: 'Password',
        adminHeader: true,
        adminSeq: 8,
        studentHeader: true,
        studentSeq: 7
    },
    [MheBase_1.excelHeadersEnum.classGUID]: {
        rowHeaderText: 'Class GUID',
        adminHeader: true,
        adminSeq: 10,
        studentHeader: true,
        studentSeq: 9
    },
    [MheBase_1.excelHeadersEnum.classID]: {
        rowHeaderText: 'Class ID',
        adminHeader: true,
        adminSeq: 11,
        studentHeader: true,
        studentSeq: 10
    },
    [MheBase_1.excelHeadersEnum.className]: {
        rowHeaderText: 'Class Name',
        adminHeader: true,
        adminSeq: 12,
        studentHeader: true,
        studentSeq: 11
    },
    [MheBase_1.excelHeadersEnum.classGradeLevel]: {
        rowHeaderText: 'Class Grade Level',
        adminHeader: true,
        adminSeq: 13,
        studentHeader: true,
        studentSeq: 12
    },
    [MheBase_1.excelHeadersEnum.classStartDate]: {
        rowHeaderText: 'Class Start Date',
        adminHeader: true,
        adminSeq: 14,
        studentHeader: true,
        studentSeq: 13
    },
    [MheBase_1.excelHeadersEnum.classEndDate]: {
        rowHeaderText: 'Class End Date',
        adminHeader: true,
        adminSeq: 15,
        studentHeader: true,
        studentSeq: 14
    },
    [MheBase_1.excelHeadersEnum.masterCode]: {
        rowHeaderText: 'Master Code',
        adminHeader: true,
        adminSeq: 16,
        studentHeader: true,
        studentSeq: 15
    },
    [MheBase_1.excelHeadersEnum.studentGuid]: {
        rowHeaderText: 'Student GUID',
        studentHeader: true,
        studentSeq: 1
    },
    [MheBase_1.excelHeadersEnum.studentId]: {
        rowHeaderText: 'StudentID',
        studentHeader: true,
        studentSeq: 2
    },
    [MheBase_1.excelHeadersEnum.emailAddress]: {
        rowHeaderText: 'Email Address'
    }
};
const keysOfExel = Object.keys(exports.allExcelHeader);
//For Admin to to get Header data according to excel sequence
const adminHeaders = [];
for (let tp of keysOfExel) {
    if (exports.allExcelHeader[tp].adminHeader === true) {
        adminHeaders.push(exports.allExcelHeader[tp]);
        adminHeaders.sort((a, b) => (a.adminSeq > b.adminSeq) ? 1 : ((b.adminSeq > a.adminSeq) ? -1 : 0));
    }
}
var adminHeadersIds = adminHeaders.map((val) => {
    return val.rowHeaderText;
});
//For Studnet to to get Header data according to excel sequence
const studentHeaders = [];
for (let tp of keysOfExel) {
    if (exports.allExcelHeader[tp].studentHeader === true) {
        studentHeaders.push(exports.allExcelHeader[tp]);
        studentHeaders.sort((a, b) => (a.studentSeq > b.studentSeq) ? 1 : ((b.studentSeq > a.studentSeq) ? -1 : 0));
    }
}
var studentHeadersIds = studentHeaders.map((val) => {
    return val.rowHeaderText;
});
class ExcelHeaderBulk {
    constructor() {
        this.adminHeadersIds = adminHeadersIds;
        this.studentHeadersIds = studentHeadersIds;
    }
}
exports.ExcelHeaderBulk = ExcelHeaderBulk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWhlRXhjZWxIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwcy9NaGVFeGNlbEhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4Q0FBNkU7QUFFaEUsUUFBQSxjQUFjLEdBQUc7SUFDMUIsQ0FBQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QixhQUFhLEVBQUUsV0FBVztRQUMxQixXQUFXLEVBQUUsSUFBSTtRQUNqQixRQUFRLEVBQUUsQ0FBQztLQUNkO0lBQ0QsQ0FBQywwQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN2QixhQUFhLEVBQUUsUUFBUTtRQUN2QixRQUFRLEVBQUUsQ0FBQztRQUNYLFdBQVcsRUFBRSxJQUFJO0tBQ3BCO0lBQ0QsQ0FBQywwQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixhQUFhLEVBQUUsTUFBTTtRQUNyQixXQUFXLEVBQUUsSUFBSTtRQUNqQixRQUFRLEVBQUUsQ0FBQztLQUNkO0lBQ0QsQ0FBQywwQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUMxQixhQUFhLEVBQUUsWUFBWTtRQUMzQixXQUFXLEVBQUUsSUFBSTtRQUNqQixRQUFRLEVBQUUsQ0FBQztRQUVYLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsQ0FBQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QixhQUFhLEVBQUUsV0FBVztRQUMxQixXQUFXLEVBQUUsSUFBSTtRQUNqQixRQUFRLEVBQUUsQ0FBQztRQUVYLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsQ0FBQywwQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUMzQixhQUFhLEVBQUUsYUFBYTtRQUM1QixXQUFXLEVBQUUsSUFBSTtRQUNqQixRQUFRLEVBQUUsQ0FBQztRQUVYLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUs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