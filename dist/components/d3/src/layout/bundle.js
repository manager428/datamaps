function d3_layout_bundlePath(e){var t=e.source,n=e.target,r=d3_layout_bundleLeastCommonAncestor(t,n),i=[t];while(t!==r)t=t.parent,i.push(t);var s=i.length;while(n!==r)i.splice(s,0,n),n=n.parent;return i}function d3_layout_bundleAncestors(e){var t=[],n=e.parent;while(n!=null)t.push(e),e=n,n=n.parent;return t.push(e),t}function d3_layout_bundleLeastCommonAncestor(e,t){if(e===t)return e;var n=d3_layout_bundleAncestors(e),r=d3_layout_bundleAncestors(t),i=n.pop(),s=r.pop(),o=null;while(i===s)o=i,i=n.pop(),s=r.pop();return o}d3.layout.bundle=function(){return function(e){var t=[],n=-1,r=e.length;while(++n<r)t.push(d3_layout_bundlePath(e[n]));return t}}