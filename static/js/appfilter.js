// from data.js
var tableData = data;
let tbody = d3.select("tbody");
inputField = d3.select('#datetime');
inputButton = d3.select('#filter-btn');

//handleChange
function handleChange(){
    
    console.log("running handleChange");
    tbody.html('');

    var input = d3.event.target.value;
    var dataFiltered = filterTable(input);

    dataFiltered.map(x=>{
       
        let tr = tbody.append("tr");
        tr.append("td").text(x.datetime);
        tr.append("td").text(x.city);
        tr.append("td").text(x.state);
        tr.append("td").text(x.country);
        tr.append("td").text(x.shape);
        tr.append("td").text(x.durationMinutes);
        tr.append("td").text(x.comments);
        
    })

};

//on
inputButton.on("onclick", handleChange);
inputField.on("change", handleChange);

//renderTable
function filterTable(date){
    return data.filter(i => i.datetime==date);
}

console.log(filterTable("1/1/2010"));
