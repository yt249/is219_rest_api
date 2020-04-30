



function createTable(tableArray) {
    let table = document.querySelector("table");
    let TableHeadings = Object.keys(tableArray[0]);
    table.classList.add("table")
    generateTableHead(table, TableHeadings);
    generateTable(table, tableArray);
}


(function () {
    let xmlhttp = new XMLHttpRequest();
    let url = "http://localhost:9080/api/v1/cities";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            createTable(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();




})();

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

