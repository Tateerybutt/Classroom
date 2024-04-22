const XLSX = require('xlsx');

function createXLSX() {
    // Convert array of objects to an array of arrays
    const studentsArray = students.map(obj => Object.values(obj));

    // Add headers
    const headers = Object.keys(students[0]);
    studentsArray.unshift(headers);

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Add a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(studentsArray);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Write the workbook to a file
    XLSX.writeFile(workbook, 'example.xlsx');
}