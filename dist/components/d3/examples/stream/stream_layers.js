function stream_layers(e,t,n){function r(e){var n=1/(.1+Math.random()),r=2*Math.random()-.5,i=10/(.1+Math.random());for(var s=0;s<t;s++){var o=(s/t-r)*i;e[s]+=n*Math.exp(-o*o)}}return arguments.length<3&&(n=0),d3.range(e).map(function(){var e=[],i;for(i=0;i<t;i++)e[i]=n+n*Math.random();for(i=0;i<5;i++)r(e);return e.map(stream_index)})}function stream_waves(e,t){return d3.range(e).map(function(e){return d3.range(t).map(function(n){var r=20*n/t-e/3;return 2*r*Math.exp(-0.5*r)}).map(stream_index)})}function stream_index(e,t){return{x:t,y:Math.max(0,e)}}