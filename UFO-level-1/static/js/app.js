// from data.js

var ufoData = data;

//reference table body

var tbody = d3.select("tbody");

// append rows to table

ufoData.forEach(function(ufoSitings) {
    console.log(ufoSitings);
     var row = tbody.append("tr");
     Object.entries(ufoSitings).forEach(function([key, value]) {
     console.log(key, value);
  //     // Append a cell to the row for each value
  //     // in the weather report object
      var cell = row.append("td");
      cell.text(value);
     });
  });
