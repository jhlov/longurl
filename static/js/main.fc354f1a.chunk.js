(this.webpackJsonplongurl=this.webpackJsonplongurl||[]).push([[0],{26:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(19),a=n.n(s),l=n(3),i=n.n(l),j=(n(26),n(10)),u=n.n(j),d=n(20),b=n(8),o=n(21),h=n.n(o),x=n(57),O=n(59),p=n(58),g=n(55),m=n(56),f=n(1),v=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),a=Object(b.a)(s,2),l=a[0],i=a[1],j=Object(c.useState)(!1),o=Object(b.a)(j,2),v=o[0],k=o[1],y=function(){var e=Object(d.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.trim()){e.next=3;break}return e.abrupt("return");case 3:return t.startsWith("bit.ly")&&(t="https://"+t),k(!0),i(null),e.prev=6,e.next=9,h.a.get("https://yqxmo2x8z4.execute-api.ap-northeast-2.amazonaws.com/default/long-url?url="+t);case 9:200===(c=e.sent).status&&i(c.data),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.log(e.t0);case 16:return e.prev=16,k(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[6,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"long-url",children:[Object(f.jsx)("h1",{className:"my-5",children:"\ub2e8\ucd95 url \ubcf5\uc6d0"}),Object(f.jsxs)(x.a,{size:"lg",className:"mb-1",children:[Object(f.jsx)(O.a,{placeholder:"\ubcf5\uc6d0\ud560 \ub2e8\ucd95 url\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){r(e.target.value)}}),Object(f.jsx)(x.a.Append,{children:Object(f.jsx)(p.a,{variant:"outline-secondary",onClick:y,children:"\ubcf5\uc6d0"})})]}),Object(f.jsx)("p",{children:"(bit.ly, url.kr, han.gl)"}),v&&Object(f.jsx)("div",{className:"mt-5",children:Object(f.jsx)(g.a,{animation:"border"})}),null!==l&&Object(f.jsx)("div",{className:"mt-5",children:Object(f.jsx)(m.a,{striped:!0,bordered:!0,size:"lg",children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"\ub2e8\ucd95 url"}),Object(f.jsx)("td",{children:l.short_url})]}),l.title&&Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"\uc81c\ubaa9"}),Object(f.jsx)("td",{children:l.title})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"\ubcf5\uc6d0 url"}),Object(f.jsx)("td",{children:Object(f.jsx)("a",{href:l.long_url,target:"_blank",children:l.long_url})})]})]})})})]})};var k=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:i()("mobile-container"),children:Object(f.jsx)(v,{})})})},y=(n(52),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))});a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),y()}},[[53,1,2]]]);