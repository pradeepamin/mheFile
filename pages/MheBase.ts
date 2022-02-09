export interface ExcelHeaders {
    userGuid: string;
    userId: string;
    role: string;
    firstName: string;
    lastName: string;
    gradeLevel: string;

    email: string;
    username: string;
    password: string;
    classGUID: string;

    classID: string;
    className: string;
    classGradeLevel: string;
    classStartDate: string;
    classEndDate: string;
    masterCode: string;
}

export enum exlHeader {
    userGuid = 'user-guid',
    userId = 'user-id',
    role = 'role',
    firstName = 'first-name',
    lastName = 'last-name',
    gradeLevel = 'grade-level',
    email = 'email',
    username = 'username',
    password = 'password',
    classGUID = 'class-guid',
    classID = 'class-id',
    className = 'class-name',
    classGradeLevel = 'class-grade-level',
    classStartDate = 'class-start-date',
    classEndDate = 'class-end-date',
    masterCode = 'master-code',
    studentGuid ='student-guid',
    studentId = 'student-id',
    emailAddress = 'email-address'
}

export const excelHeadersEnum = {
    userGuid: exlHeader.userGuid,
    userId: exlHeader.userId,
    role: exlHeader.role,
    firstName: exlHeader.firstName,
    lastName: exlHeader.lastName,
    gradeLevel: exlHeader.gradeLevel,
    email: exlHeader.email,
    username: exlHeader.username,
    password: exlHeader.password,
    classGUID: exlHeader.classGUID,
    classID: exlHeader.classID,
    className: exlHeader.className,
    classGradeLevel: exlHeader.classGradeLevel,
    classStartDate: exlHeader.classStartDate,
    classEndDate: exlHeader.classEndDate,
    masterCode: exlHeader.masterCode,
    studentGuid: exlHeader.studentGuid,
    studentId: exlHeader.studentId,
    emailAddress: exlHeader.emailAddress
}
