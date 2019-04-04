var data = d3.json("https://ghibliapi.herokuapp.com/films");

var currencyData = d3.json("https://api.exchangeratesapi.io/latest");

console.log(data)
//var newData = data[0].title

data.then(function(d){
  start(d);
})

currencyData.then(function(d){
  currency(d);
})

var start = function(d){

    var head = d3.select("body").select("table").append("th").text("Title");
    var head = d3.select("body").select("table").append("th").text("Director");
    var head = d3.select("body").select("table").append("th").text("Producer");
    var head = d3.select("body").select("table").append("th").text("Release Date");
  var rows = d3.select("body").select("table").selectAll("tr")
                    .data(d)
                    .enter()
                    .append("tr");

rows.append("td").text(function(d){
    return d.title;
})

rows.append("td").text(function(d){
  return d.director;
})
rows.append("td").text(function(d){
  return d.producer;
})

rows.append("td").text(function(d){
  return d.release_date;
})



}

var currency = function(d){

  var currency = d3.select("body").append("h2").text("Euro to Japanese Yen Exchange Rate (Live): " + d.rates.JPY)



}
