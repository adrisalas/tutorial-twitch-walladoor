(this.webpackJsonpwalladoor=this.webpackJsonpwalladoor||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(9),i=a.n(r),s=(a(24),a(7)),o=(a(25),a(33)),l=a(37),j=a(34),u=a(17),d=a(40),b=a(39),h=a(38),O=a(35),m=a(1);var p=function(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),p=l[0],x=l[1],g=Object(c.useState)(""),f=Object(s.a)(g,2),v=f[0],w=f[1],C=Object(c.useState)(""),y=Object(s.a)(C,2),L=y[0],S=y[1],B=Object(c.useState)(""),I=Object(s.a)(B,2),E=I[0],N=I[1],T=Object(c.useState)(""),k=Object(s.a)(T,2),F=k[0],G=k[1],M=Object(c.useState)(""),P=Object(s.a)(M,2),U=P[0],W=P[1],J=Object(c.useState)(""),A=Object(s.a)(J,2),R=A[0],q=A[1],z=Object(c.useState)(""),V=Object(s.a)(z,2),Y=V[0],D=V[1],H=Object(c.useState)(""),K=Object(s.a)(H,2),Q=K[0],X=K[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(o.a,{children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(u.a,{xs:12,md:6,className:"mb-5",children:Object(m.jsx)(d.a,{children:Object(m.jsx)(d.a.Body,{children:Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(b.a.Label,{children:"Usuario"}),Object(m.jsx)(b.a.Control,{type:"text",placeholder:"Usuario",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(m.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(b.a.Label,{children:"Contrase\xf1a"}),Object(m.jsx)(b.a.Control,{type:"password",placeholder:"Contrase\xf1a",value:p,onChange:function(e){return x(e.target.value)}})]}),""!=v?Object(m.jsx)(h.a,{variant:"danger",children:v}):void 0,Object(m.jsx)(O.a,{variant:"primary",onClick:function(){!function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,password:p}),redirect:"follow"};fetch("/api/login",t).then((function(e){if(e.status>=200&&e.status<300)return e.json();throw"error"})).then((function(t){e.setUser(t),e.changeWindow("lista")})).catch((function(e){return w("La has liado pardisima")}))}()},children:"Iniciar sesi\xf3n"})]})})})}),Object(m.jsx)(u.a,{xs:12,md:6,className:"mb-5",children:Object(m.jsx)(d.a,{children:Object(m.jsx)(d.a.Body,{children:Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(b.a.Label,{children:"Usuario"}),Object(m.jsx)(b.a.Control,{type:"text",placeholder:"Usuario",value:L,onChange:function(e){return S(e.target.value)}})]}),Object(m.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(b.a.Label,{children:"Email"}),Object(m.jsx)(b.a.Control,{type:"email",placeholder:"Email",value:E,onChange:function(e){return N(e.target.value)}})]}),Object(m.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(b.a.Label,{children:"Repite email"}),Object(m.jsx)(b.a.Control,{type:"email",placeholder:"Email",value:F,onChange:function(e){return G(e.target.value)}})]}),Object(m.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(b.a.Label,{children:"Contrase\xf1a"}),Object(m.jsx)(b.a.Control,{type:"password",placeholder:"Contrase\xf1a",value:U,onChange:function(e){return W(e.target.value)}})]}),Object(m.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(b.a.Label,{children:"Repite contrase\xf1a"}),Object(m.jsx)(b.a.Control,{type:"password",placeholder:"Contrase\xf1a",value:R,onChange:function(e){return q(e.target.value)}})]}),""!=Y?Object(m.jsx)(h.a,{variant:"danger",children:Y}):void 0,""!=Q?Object(m.jsx)(h.a,{variant:"success",children:Q}):void 0,Object(m.jsx)(O.a,{variant:"primary",onClick:function(){!function(){if(E==F&&U==R){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:L,password:U,email:E}),redirect:"follow"};fetch("/api/users",e).then((function(e){if(e.status>=200&&e.status<300)return e.json();throw"error"})).then((function(e){console.log("3"),S(""),N(""),G(""),W(""),q(""),D(""),X("Usuario registrado")})).catch((function(e){console.log("E"),D("La has liado pardisima"),X("")}))}else D("La has liado pardisima"),X("")}()},children:"Registro sesi\xf3n"})]})})})})]})})})},x=a(36);var g=function(e){var t=e.articulos;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(j.a,{className:"float-right",children:Object(m.jsx)(O.a,{variant:"danger",onClick:function(){e.changeWindow("login")},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-octagon-fill",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"})})})}),Object(m.jsx)(j.a,{children:Object(m.jsx)("h1",{children:"Lista de articulos"})}),Object(m.jsx)(j.a,{className:"mt-3",children:Object(m.jsx)(x.a,{children:t.map((function(e){return Object(m.jsxs)(d.a,{style:{width:"18rem"},children:[Object(m.jsx)(d.a.Img,{variant:"top",src:e.img}),Object(m.jsxs)(d.a.Body,{children:[Object(m.jsx)(d.a.Title,{children:e.titulo}),Object(m.jsx)(d.a.Text,{children:e.descripcion}),Object(m.jsx)(O.a,{variant:"outline-success",onClick:function(){alert("Mandar mensaje a: "+e.autor)},children:"Chat"})]})]})}))})})]})})};var f=function(){var e=Object(c.useState)("login"),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({}),i=Object(s.a)(r,2),j=(i[0],i[1]),u=Object(c.useState)([{img:"https://www.pulsovideojuegos.com/wp-content/uploads/2020/01/super-mario-bros-3.jpg",titulo:"Super Mario Bros",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis magna, suscipit at mattis a, commodo eu velit. Etiam lectus lorem, facilisis eu pharetra quis, convallis quis mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. In nunc ipsum, rutrum vitae facilisis ac, sagittis vitae sem.",autor:"adri"},{img:"https://www.pulsovideojuegos.com/wp-content/uploads/2020/01/super-mario-bros-3.jpg",titulo:"Super Mario Bros 2",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis magna, suscipit at mattis a, commodo eu velit. ",autor:"adri2"},{img:"http://cdn.mos.cms.futurecdn.net/er3A7Y4hm89VhYvvwkrptK.jpg",titulo:"Montura WoW",descripcion:"Me sobra esta montura, y la vendo por 5\u20ac",autor:"Nei"}]),d=Object(s.a)(u,2),b=d[0];return d[1],Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.a,{fluid:!0,children:Object(m.jsx)(l.a,{children:Object(m.jsx)("h1",{children:"Walladoor"})})}),"login"==a?Object(m.jsx)(p,{changeWindow:function(e){return n(e)},setUser:function(e){return j(e)}}):Object(m.jsx)(g,{changeWindow:function(e){return n(e)},articulos:b})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};a(30);i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.12dfd823.chunk.js.map