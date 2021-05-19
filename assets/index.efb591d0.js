var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,o=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&r(e,n,t[n]);if(l)for(var n of l(t))i.call(t,n)&&r(e,n,t[n]);return e};import{P as s,R as m,S as c,M as u,L as d,I as p,q as g,H as b,C as E,B as h,a as f,b as y,$ as v,c as x}from"./vendor.c892d092.js";function k(e){return m.createElement(c,{as:u,animation:"overlay",width:"thin",visible:e.visible,icon:"labeled",vertical:!0,inverted:!0},m.createElement(u.Item,{as:d,to:"/resume",name:"resume",onClick:e.onToggle},m.createElement(p,{name:"file text outline"}),"resume"),m.createElement(u.Item,{as:d,to:"/github",name:"GitHub Repos",onClick:e.onToggle},m.createElement(p,{name:"github"}),"github"))}k.propTypes={visible:s.bool,onToggle:s.func};const w=g.h1`
  border-bottom: 1px solid;
  text-align: center;
  font-size: 2em;
  margin-bottom: 0.25em;
`,P=()=>m.createElement("div",null,m.createElement(b,null,m.createElement("title",null,"Resume Page"),m.createElement("meta",{name:"description",content:"Resume of Eric Wang"})),m.createElement(w,null,"Eric Wang"));function C(){return m.createElement("article",null,m.createElement(w,null,"Page Not Found"))}function T(e){return m.createElement("h3",o({},e))}const H=g.b`
  align-self: flex-end;

  @media (max-width: 768px) {
    display: none !important;
  }
`,I=g(u)`
  margin: 0 !important;
`,O=g(u.Item)`
  @media (max-width: 768px) {
    display: none !important;
  }
`;class V extends m.PureComponent{render(){return m.createElement(I,{size:"large",onClick:this.props.onClick},m.createElement(E,{fluid:!0},m.createElement(u.Item,{as:"a",onClick:this.props.onToggle},m.createElement(p,{size:"large",name:"list layout"}),m.createElement(H,null,"Menu")),m.createElement(O,null,m.createElement(T,null,"Eric Wang's Personal Homepage")),m.createElement(u.Item,{as:"a",href:"mailto:eric.kiwi@outlook.com"},m.createElement(p,{size:"large",name:"mail outline"}),m.createElement(H,null,"Mail To Me"))))}}const j=g.a`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`,M=g(u)`
  margin: 0 !important;

  @media (max-width: 768px) {
    display: none !important;
  }
`;function R(e){return m.createElement(M,{size:"large",onClick:e.onClick},m.createElement(E,{fluid:!0},m.createElement(u.Item,null,"Made by ",m.createElement(j,{href:"https://github.com/ericwang1120"},"Eric Wang"),", Based on React, Mobx and",m.createElement(j,{href:"https://react.semantic-ui.com/"}," Semantic UI React"),".")))}R.propTypes={onClick:s.func};const W=g.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`,S=g(V)`
  flex: none;
`,z=g(R)`
  flex: none;
`,N=g(c.Pushable)`
  background-color: #fafafa;
  overflow-y: scroll;
  flex: 1 0 0;
  -ms-flex: 1 0 0;
  -webkit-flex: 1 0 0;
`,B=g(E)`
  padding: 1em 0 !important;
`;class L extends m.Component{constructor(){super(...arguments),this.state={visible:!1},this.toggleVisibility=()=>{this.setState({visible:!this.state.visible})},this.disableVisibility=()=>{!0===this.state.visible&&this.setState({visible:!1})}}componentDidMount(){document.addEventListener("keydown",this.disableVisibility,!1)}render(){return m.createElement(W,null,m.createElement(S,{onToggle:this.toggleVisibility,onClick:this.disableVisibility}),m.createElement(b,{titleTemplate:"%s - Eric Wang's Personal Homepage",defaultTitle:"Eric Wang's Personal Homepage"},m.createElement("meta",{name:"description",content:"Eric Wang's Personal Homepage"})),m.createElement(h,{basename:"/resume"},m.createElement(k,(e=o({},this.state),l={onToggle:this.toggleVisibility},t(e,n(l)))),m.createElement(N,{onClick:this.disableVisibility},m.createElement(c.Pusher,null,m.createElement(B,null,m.createElement(f,null,m.createElement(y,{exact:!0,path:"/",component:P}),m.createElement(y,{path:"/resume",component:P}),m.createElement(y,{path:"/home",component:P}),m.createElement(y,{path:"",component:C})))))),m.createElement(z,{onClick:this.disableVisibility}));var e,l}}v`
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
`,x.render(m.createElement(L,null),document.getElementById("root"));
