var students = [{
        'roll No.': '01',
        'name': 'Abdullah Imran',
        'phone No.': '+92-300-6210027',
        'num Of Notebooks': 9,
        'English': '&#x2713;',
        'Computer': '',
        'Chemistry': '',
        'Physics': '',
        'Urdu': '&#x2713;',
        'Mathematics': '&#x2713;',
        'Pak Studies': '&#x2713;',
        'Islamiyat': '&#x2713;',
        'Tarjma-tul-Quran': '&#x2713;'
    },
    {
        'roll No.': '02',
        'name': 'Moiz Butt',
        'phone No.': '+123-456-789',
        'num Of Notebooks': '9',
        'English': '&#x2713;',
        'Computer': '',
        'Chemistry': '',
        'Physics': '',
        'Urdu': '&#x2713;',
        'Mathematics': '&#x2713;',
        'Pak Studies': '&#x2713;',
        'Islamiyat': '&#x2713;',
        'Tarjma-tul-Quran': '&#x2713;'
    }
]

function generateTableHeaders() {
    var headersRow = document.getElementById('tableHeaders');
    var headers = Object.keys(students[0]);
    headers.forEach(function(header) {
        var th = document.createElement('th');
        th.setAttribute('rowspan', '2')
        th.textContent = header.toUpperCase();
        headersRow.appendChild(th);
    })
}

function generateTableRows() {
    var tableBody = document.getElementById('tableBody');
    students.forEach(function(student) {
        var row = document.createElement('tr');
        Object.values(student).forEach(function(value) {
            var td = document.createElement('td');
            td.innerHTML = value;
            row.appendChild(td);
        });
        tableBody.appendChild(row);
    });
}

generateTableHeaders();
generateTableRows();