//https://stackoverflow.com/questions/49599691/how-to-load-data-from-a-csv-file-in-d3-v5
var parseDate = d3.timeParse("%m/%d/%Y");

// first promise returns the dataset
var dataset = d3.csv("prices.csv").then(function(data)
    {return data;
    });
//this promise returns an array with lattitude and longitude
var coords = dataset.then(function(value) {
   return Promise.all(value.map(function(results){
   return [results.month, results.price];
    }))});
//print the array
coords.then(function(data) {

    var height = 300;
      var width = 500;

      var max = d3.max(data,function(d){ return d[1]; });
      
      var minDate = d3.min(data,function(d){ return d[0]; });
      var maxDate = d3.max(data,function(d){ return d[0]; });
      var y = d3.scaleLinear()
                  .domain([0,max])
                  .range([height,0]);
      var x = d3.scaleTime()
                  .domain([minDate,maxDate])
                  .range([0,width]);
      var yAxis = d3.axisLeft(y);
      var xAxis = d3.axisBottom(x);

      var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

      var margin = {left:50,right:50,top:40,bottom:0};

      var chartGroup = svg.append("g")
                  .attr("transform","translate("+margin.left+","+margin.top+")");

      var line = d3.line()
                      .x(function(d){ return x(d[0]); })
                      .y(function(d){ return y(d[1]); });

      chartGroup.append("path").attr("d",line(data));
      chartGroup.append("g").attr("class","x axis").attr("transform","translate(0,"+height+")").call(xAxis);
      chartGroup.append("g").attr("class","y axis").call(yAxis);});


