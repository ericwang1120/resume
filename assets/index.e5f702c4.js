var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l;import{R as o,S as c,M as s,L as m,I as u,q as p,C as d,P as E,H as g,a as h,r as b,$ as f,b as v}from"./vendor.dcb4957d.js";function y(e){return o.createElement(c,{as:s,animation:"overlay",width:"thin",visible:e.visible,icon:"labeled",vertical:!0,inverted:!0},o.createElement(s.Item,{as:m,to:"/resume",name:"resume",onClick:e.onToggle},o.createElement(u,{name:"file text outline"}),"resume"),o.createElement(s.Item,{as:m,to:"/github",name:"GitHub Repos",onClick:e.onToggle},o.createElement(u,{name:"github"}),"github"))}const w=p.h3`
  font-size: 1.2em;
`,S=p.b`
  align-self: flex-end;

  @media (max-width: 768px) {
    display: none !important;
  }
`,I=p(s)`
  margin: 0 !important;
`,k=p(s.Item)`
  @media (max-width: 768px) {
    display: none !important;
  }
`;class x extends o.PureComponent{render(){return o.createElement(I,{size:"large",onClick:this.props.onClick},o.createElement(d,{fluid:!0},o.createElement(s.Item,{as:"a",onClick:this.props.onToggle},o.createElement(u,{size:"large",name:"list layout"}),o.createElement(S,null,"Menu")),o.createElement(k,null,o.createElement(w,null,"Eric Wang's Personal Homepage")),o.createElement(s.Item,{as:"a",href:"mailto:eric.kiwi@outlook.com"},o.createElement(u,{size:"large",name:"mail outline"}),o.createElement(S,null,"Mail To Me"))))}}const C=p.a`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`,P=p(s)`
  margin: 0 !important;

  @media (max-width: 768px) {
    display: none !important;
  }
`;function T(e){return o.createElement(P,{size:"large",onClick:e.onClick},o.createElement(d,{fluid:!0},o.createElement(s.Item,null,"Made by ",o.createElement(C,{href:"https://github.com/ericwang1120"},"Eric Wang"),", Based on React, Mobx and",o.createElement(C,{href:"https://react.semantic-ui.com/"}," Semantic UI React"),".")))}T.propTypes={onClick:E.func};const D=p.h1`
  border-bottom: 1px solid;
  text-align: center;
  font-size: 2em;
  margin-bottom: 0.25em;
`,O=p.h2`
  border-bottom: 1px solid;
  font-size: 1.5em;
  margin: 0;
`,R=p.div`
  margin: 0.4em 0 0.6em 0;
  & > p {
    margin: 0 0 0 0;
  }
`,j=p.section`
  margin: 0.8em 0;
`,H=p.span`
  font-weight: bold;
  margin: 0;
`,A=p.ul`
  padding: 0em;
  list-style-type: square;
  margin: 0;
`,N=p.li`
  margin: 0 0 0 0;
  padding-left: 0pt;
  list-style-position: inside;
  & > ul {
    margin: 0em;
  }
`,M=p.a`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`,U=()=>o.createElement("div",null,o.createElement(g,null,o.createElement("title",null,"Resume Page"),o.createElement("meta",{name:"description",content:"Resume of Eric Wang"})),o.createElement(D,null,"Eric Wang"),o.createElement(R,null,"High-quality professional with 5 years of IT experience in analysis, design, implementation, and maintenance of applications using object-oriented and database technologies. Willing to accept challenges and follow best practices in software development. Experienced with cutting edge tools and industry standards. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team."),o.createElement(j,null,o.createElement(O,null,"PROFESSIONAL EXPERIENCE"),o.createElement(R,null,o.createElement(H,null,"Wine-Searcher (01/2018 - Present)"),o.createElement("p",null,"Wine-Searcher is a web search engine enabling users to locate the price and availability of a given wine, spirit or beer globally. I am working as a Java developer in scripting team, responsible for developing java crawler and improving our infructructure."),o.createElement(A,null,o.createElement(N,null,"Kendo UI, JQuery, Bootstrap, Semantic UI and handlebars on client-side development"),o.createElement(N,null,"Kendo UI, JQuery, Bootstrap, Semantic UI and handlebars on client-side development"),o.createElement(N,null,"Kendo UI, JQuery, Bootstrap, Semantic UI and handlebars on client-side development"))),o.createElement(R,null,o.createElement(H,null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018)"," "),o.createElement("p",null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) "),o.createElement(A,null,o.createElement(N,null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) "),o.createElement(N,null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) "),o.createElement(N,null,"Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) "))),o.createElement(R,null,o.createElement(H,null,"Guo Chuang Software (Software Engineer, 09/2012 – 07/2015) "),o.createElement("p",null,"GuoChuang Software is a cloud-based software solution provider. I worked as a software engineer at the department of the power industry, participated in designing and developing for our data integration web applications, data integration database systems, and report systems."),o.createElement(A,null,o.createElement(N,null,"Developed java web application and report service "),o.createElement(N,null,"Developed java web application and report service "),o.createElement(N,null,"Developed java web application and report service "),o.createElement(N,null,"Developed java web application and report service ")))),o.createElement(j,null,o.createElement(O,null,"TECHNICAL EXPERTISE "),o.createElement(R,null,o.createElement(A,null,o.createElement(N,null,"Design pattern, Data Structure and Algorithms, DevSecOps, OAuth "),o.createElement(N,null,"React, Angular, JQuery, Bootstrap, Semantic UI, Font Awesome, MVVM "),o.createElement(N,null,"C#, ASP.NET MVC, RESTful, Entity Framework, Java, Spring Boot "),o.createElement(N,null,"Microsoft SQL Server, T-SQL, Oracle, PL/SQL "),o.createElement(N,null,"Visual Studio, Visual Studio Code, Git, Node.js, Webpack, Eclipse ")))),o.createElement(j,null,o.createElement(O,null,"Education "),o.createElement(R,null,o.createElement(H,null,"Massey University (02/2016-12/2016) "),o.createElement("p",null,"Graduate Diploma in Information Science, Average A ")),o.createElement(R,null,o.createElement(H,null,"Central South University (09/2008-07/2012) "),o.createElement("p",null,"Bachelor Diploma in Software Engineering "))),o.createElement(j,null,o.createElement(O,null,"GITHUB/NPM CONTRIBUTIONS "),o.createElement(R,null,o.createElement(H,null,"Generate-Ngrx"," ",o.createElement(M,{href:"https://github.com/ericwang1120/generate-ngrx",target:"_blank"},"GitHub")," ",o.createElement(M,{href:"https://www.npmjs.com/package/generate-ngrx",target:"_blank"},"Npm")),o.createElement("p",null,"A code generator based on node environment. It can be used to generate code of Angular-Ngrx automatically.")),o.createElement(R,null,o.createElement(H,null,"My Personal Homepage:"," ",o.createElement(M,{href:"https://github.com/ericwang1120/persoal-homepage",target:"_blank"},"GitHub")," ",o.createElement(M,{href:"https://ericwangkiwi.github.io/",target:"_blank"},"Demo")),o.createElement("p",null,"This is my personal homepage, written in React, Redux and Semantic-UI. "))),o.createElement(j,null,o.createElement(O,null,"REFEREES "),o.createElement("p",null,"Available on request ")));const V=[{path:"/",exact:!0,component:U},{path:"/resume",component:U},{path:"",exact:!0,component:function(){return o.createElement("article",null,o.createElement(D,null,"Page Not Found"))}}],W=p.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`,B=p(x)`
  flex: none;
