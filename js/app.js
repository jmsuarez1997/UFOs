// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function buildTable(data) {
    tbody.html("");

// Loop through our data
    data.forEach((dataRow) => {
        // created a variable to append a row to the table body
        let row = tbody.append("tr");
        //loop through each feild in the dataRow argument- each sighting onto it's own row of data
        Object.values(dataRow).forEach((val) => {
            //created a variable to append data to the table
            let cell = row.append("td");
            //adding values to the table
            cell.text(val);
            }
        );

    });

}

