// bring in data from data.js

var ufoData = data;

//reference table body

var tbody = d3.select("tbody");


// loop through data print to console.log
ufoData.forEach(function(ufoSitings) {
    console.log(ufoSitings);

    // append rows to table
     var row = tbody.append("tr");

     // loop through objects to get keys and values
     Object.entries(ufoSitings).forEach(function([key, value]) {
     console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
      var cell = row.append("td");

      // add values to cells
      cell.text(value);
     });
  });