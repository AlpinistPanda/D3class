var dataArray = [5, 11, 18];

var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

svg.selectAll("rect")
   .data(dataArray)
   .enter().append("rect")
            .attr("height", function(d, i) {return 15 * d})
            .attr("width", "50")
            .attr("fill", "purple")
            .attr("x", function(d,i) {return 60*i;})
            .attr("y", function(d, i) {return 300-(d*15);});

var newX = 300;
svg.selectAll("circle")
   .data(dataArray)
   .enter().append("circle")
   .attr("cx", function(d,i) {newX += (d*3)+(i*20); return newX;})
   .attr("cy", "100")
   .attr("r", function(d) {return d*3;});

newX = 600;
svg.selectAll("ellipse")
   .data(dataArray)
   .enter().append("ellipse")
   .attr("cx", function(d,i) {newX += (d*3)+(i*20); return newX;})
   .attr("cy", "100")
   .attr("rx", function(d) {return d*3;})
   .attr("ry", "30");

newX = 900;
svg.selectAll("line")
   .data(dataArray)
   .enter().append("line")
   .attr("x1", newX)
   .attr("stroke", "red")
   .attr("stroke-width", "2")
   .attr("y1", function(d, i) {return 80 + (i*20);})
   .attr("x2", function(d) {return newX+ (d*15);})
   .attr("y2", function(d, i) {return 80 + (i*20);});


svg.append("text")
   .attr("x", newX)
   .attr("y", 150)
   .text("Hello World!");
