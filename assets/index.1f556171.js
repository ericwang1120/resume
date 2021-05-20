var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;import{R as o,S as c,M as s,L as m,I as u,q as p,o as d,C as E,a as g,P as h,H as b,b as f,r as v,$ as y,m as w,c as S,d as I}from"./vendor.85d4e858.js";function x(e){return o.createElement(c,{as:s,animation:"overlay",width:"thin",visible:e.visible,icon:"labeled",vertical:!0,inverted:!0},o.createElement(s.Item,{as:m,to:"/resume",name:"resume",onClick:e.onToggle},o.createElement(u,{name:"file text outline"}),"resume"),o.createElement(s.Item,{as:m,to:"/github",name:"GitHub Repos",onClick:e.onToggle},o.createElement(u,{name:"github"}),"github"))}const k=p.h3`
  font-size: 1.2em;
`,C=d({counter:0,fetchData(){fetch("https://s2j8aqxdve.execute-api.ap-southeast-2.amazonaws.com/Prod/update").then((e=>e.json())).then((e=>this.counter=e.Attributes.current_counter)).catch((()=>this.counter=0))}}),P=p.b`
  align-self: flex-end;

  @media (max-width: 768px) {
    display: none !important;
  }
`,T=p(s)`
  margin: 0 !important;
`,D=p(s.Item)`
  @media (max-width: 768px) {
    display: none !important;
  }
`;class j extends o.PureComponent{componentDidMount(){C.fetchData()}render(){return o.createElement(T,{size:"large",onClick:this.props.onClick},o.createElement(E,{fluid:!0},o.createElement(s.Item,{as:"a",onClick:this.props.onToggle},o.createElement(u,{size:"large",name:"list layout"}),o.createElement(P,null,"Menu")),o.createElement(D,null,o.createElement(k,null,"Eric Wang's Personal Homepage")),o.createElement(s.Item,{as:"a",href:"mailto:eric.kiwi@outlook.com"},o.createElement(u,{size:"large",name:"mail outline"}),o.createElement(P,null,"Mail To Me")),o.createElement(s.Item,null,o.createElement(P,null,"Total visited:"," "+C.counter))))}}var O=g(j);const R=p.a`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`,A=p(s)`
  margin: 0 !important;

  @media (max-width: 768px) {
    display: none !important;
  }
`;function H(e){return o.createElement(A,{size:"large",onClick:e.onClick},o.createElement(E,{fluid:!0},o.createElement(s.Item,null,"Made by ",o.createElement(R,{href:"https://github.com/ericwang1120"},"Eric Wang"),", Based on React, Mobx and",o.createElement(R,{href:"https://react.semantic-ui.com/"}," Semantic UI React"),".")))}H.propTypes={onClick:h.func};const M=p.h1`
  border-bottom: 1px solid;
  text-align: center;
  font-size: 2em;
  margin-bottom: 0.25em;
`,N=p.h2`
  border-bottom: 1px solid;
  font-size: 1.5em;
  margin: 0;
`,U=p.div`
  margin: 0.4em 0 0.6em 0;
  & > p {
    margin: 0 0 0 0;
  }
`,V=p.section`
  margin: 0.8em 0;
`,W=p.span`
  font-weight: bold;
  margin: 0;
`,B=p.ul`
  padding: 0em;
  list-style-type: square;
  margin: 0;
`,F=p.li`
  margin: 0 0 0 0;
  padding-left: 0pt;
  list-style-position: inside;
  & > ul {
    margin: 0em;
  }
`,G=p.a`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`,L=()=>o.createElement("div",null,o.createElement(b,null,o.createElement("title",null,"Resume Page"),o.createElement("meta",{name:"description",content:"Resume of Eric Wang"})),o.createElement(M,null,"Eric Wang"),o.createElement(U,null,"High-quality professional with 5 years of IT experience in analysis, design, implementation, and maintenance of applications using object-oriented and database technologies. Willing to accept challenges and follow best practices in software development. Experienced with cutting edge tools and industry standards. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team."),o.createElement(V,null,o.createElement(N,null,"PROFESSIONAL EXPERIENCE"),o.createElement(U,null,o.createElement(W,null,"Wine-Searcher (01/2018 - Present)"),o.createElement("p",null,"Wine-Searcher is a web search engine enabling users to locate the price and availability of a given wine, spirit or beer globally. I am working as a Java developer in scripting team, responsible for developing java crawler and improving our infructructure."),o.createElement(B,null,o.createElement(F,null,"Kendo UI, JQuery, Bootstrap, Semantic UI and handlebars on client-side development"),o.createElement(F,null,"Kendo UI, JQuery, Bootstrap, Semantic UI and handlebars on client-side development"),o.createElement(F,null,"Kendo UI, JQuery, Bootstrap, Semantic UI and handlebars on client-side development"))),o.createElement(U,null,o.createElement(W,null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018)"," "),o.createElement("p",null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) "),o.createElement(B,null,o.createElement(F,null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) "),o.createElement(F,null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) "),o.createElement(F,null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) "))),o.createElement(U,null,o.createElement(W,null,"Guo Chuang Software (Software Engineer, 09/2012 – 07/2015) "),o.createElement("p",null,"GuoChuang Software is a cloud-based software solution provider. I worked as a software engineer at the department of the power industry, participated in designing and developing for our data integration web applications, data integration database systems, and report systems."),o.createElement(B,null,o.createElement(F,null,"Developed java web application and report service "),o.createElement(F,null,"Developed java web application and report service "),o.createElement(F,null,"Developed java web application and report service "),o.createElement(F,null,"Developed java web application and report service ")))),o.createElement(V,null,o.createElement(N,null,"TECHNICAL EXPERTISE "),o.createElement(U,null,o.createElement(B,null,o.createElement(F,null,"Design pattern, Data Structure and Algorithms, DevSecOps, OAuth "),o.createElement(F,null,"React, Angular, JQuery, Bootstrap, Semantic UI, Font Awesome, MVVM "),o.createElement(F,null,"C#, ASP.NET MVC, RESTful, Entity Framework, Java, Spring Boot "),o.createElement(F,null,"Microsoft SQL Server, T-SQL, Oracle, PL/SQL "),o.createElement(F,null,"Visual Studio, Visual Studio Code, Git, Node.js, Webpack, Eclipse ")))),o.createElement(V,null,o.createElement(N,null,"Education "),o.createElement(U,null,o.createElement(W,null,"Massey University (02/2016-12/2016) "),o.createElement("p",null,"Graduate Diploma in Information Science, Average A ")),o.createElement(U,null,o.createElement(W,null,"Central South University (09/2008-07/2012) "),o.createElement("p",null,"Bachelor Diploma in Software Engineering "))),o.createElement(V,null,o.createElement(N,null,"GITHUB/NPM CONTRIBUTIONS "),o.createElement(U,null,o.createElement(W,null,"Generate-Ngrx"," ",o.createElement(G,{href:"https://github.com/ericwang1120/generate-ngrx",target:"_blank"},"GitHub")," ",o.createElement(G,{href:"https://www.npmjs.com/package/generate-ngrx",target:"_blank"},"Npm")),o.createElement("p",null,"A code generator based on node environment. It can be used to generate code of Angular-Ngrx automatically.")),o.createElement(U,null,o.createElement(W,null,"My Personal Homepage:"," ",o.createElement(G,{href:"https://github.com/ericwang1120/persoal-homepage",target:"_blank"},"GitHub")," ",o.createElement(G,{href:"https://ericwangkiwi.github.io/",target:"_blank"},"Demo")),o.createElement("p",null,"This is my personal homepage, written in React, Redux and Semantic-UI. "))),o.createElement(V,null,o.createElement(N,null,"REFEREES "),o.createElement("p",null,"Available on request ")));const z=[{path:"/",exact:!0,component:L},{path:"/resume",component:L},{path:"",exact:!0,component:function(){return o.createElement("article",null,o.createElement(M,null,"Page Not Found"))}}],Q=p.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`,J=p(O)`
  flex: none;
`,q=p(H)`
  flex: none;
`,_=p(c.Pushable)`
  background-color: #fafafa;
  overflow-y: scroll;
  flex: 1 0 0;
  -ms-flex: 1 0 0;
  -webkit-flex: 1 0 0;
`,K=p(E)`
  padding: 1em 0 !important;
`;class X extends o.Component{constructor(){super(...arguments),this.state={visible:!1},this.toggleVisibility=()=>{this.setState({visible:!this.state.visible})},this.disableVisibility=()=>{!0===this.state.visible&&this.setState({visible:!1})}}componentDidMount(){document.addEventListener("keydown",this.disableVisibility,!1)}render(){return o.createElement(Q,null,o.createElement(J,{onToggle:this.toggleVisibility,onClick:this.disableVisibility}),o.createElement(b,{titleTemplate:"%s - Eric Wang's Personal Homepage",defaultTitle:"Eric Wang's Personal Homepage"},o.createElement("meta",{name:"description",content:"Eric Wang's Personal Homepage"})),o.createElement(f,null,o.createElement(x,(e=((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&i(e,n,t[n]);if(a)for(var n of a(t))r.call(t,n)&&i(e,n,t[n]);return e})({},this.state),s={onToggle:this.toggleVisibility},t(e,n(s)))),o.createElement(_,{onClick:this.disableVisibility},o.createElement(c.Pusher,null,o.createElement(K,null,v(z))))),o.createElement(q,{onClick:this.disableVisibility}));var e,s}}y`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;var $=new class{constructor(){this.title="",this.theme="default",w(this)}setTheme(e){this.theme=e}setTitle(e){this.title=e}};const Y={counterStore:C,commonStore:$};S.render(o.createElement(I,{stores:Y},o.createElement(X,null)),document.getElementById("root"));
