(this["webpackJsonpusestate-useeffect"]=this["webpackJsonpusestate-useeffect"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(4),u=n.n(r),s=(n(13),n(2)),i=n(5),a=n(6),l=n(8),j=n(7),b=n(0),f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={counter:0},e.increase=function(){e.setState({counter:e.state.counter+1})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){console.log("ComponentDidMount")}},{key:"componentDidUpdate",value:function(){console.log("ComponentDidUpdate")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"class",children:[Object(b.jsx)("h2",{children:"Class Component"}),Object(b.jsxs)("p",{children:["Counter: ",this.state.counter]}),Object(b.jsx)("button",{onClick:function(){return e.increase()},children:"Increase"})]})}}]),n}(o.a.Component),d=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(0);console.log("value",t);var n=Object(c.useState)(0),o=Object(s.a)(n,2),r=o[0],u=o[1],i=Object(c.useState)(""),a=Object(s.a)(i,2),l=a[0],j=a[1];Object(c.useEffect)((function(){console.log("useEffect")}),[r]),console.log("Func Comp Rendered!");return Object(b.jsxs)("div",{className:"function",children:[Object(b.jsx)("h2",{children:"Functional Component"}),Object(b.jsxs)("p",{children:["Counter: ",r]}),Object(b.jsx)("button",{onClick:function(){return u(r+1)},children:"Increase1"}),Object(b.jsx)("button",{onClick:function(){return u(r+1),void(t.current=t.current+1)},children:"Increase2"}),Object(b.jsx)("hr",{}),Object(b.jsx)("input",{type:"text",value:l,ref:e,onChange:function(e){j(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return e.current.value,void(e.current.parentElement.style.backgroundColor=l)},children:"BG Color"})]})};var O=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("button",{onClick:function(){return o(!n)},children:"Toggle"}),Object(b.jsx)(f,{}),n?Object(b.jsx)(d,{}):null]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),c(e),o(e),r(e),u(e)}))};u.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.50c9197f.chunk.js.map