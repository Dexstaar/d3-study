// Data
var data            =   [ 25, 25, 25, 25 ];
var chart_width     =   600;
var chart_height    =   600;
var color = d3.scaleOrdinal(d3.schemeCategory10);

// Pie Layout
var pie = d3.pie();

// Arc
var outer_radius = chart_width / 2;
var inner_radius = 200;
var arc = d3.arc()
    .innerRadius(inner_radius)
    .outerRadius(outer_radius);

var svg = d3.select("#chart")
    .append("svg")
    .attr("width", chart_width)
    .attr("height", chart_height);

// Groups
var arcs = svg.selectAll('g.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc')
    .attr(
        'transform',
        "translate(" + outer_radius + "," + chart_height / 2 + ")"
    );

// Arcs
arcs.append('path')
    .attr('fill', function(d, i) {
        return color(i);
    })
    .attr('d', arc);

// Labels
arcs.append('text')
    .attr('transform', function(d, i) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr('text-anchor', 'text-middle')
    .text(function(d) {
        return d.value;
    });

