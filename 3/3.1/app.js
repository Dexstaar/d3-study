var el = d3.selectAll('body')
    .append('p')
    // .attr('class', 'foo')
    // .attr('class', 'bar')
    .text('Hello World!')
    .classed('foo', true)
    .classed('bar', true)
    .style('color', 'blue');
console.log(el);