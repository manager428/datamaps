(function(e){function i(t){return t=e(t),(!!t.width()||!!t.height())&&t.css("display")!=="none"}function f(e,t){e=e.replace(/=#\]/g,'="#"]');var n,r,i=o.exec(e);if(i&&i[2]in s){var n=s[i[2]],r=i[3];e=i[1];if(r){var u=Number(r);isNaN(u)?r=r.replace(/^["']|["']$/g,""):r=u}}return t(e,n,r)}var t=e.zepto,n=t.qsa,r=t.matches,s=e.expr[":"]={visible:function(){if(i(this))return this},hidden:function(){if(!i(this))return this},selected:function(){if(this.selected)return this},checked:function(){if(this.checked)return this},parent:function(){return this.parentNode},first:function(e){if(e===0)return this},last:function(e,t){if(e===t.length-1)return this},eq:function(e,t,n){if(e===n)return this},contains:function(t,n,r){if(e(this).text().indexOf(r)>-1)return this},has:function(e,n,r){if(t.qsa(this,r).length)return this}},o=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,a="Zepto"+ +(new Date);t.qsa=function(r,i){return f(i,function(s,o,f){try{var l;!s&&o?s="*":u.test(s)&&(l=e(r).addClass(a),s="."+a+" "+s);var c=n(r,s)}catch(h){throw console.error("error performing selector: %o",i),h}finally{l&&l.removeClass(a)}return o?t.uniq(e.map(c,function(e,t){return o.call(e,t,c,f)})):c})},t.matches=function(e,t){return f(t,function(t,n,i){return(!t||r(e,t))&&(!n||n.call(e,null,i)===e)})}})(Zepto)