function d3_selection_property(e,t){function n(){delete this[e]}function r(){this[e]=t}function i(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}return t==null?n:typeof t=="function"?i:r}d3_selectionPrototype.property=function(e,t){if(arguments.length<2){if(typeof e=="string")return this.node()[e];for(t in e)this.each(d3_selection_property(t,e[t]));return this}return this.each(d3_selection_property(e,t))}