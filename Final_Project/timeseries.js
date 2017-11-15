"use strict"
window.onload = function () {
    timeseries();
}
function timeseries() {
    //I increased the bottom margin a little bit because the x label is tied to it; so I could lower the x label a little bit
    var margin = { top: 100, right: 20, bottom: 60, left: 90 },
        width = 1100 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .ticks(d3.time.month, 12)
        .tickSize(10)
        .orient("bottom");

    var xMinorAxis = d3.svg.axis()
        .scale(x)
        .ticks(d3.time.month, 6)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Alabama); })

    var line2 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Alaska); })

    var line3 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Arizona); })

    var line4 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Arkansas); })

    var line5 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.California); })

    var line6 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Colorado); })

    var line7 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Connecticut); })

    var line8 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Delaware); })

    var line9 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Florida); })

    var line10 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Georgia); })

    var line11 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.DistrictofColumbia); })

    var line12 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Hawaii); })

    var line13 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Idaho); })

    var line14 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Illinois); })

    var line15 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Indiana); })

    var line15 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Iowa); })

    var line27 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Nebraska); })

    var line28 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Nevada); })

    var line29 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.NewHampshire); })

    var line30 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.NewJersey); })

    var line31 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.NewMexico); })

    var line32 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.NewYork); })

    var line33 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.NorthCarolina); })

    var line34 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.NorthDakota); })

    var line35 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Ohio); })

    var line36 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Oklahoma); })

    var line37 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Oregon); })

    var line38 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Pennsylvania); })

    var line39 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.RhodeIsland); })

    var line40 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.SouthCarolina); })

    var line41 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.SouthDakota); })

    var line42 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Tennessee); })


    var line43 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Texas); })

    var line44 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Utah); })

    var line45 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Vermont); })

    var line46 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Virginia); })

    var line47 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Washington); })

    var line48 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.WestVirginia); })

    var line49 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Wisconsin); })

    var line50 = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.Wyoming); })


    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //The format in the CSV, which d3 will read
    var parseDate = d3.time.format("%Y");

    var formatTime = d3.time.format("%Y");
    var formatCount = d3.format(",");

    // function for the y grid lines
    function make_y_axis() {
        return d3.svg.axis()
            .scale(y)
            .orient("left")
        //.ticks(5)
    }

    //reading in CSV which contains data
    d3.csv("Obese.csv", function (error, data) {
        data.forEach(function (d) {
            d.date = parseDate.parse(d.year);
            console.log(d.date);

            d.Arizona = +d.Arizona
            console.log(d.Arizona)
        });

        //using imported data to define extent of x and y domains
        x.domain(d3.extent(data, function (d) { return d.date; }));
        y.domain(d3.extent(data, function (d) { return d.test; }));

        // Draw the y Grid lines
        svg.append("g")
            .attr("class", "grid")
            .call(make_y_axis()
                .tickSize(-width, 0, 0)
                .tickFormat("")
            )

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line2);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line3);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line4);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line5);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line6);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line7);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line8);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line9);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line10);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line11);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line12);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line13);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line14);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line15);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line27);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line28);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line29);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line30);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line31);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line32);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line33);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line34);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line35);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line36);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line37);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line38);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line39);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line40);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line41);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line42);


        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line43);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line44);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line45);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line46);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line47);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line48);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line49);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line50);

        svg.selectAll("path")
            .on('mouseover', function (d, i) {
                console.log("mouseover on", this);
                d3.select(this)
                    .transition()
                    .duration(100)
                    .style('stroke', '#E08A1E')
                    .style('stroke-width', 4);
            })

            .on('mouseout', function (d, i) {
                console.log("mouseout", this);
                d3.select(this)
                    .transition()
                    .duration(100)
                    .style("stroke", 'lightgray')
                    .style('stroke-width', 1.5);
            })

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll(".tick text")
            .call(wrap, 35);

        svg.append("g")
            .attr("class", "xMinorAxis")
            .attr("transform", "translate(0," + height + ")")
            .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1px' })
            .call(xMinorAxis)
            .selectAll("text").remove();

        //http://www.d3noob.org/2012/12/adding-axis-labels-to-d3js-graph.html
        svg.append("text")      // text label for the x-axis
            .attr("x", width / 2)
            .attr("y", height + margin.bottom)
            .style("text-anchor", "middle")
            .text("Years");

        svg.append("text")      // text label for the y-axis
            .attr("y", 30 - margin.left)
            .attr("x", 50 - (height / 2))
            .attr("transform", "rotate(-90)")
            .style("text-anchor", "end")
            .style("font-size", "16px")
            .text("Percent of obese adults");

        //http://www.d3noob.org/2013/01/adding-title-to-your-d3js-graph.html
        svg.append("text")      // text label for chart Title
            .attr("x", width / 2)
            .attr("y", 0 - (margin.top / 2))
            .style("text-anchor", "middle")
            .style("font-size", "16px")
            .style("text-decoration", "underline")
            .text("Adult Obesity Rates by State");


        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
        //text label for the y-axis inside chart
        /*
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .style("font-size", "16px") 
          .style("background-color","red")
          .text("road length (km)");
        */

        //http://bl.ocks.org/mbostock/7555321
        //This code wraps label text if it has too much text
        function wrap(text, width) {
            text.each(function () {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = 1.1, // ems
                    y = text.attr("y"),
                    dy = parseFloat(text.attr("dy")),
                    tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
                while (word = words.pop()) {
                    line.push(word);
                    tspan.text(line.join(" "));
                    if (tspan.node().getComputedTextLength() > width) {
                        line.pop();
                        tspan.text(line.join(" "));
                        line = [word];
                        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                    }
                }
            });
        }

    });

}
