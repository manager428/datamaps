function d3_scale_bilinear(e,t,n,r){var i=n(e[0],e[1]),s=r(t[0],t[1]);return function(e){return s(i(e))}}