'use strict'

// window.onload = function () {
// 	map("map");
// 	}

function renderMyBMIgram() {
	var width = 760;
	var height = 500;


	// D3 Projection
	var projection = d3.geo.albersUsa()
		.translate([width / 2, height / 2])    // translate to center of screen
		.scale([1000]);          // scale things down so see entire US

	// Define path generator
	var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
		.projection(projection);  // tell path generator to use albersUsa projection


	// Define linear scale for output
	var color = d3.scale.linear()
		.range(["rgb(255, 245, 210)", "rgb(253, 211, 196)", "rgb(243, 167, 150)", "rgb(224, 76, 70)", "rgb(144, 42, 34)"]);




	//Create SVG element and append map to the SVG
	var svg = d3.select("body")
		.append("svg")
		.attr("width", width)
		.attr("height", height);

	// Append Div for tooltip to SVG
	var div = d3.select("body")
		.append("div")
		.attr("class", "tooltip")
		.style("opacity", 0);

	


	// Load in my states data!
	d3.csv("finalprojectTable_FinalA.csv", function (data) {
		color.domain([0, 8, 16, 24, 32]); // setting the range of the input data

		// Load GeoJSON data and merge with states data
		d3.json("us-states.json", function (json) {

			// Loop through each state data value in the .csv file

			for (var i = 0; i < data.length; i++) {

				// Grab State Name
				var dataState = data[i].state;

				// Grab data value 
				var dataValue = data[i].obesrate2016;

				// Find the corresponding state inside the GeoJSON
				for (var j = 0; j < json.features.length; j++) {
					var jsonState = json.features[j].properties.name;

					if (dataState == jsonState) {

						// Copy the data value into the JSONs
						json.features[j].properties.obesrate2016 = dataValue;

						// Stop looking through the JSON
						break;
					}
				}
			}

			var legendText = ["≥ 32%", "24 to 32%", "16 to 24%", "8 to 16%", "≤ 8%"];
			
				// Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852
				var legend = d3.select("body").append("svg")
					.attr("class", "legend")
					.attr("width", 140)
					.attr("height", 200)
					.selectAll("g")
					.data(color.domain().slice().reverse())
					.enter()
					.append("g")
					.attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
			
				legend.append("rect")
					.attr("width", 18)
					.attr("height", 18)
					.style("fill", color);
			
				legend.append("symbol")
					.attr("title", "ddd");
			
				legend.append("text")
					.data(legendText)
					.attr("x", 24)
					.attr("y", 9)
					.attr("dy", ".35em")
					.text(function (d) { return d; });

			// Bind the data to the SVG and create one path per GeoJSON feature
			svg.selectAll("path")
				.data(json.features)
				.enter()
				.append("path")
				.attr("d", path)
				.style("stroke", "#fff")
				.style("stroke-width", "1")
				.style("fill", function (d) {

					// Get data value
					var value = d.properties.obesrate2016;

					if (value) {
						//If value exists…
						return color(value);
					} else {
						//If value is undefined…
						return "rgb(255,0,0)";
					}
				})

				.on("mouseover", function (d) {
					div.transition()
						.duration(200)
						.style("opacity", 1)
					div.text([d.properties.name + "\n" + "——————————" + "Annual BMI: " + d.properties.obesrate2016 + "%"])
						.style("left", (d3.event.pageX) + "px")
						.style("top", (d3.event.pageY - 28) + "px");
				})

				// fade out tooltip on mouse out               
				.on("mouseout", function (d) {
					div.transition()
						.duration(500)
						.style("opacity", 0);
				});


		});
	});
};
