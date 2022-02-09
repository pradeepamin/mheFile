
import { ExcelHeaders, exlHeader, excelHeadersEnum } from "../pages/MheBase";

export const allExcelHeader = {
    [excelHeadersEnum.userGuid]: {
        rowHeaderText: 'User GUID',
        admin: true,
        forStudent: true,
        adminSeq: 1,
        forStudentSeq: 0
    },
    [excelHeadersEnum.userId]: {
        rowHeaderText: 'UserID',
        adminSeq: 2,
        admin: true
    },
    [excelHeadersEnum.role]: {
        rowHeaderText: 'Role',
        adminSeq: 3,
        admin: true
    },
    [excelHeadersEnum.firstName]: {
        rowHeaderText: 'First Name',
        admin: true,
        forStudent: true,
        adminSeq: 4,
        forStudentSeq: 2
    },
    [excelHeadersEnum.lastName]: {
        rowHeaderText: 'Last Name',
        admin: true,
        forStudent: true,
        adminSeq: 5,
        forStudentSeq: 3
    },
    [excelHeadersEnum.gradeLevel]: {
        rowHeaderText: 'Grade Level',
        admin: true,
        forStudent: true,
        adminSeq: 6,
        forStudentSeq: 4
    },
    [excelHeadersEnum.email]: {
        rowHeaderText: 'Email',
        adminSeq: 7,
        admin: true
    },
    [excelHeadersEnum.username]: {
        rowHeaderText: 'Username',
        adminSeq: 8,
        admin: true
    },
    [excelHeadersEnum.password]: {
        rowHeaderText: 'Password',
        adminSeq: 9,
        admin: true
    },
    [excelHeadersEnum.classGUID]: {
        rowHeaderText: 'Class GUID',
        adminSeq: 10,
        admin: true
    },
    [excelHeadersEnum.classID]: {
        rowHeaderText: 'Class ID',
        adminSeq: 11,
        admin: true
    },
    [excelHeadersEnum.className]: {
        rowHeaderText: 'Class Name',
        adminSeq: 12,
        admin: true
    },
    [excelHeadersEnum.classGradeLevel]: {
        rowHeaderText: 'Class Grade Level',
        adminSeq: 13,
        admin: true
    },
    [excelHeadersEnum.classStartDate]: {
        rowHeaderText: 'Class Start Date',
        adminSeq: 14,
        admin: true
    },
    [excelHeadersEnum.classEndDate]: {
        rowHeaderText: 'Class End Date',
        adminSeq: 15,
        admin: true
    },
    [excelHeadersEnum.masterCode]: {
        rowHeaderText: 'Master Code',
        admin: true,
        forStudent: true,
        adminSeq: 16,
        forStudentSeq: 6
    },
    [excelHeadersEnum.studentId]: {
        rowHeaderText: 'Student ID',
        forStudent: true,
        forStudentSeq: 1
    },
    [excelHeadersEnum.emailAddress]: {
        rowHeaderText: 'Email Address',
        forStudent: true,
        forStudentSeq: 5
    }
}
console.log(allExcelHeader, "allExcelHeaderallExcelHeader");

const keysOfExel = Object.keys(allExcelHeader);

const allHeaderNames: string[] = [];
const studentHeaders: any[] = [];
const studentHeaderss: any[] = [];
for (let tp of keysOfExel) {
    if (allExcelHeader[tp].admin === true) {
        allHeaderNames.push(allExcelHeader[tp].rowHeaderText);
    }
    if (allExcelHeader[tp].forStudent === true) {
        studentHeaders.push(allExcelHeader[tp]);
        studentHeaders.sort((a, b) => (a.forStudentSeq > b.forStudentSeq) ? 1 : ((b.forStudentSeq > a.forStudentSeq) ? -1 : 0));
    }
}
var newArr = studentHeaders.map((val) => {
    return val.rowHeaderText
})

export class ExcelHeaderBulk {
    excelHeaders: ExcelHeaders = {
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
    mandatoryHeaderNames = allHeaderNames;
    allHeaderNames = studentHeaders;
}

