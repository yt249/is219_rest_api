(function ($) {
    $('#citiesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "id" },
            { "data": "fldName" },
            { "data": "fldLat" },
            { "data": "fldLong" },
            { "data": "fldCountry" },
            { "data": "fldAbbreviation" },
            { "data": "fldCapitalStatus" },
            { "data": "fldPopulation" }

        ]
    } );

})(jQuery);




//This class generates the table from an array of objects
function createTable(tableArray) {
    let table = document.querySelector("table");
    let TableHeadings = Object.keys(tableArray[0]);
    table.classList.add("table")
    generateTableHead(table, TableHeadings);
    generateTable(table, tableArray);
}

//this class generates table headings
function generateTableHead(table, TableHeadings) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let heading of TableHeadings) {
        let th = document.createElement("th");
        let text = document.createTextNode(heading);
        th.appendChild(text);
        row.appendChild(th);
    }
}
//this class generates table data

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

