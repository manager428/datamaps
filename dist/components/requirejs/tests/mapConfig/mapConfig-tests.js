require({baseUrl:"./",paths:{a:"a1"},map:{a:{c:"c1"},"a/sub/one":{c:"c2"}}},["a","b","c","a/sub/one"],function(e,t,n,r){doh.register("mapConfig",[function(s){s.is("c1",e.c.name),s.is("c1/sub",e.csub.name),s.is("c2",r.c.name),s.is("c2/sub",r.csub.name),s.is("c",t.c.name),s.is("c/sub",t.csub.name),s.is("c",n.name)}]),doh.run()})