var data = d3.json("https://ghibliapi.herokuapp.com/films");

console.log(data)
//var newData = data[0].title

data.then(function(d){
  start(d);
})

var start = function(d){
    var head = d3.select("body").select("table").append("th").text("Title");
    var head = d3.select("body").select("table").append("th").text("Director");
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


                    console.log(d.title)
}
