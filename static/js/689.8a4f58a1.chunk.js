"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[689],{1689:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(2791),i=n(1523),s=n(6842),a=n(184),c=function(e){var t=e.data;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:t.degree}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,a.jsx)(c,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return(0,a.jsxs)("article",{className:"jobs-container",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,a.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,a.jsxs)("ul",{className:"points",children:[t.points.map((function(e){return(0,a.jsx)("li",{children:e},e)})),(0,a.jsxs)("li",{children:["Technologies I used: ",t.technologies.map((function(e){return(0,a.jsx)("b",{children:e})}))]})]})]})},d=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"experience",children:[(0,a.jsx)("div",{className:"link-to",id:"experience"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,a.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=n(9611);function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=n(1002);function b(e,t){if(t&&("object"===(0,y.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return b(this,n)}}var v=n(4942),j=n(1413),x=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,a.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},k=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,s=t.title,c={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,j.Z)((0,j.Z)({},c),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:c,children:(0,a.jsx)("span",{children:s})}),(0,a.jsx)("div",{className:"skillbar-bar",style:o}),(0,a.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};k.defaultProps={categories:[]};var w=k,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,f.Z)(e,t)}(s,e);var t,n,r,i=g(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,j.Z)((0,j.Z)({},n),{},(0,v.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,j.Z)((0,j.Z)({},e),{},(0,v.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=s,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,a.jsx)(w,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,a.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Skills"}),(0,a.jsxs)("p",{children:[" 5 = I used it for a while and have a deeper knowledge in it",(0,a.jsx)("br",{}),"1 = Just scratched the surface, either in a Course or for a specific use case"]})]}),(0,a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Component);S.defaultProps={skills:[],categories:[]};var N=S,O=function(e){var t=e.data,n=e.last;return(0,a.jsxs)("li",{className:"course-container",children:[(0,a.jsxs)("a",{href:t.link,children:[(0,a.jsx)("h4",{className:"course-number",children:t.number}),(0,a.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,a.jsx)("div",{className:"course-dot",children:(0,a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};O.defaultProps={last:!1};var D=O,P=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,a.jsx)(D,{data:t,last:n===e.length-1},t.title)}))},C=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"courses",children:[(0,a.jsx)("div",{className:"link-to",id:"courses"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Selected Courses"})}),(0,a.jsx)("ul",{className:"course-list",children:P(t)})]})};C.defaultProps={data:[]};var W=C,A=function(){return(0,a.jsxs)("div",{className:"references",children:[(0,a.jsx)("div",{className:"link-to",id:"references"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(i.rU,{to:"/contact",children:(0,a.jsx)("h3",{children:"References are available upon request"})})})]})},I=[{title:"Object Oriented Programming in Java",link:"https://www.coursera.org/account/accomplishments/specialization/W7952TBV4LWF",university:"Duke University"},{title:"Algorithms and Data Structures",link:"https://www.coursera.org/account/accomplishments/specialization/58Z78EBHTGBY",university:"Stanford"},{title:"Computer Architecture(Nand2Tetris)",link:"https://www.nand2tetris.org/"},{title:"Operating Systems",link:"https://pages.cs.wisc.edu/~remzi/Classes/537/Spring2018/",university:"University of Wisconsin"},{title:"Computer Networks",link:"http://gaia.cs.umass.edu/kurose_ross/online_lectures.htm"},{title:"FullStack Development",link:"https://fullstackopen.com/en/",university:"University of Helsinki"},{title:"The Missing Semester of CS",link:"https://missing.csail.mit.edu/",university:"MIT"},{title:"Data Analyst For Enterprise",link:"https://missing.csail.mit.edu/",university:"Udacity"}],Z=[{school:"Alexandria University",degree:"B.S. Production and Industrial Engineering",link:"alexu.edu.eg",year:2022},{school:"Open Source Society Univerty",degree:"Computer Science Undergraduate Curriculum",link:"https://github.com/ossu/computer-science",year:2021}],R=[{company:"Outreachy Intern @ Confidential Computing Consortium",link:"https://www.outreachy.org/alums/2022-05/",daterange:"June 2022 - Septemper 2022",points:["I built a testsuite for WebAssembly System Interface (WASI).","Running WebAssembly outside the browser requires different capabilites like accessing the File System, I/O, Network access.","All WASM engines have their own interpretation of the WASI standard.","I was responsible for providing a testsuite that can be run against different WASM engines implementation of WASI.","I ran my testcases mainly against Wasmer and Wasmtime and I caught multiple unconsistent behaviors and I opened multiple issues which led to either fix their WASI implementation or imporve the WASI standard."],technologies:["Rust, ","Docker, ","Unix/Linux, ","WebAssembly, ","WASI, ","Git/Github"]}],T=n(907);var E=n(181);var L,B=[{title:"Java",competency:4,category:["Languages"]},{title:"Postman",competency:3,category:["tools"]},{title:"Rust",competency:5,category:["System Programming","Languages"]},{title:"C",competency:1,category:["System Programming","Languages"]},{title:"Docker",competency:4,category:["Tools"]},{title:"Github Actions",competency:4,category:["Tools","DevOps"]},{title:"Javascript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:4,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:3,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:1,category:["Web Development","Tools","Cloud"]},{title:"Heroku",competency:3,category:["Web Development","Tools","Cloud"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"SQL",competency:2,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:4,category:["Web Development","Javascript"]},{title:"Git",competency:4,category:["Tools","DevOps"]},{title:"Numpy",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Jupyter",competency:2,category:["Data Science","Python"]},{title:"HTML + CSS",competency:1,category:["Web Development","Languages"]},{title:"Python",competency:2,category:["Languages","Python"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]}].map((function(e){return(0,j.Z)((0,j.Z)({},e),{},{category:e.category.sort()})})),J=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],U=(L=new Set(B.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,T.Z)(e)}(L)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(L)||(0,E.Z)(L)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:J[t]}})),M=["Education","Experience","Skills","Courses","References"],_=function(){return(0,a.jsxs)(s.Z,{title:"Resume",description:"Mohamed Abdelfatah's Resume",children:[(0,a.jsx)("p",{children:(0,a.jsxs)("b",{children:["You can get the PDF version",(0,a.jsx)("a",{href:"https://drive.google.com/file/d/1dZrWR3Bpux-3U7qHi1idFDkfBcCeYmIu/view?usp=sharing",children:" here"})]})}),(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,a.jsx)("div",{className:"link-container",children:M.map((function(e){return(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,a.jsx)(l,{data:Z}),(0,a.jsx)(p,{data:R}),(0,a.jsx)(N,{skills:B,categories:U}),(0,a.jsx)(W,{data:I}),(0,a.jsx)(A,{})]})]})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},1002:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=689.8a4f58a1.chunk.js.map