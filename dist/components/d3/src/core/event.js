function d3_eventCancel(){d3.event.stopPropagation(),d3.event.preventDefault()}function d3_eventSource(){var e=d3.event,t;while(t=e.sourceEvent)e=t;return e}function d3_eventDispatch(e){var t=new d3_dispatch,n=0,r=arguments.length;while(++n<r)t[arguments[n]]=d3_dispatch_event(t);return t.of=function(n,r){return function(i){try{var s=i.sourceEvent=d3.event;i.target=e,d3.event=i,t[i.type].apply(n,r)}finally{d3.event=s}}},t}d3.event=null