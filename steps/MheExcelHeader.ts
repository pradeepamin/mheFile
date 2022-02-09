
import {excelHeadersEnum } from "../pages/MheBase";

export const allExcelHeader = {
    [excelHeadersEnum.userGuid]: {
        rowHeaderText: 'User GUID',
        adminHeader: true,
        adminSeq: 1,
    },
    [excelHeadersEnum.userId]: {
        rowHeaderText: 'UserID',
        adminSeq: 2,
        adminHeader: true
    },
    [excelHeadersEnum.role]: {
        rowHeaderText: 'Role',
        adminHeader: true,
        adminSeq: 3
    },
    [excelHeadersEnum.firstName]: {
        rowHeaderText: 'First Name',
        adminHeader: true,
        adminSeq: 4,

        studentHeader: true,
        studentSeq: 3
    },
    [excelHeadersEnum.lastName]: {
        rowHeaderText: 'Last Name',
        adminHeader: true,
        adminSeq: 5,

        studentHeader: true,
        studentSeq: 4
    },
    [excelHeadersEnum.gradeLevel]: {
        rowHeaderText: 'Grade Level',
        adminHeader: true,
        adminSeq: 6,

        studentHeader: true,
        studentSeq: 5
    },
    [excelHeadersEnum.email]: {
        rowHeaderText: 'Email',
        adminHeader: true,
        adminSeq: 7,

        studentHeader: true,
        studentSeq: 6
    },
    [excelHeadersEnum.username]: {
        rowHeaderText: 'Username',
        adminHeader: true,
        adminSeq: 8,

        studentHeader: true,
        studentSeq: 7

    },
    [excelHeadersEnum.password]: {
        rowHeaderText: 'Password',
        adminHeader: true,
        adminSeq: 8,

        studentHeader: true,
        studentSeq: 7

    },
    [excelHeadersEnum.classGUID]: {
        rowHeaderText: 'Class GUID',
        adminHeader: true,
        adminSeq: 10,

        studentHeader: true,
        studentSeq: 9

    },
    [excelHeadersEnum.classID]: {
        rowHeaderText: 'Class ID',
        adminHeader: true,
        adminSeq: 11,

        studentHeader: true,
        studentSeq: 10

    },
    [excelHeadersEnum.className]: {
        rowHeaderText: 'Class Name',
        adminHeader: true,
        adminSeq: 12,

        studentHeader: true,
        studentSeq: 11

    },
    [excelHeadersEnum.classGradeLevel]: {
        rowHeaderText: 'Class Grade Level',
        adminHeader: true,
        adminSeq: 13,

        studentHeader: true,
        studentSeq: 12

    },
    [excelHeadersEnum.classStartDate]: {
        rowHeaderText: 'Class Start Date',
        adminHeader: true,
        adminSeq: 14,

        studentHeader: true,
        studentSeq: 13

    },
    [excelHeadersEnum.classEndDate]: {
        rowHeaderText: 'Class End Date',
        adminHeader: true,
        adminSeq: 15,

        studentHeader: true,
        studentSeq: 14
    },
    [excelHeadersEnum.masterCode]: {
        rowHeaderText: 'Master Code',
        adminHeader: true,
        adminSeq: 16,

        studentHeader: true,
        studentSeq: 15
    },
    [excelHeadersEnum.studentGuid]: {
        rowHeaderText: 'Student GUID',
        studentHeader: true,
        studentSeq: 1
    },
    [excelHeadersEnum.studentId]: {
        rowHeaderText: 'StudentID',
        studentHeader: true,
        studentSeq: 2
    },
    [excelHeadersEnum.emailAddress]: {
        rowHeaderText: 'Email Address'
    }
}

const keysOfExel = Object.keys(allExcelHeader);

//For Admin to to get Header data according to excel sequence
const adminHeaders: any[] = [];
for (let tp of keysOfExel) {
    if (allExcelHeader[tp].adminHeader === true) {
        adminHeaders.push(allExcelHeader[tp]);
        adminHeaders.sort((a, b) => (a.adminSeq > b.adminSeq) ? 1 : ((b.adminSeq > a.adminSeq) ? -1 : 0));
    }
}
var adminHeadersIds = adminHeaders.map((val) => {
    return val.rowHeaderText
})

//For Studnet to to get Header data according to excel sequence
const studentHeaders: any[] = [];
for (let tp of keysOfExel) {
    if (allExcelHeader[tp].studentHeader === true) {
        studentHeaders.push(allExcelHeader[tp]);
        studentHeaders.sort((a, b) => (a.studentSeq > b.studentSeq) ? 1 : ((b.studentSeq > a.studentSeq) ? -1 : 0));
    }
}
var studentHeadersIds = studentHeaders.map((val) => {
    return val.rowHeaderText
})
export class ExcelHeaderBulk {
    adminHeadersIds = adminHeadersIds;
    studentHeadersIds = studentHeadersIds;
}

