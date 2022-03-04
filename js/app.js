// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// function to build a table
function buildTable(data) {
    //clear out existing data
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

//create a function for handling the data after a date is given
function handleClick() {
    //look for a #datetime id in the html tags and hold the info in the date variable
    let date = d3.select("#datetime").property("value");
    //set default filter as the original data set
    let filteredData = tableData;
    //adding a if stament to filter the table to show data that matches the date
    if (date) {
        //Filter the default data to show only the date entered
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);  
};

//using D3 to listen for a cick event on the filter button and execute the handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);