`,F=p(T)`
  flex: none;
`,G=p(c.Pushable)`
  background-color: #fafafa;
  overflow-y: scroll;
  flex: 1 0 0;
  -ms-flex: 1 0 0;
  -webkit-flex: 1 0 0;
`,L=p(d)`
  padding: 1em 0 !important;
`;class z extends o.Component{constructor(){super(...arguments),this.state={visible:!1},this.toggleVisibility=()=>{this.setState({visible:!this.state.visible})},this.disableVisibility=()=>{!0===this.state.visible&&this.setState({visible:!1})}}componentDidMount(){document.addEventListener("keydown",this.disableVisibility,!1)}render(){return o.createElement(W,null,o.createElement(B,{onToggle:this.toggleVisibility,onClick:this.disableVisibility}),o.createElement(g,{titleTemplate:"%s - Eric Wang's Personal Homepage",defaultTitle:"Eric Wang's Personal Homepage"},o.createElement("meta",{name:"description",content:"Eric Wang's Personal Homepage"})),o.createElement(h,null,o.createElement(y,(e=((e,t)=>{for(var n in t||(t={}))a.call(t,n)&&i(e,n,t[n]);if(l)for(var n of l(t))r.call(t,n)&&i(e,n,t[n]);return e})({},this.state),s={onToggle:this.toggleVisibility},t(e,n(s)))),o.createElement(G,{onClick:this.disableVisibility},o.createElement(c.Pusher,null,o.createElement(L,null,b(V))))),o.createElement(F,{onClick:this.disableVisibility}));var e,s}}f`
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
`,v.render(o.createElement(z,null),document.getElementById("root"));
