function d3_layout_treemapPadNull(e){return{x:e.x,y:e.y,dx:e.dx,dy:e.dy}}function d3_layout_treemapPad(e,t){var n=e.x+t[3],r=e.y+t[0],i=e.dx-t[1]-t[3],s=e.dy-t[0]-t[2];return i<0&&(n+=i/2,i=0),s<0&&(r+=s/2,s=0),{x:n,y:r,dx:i,dy:s}}d3.layout.treemap=function(){function a(e,t){var n=-1,r=e.length,i,s;while(++n<r)s=(i=e[n]).value*(t<0?0:t),i.area=isNaN(s)||s<=0?0:s}function f(e){var t=e.children;if(t&&t.length){var n=i(e),r=[],s=t.slice(),o,u=Infinity,l,p=Math.min(n.dx,n.dy),d;a(s,n.dx*n.dy/e.value),r.area=0;while((d=s.length)>0)r.push(o=s[d-1]),r.area+=o.area,(l=c(r,p))<=u?(s.pop(),u=l):(r.area-=r.pop().area,h(r,p,n,!1),p=Math.min(n.dx,n.dy),r.length=r.area=0,u=Infinity);r.length&&(h(r,p,n,!0),r.length=r.area=0),t.forEach(f)}}function l(e){var t=e.children;if(t&&t.length){var n=i(e),r=t.slice(),s,o=[];a(r,n.dx*n.dy/e.value),o.area=0;while(s=r.pop())o.push(s),o.area+=s.area,s.z!=null&&(h(o,s.z?n.dx:n.dy,n,!r.length),o.length=o.area=0);t.forEach(l)}}function c(e,t){var n=e.area,r,i=0,s=Infinity,o=-1,a=e.length;while(++o<a){if(!(r=e[o].area))continue;r<s&&(s=r),r>i&&(i=r)}return n*=n,t*=t,n?Math.max(t*i*u/n,n/(t*s*u)):Infinity}function h(e,n,r,i){var s=-1,o=e.length,u=r.x,a=r.y,f=n?t(e.area/n):0,l;if(n==r.dx){if(i||f>r.dy)f=r.dy;while(++s<o)l=e[s],l.x=u,l.y=a,l.dy=f,u+=l.dx=Math.min(r.x+r.dx-u,f?t(l.area/f):0);l.z=!0,l.dx+=r.x+r.dx-u,r.y+=f,r.dy-=f}else{if(i||f>r.dx)f=r.dx;while(++s<o)l=e[s],l.x=u,l.y=a,l.dx=f,a+=l.dy=Math.min(r.y+r.dy-a,f?t(l.area/f):0);l.z=!1,l.dy+=r.y+r.dy-a,r.x+=f,r.dx-=f}}function p(t){var r=o||e(t),i=r[0];return i.x=0,i.y=0,i.dx=n[0],i.dy=n[1],o&&e.revalue(i),a([i],i.dx*i.dy/i.value),(o?l:f)(i),s&&(o=r),r}var e=d3.layout.hierarchy(),t=Math.round,n=[1,1],r=null,i=d3_layout_treemapPadNull,s=!1,o,u=.5*(1+Math.sqrt(5));return p.size=function(e){return arguments.length?(n=e,p):n},p.padding=function(e){function t(t){var n=e.call(p,t,t.depth);return n==null?d3_layout_treemapPadNull(t):d3_layout_treemapPad(t,typeof n=="number"?[n,n,n,n]:n)}function n(t){return d3_layout_treemapPad(t,e)}if(!arguments.length)return r;var s;return i=(r=e)==null?d3_layout_treemapPadNull:(s=typeof e)==="function"?t:s==="number"?(e=[e,e,e,e],n):n,p},p.round=function(e){return arguments.length?(t=e?Math.round:Number,p):t!=Number},p.sticky=function(e){return arguments.length?(s=e,o=null,p):s},p.ratio=function(e){return arguments.length?(u=e,p):u},d3_layout_hierarchyRebind(p,e)}