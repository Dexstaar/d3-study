var data  = [];

for(var i=0; i<25; i++) {
    // Math.round()
    var num = Math.floor(d3.randomUniform(1,50)());
    data.push(num);
}

// console.log(data);

d3.select('#chart')
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    //.calssed('bar', ture)
    .attr('class','bar')
    .style('height', function(d){
        var height = d * 3;
        return height + 'px';
    });