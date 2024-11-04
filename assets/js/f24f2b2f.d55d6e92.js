"use strict";(self.webpackChunkkeridoc=self.webpackChunkkeridoc||[]).push([[7221],{6139:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var a=s(4848),i=s(8453),r=s(773);const n={},l="KERIA issues",d={id:"github-latest-activity/keria",title:"KERIA issues",description:"Real-time info.",source:"@site/docs/github-latest-activity/keria.mdx",sourceDirName:"github-latest-activity",slug:"/github-latest-activity/keria",permalink:"/keridoc/docs/github-latest-activity/keria",draft:!1,unlisted:!1,editUrl:"https://github.com/WebOfTrust/keridoc/tree/main/docs/github-latest-activity/keria.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KERI issues",permalink:"/keridoc/docs/github-latest-activity/keri"},next:{title:"KERIPY issues",permalink:"/keridoc/docs/github-latest-activity/keripy"}},c={},o=[];function u(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"keria-issues",children:"KERIA issues"})}),"\n",(0,a.jsx)(t.p,{children:"Real-time info."}),"\n",(0,a.jsx)(r.A,{repo:"WebOfTrust/keria"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},773:(e,t,s)=>{s.d(t,{A:()=>u});var a=s(6540),i=s(8478),r=s(4848);const n=e=>{let{counter:t,setCounter:s,fetchIssues:a,issuesLength:i}=e;return(0,r.jsx)("div",{className:"d-flex justify-content-center mb-5",children:(0,r.jsxs)("div",{className:"btn-group",children:[(0,r.jsx)("a",{className:"btn btn-outline-secondary "+(0===i?"disabled":""),onClick:()=>{s((e=>e+1)),a(t+1)},children:"Older"}),(0,r.jsx)("a",{className:"btn btn-outline-secondary "+(1===t?"disabled":""),onClick:()=>{t>1&&(s((e=>e-1)),a(t-1))},children:"Newer"})]})})};var l=s(23),d=s(2838),c=s.n(d);const o=e=>{let{repo:t}=e;const[s,i]=(0,a.useState)([]),[d,o]=(0,a.useState)(1),[u,h]=(0,a.useState)(0);(0,a.useEffect)((()=>{h(s.length)}),[s]);const p=e=>{const t=new Date-e;return{days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60)}},m=e=>{fetch(`https://api.github.com/repos/${t}/issues?state=all&per_page=15&page=${e||1}`).then((e=>{if(403===e.status&&"0"===e.headers.get("X-RateLimit-Remaining"))throw alert("Rate limit exceeded"),new Error("Rate limit exceeded");return e.json()})).then((e=>{i(e.map((e=>{return{...e,stateIndicator:(t=e.state,"open"===t?"text-warning-emphasis bg-warning-subtle":"text-light-emphasis bg-light-subtle"),timeSinceLastUpdate:p(new Date(e.updated_at))};var t})))})).catch((e=>{console.log("error: ",e),console.error("Error fetching issues:",e),alert("Error fetching issues.")}))};return(0,a.useEffect)(m,[t]),(0,a.useEffect)((()=>{if(s.length>0&&"undefined"!=typeof window){(()=>{s.forEach((e=>{e.body=e.body?c().sanitize((0,l.xI)(e.body)):"",e.created_at=new Date(e.created_at).toLocaleString(),e.updated_at=new Date(e.updated_at).toLocaleString()}))})()}}),[s]),(0,r.jsxs)("div",{className:"mx-auto issue-container",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"w-100",children:t}),(0,r.jsx)("div",{className:"w-100 d-flex flex-wrap justify-content-center",children:s.length>0?s.map(((e,t)=>(0,r.jsx)("div",{className:"generated-index-links m-0 p-2",children:(0,r.jsxs)("a",{title:`Days since last update: ${e.timeSinceLastUpdate.days}`,className:`text-start position-relative w-100 btn btn-outline-secondary-subtle text-primary-subtle btn-sm p-0 mb-1 p-1 ${e.stateIndicator}`,href:`#issue${e.number}`,children:["#",e.number,": ",e.title?e.title.substring(0,25):"No Title","\u2026",e.timeSinceLastUpdate.days>100&&"open"===e.state?(0,r.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge bg-danger border-primary-subtle p-1",children:(0,r.jsx)("span",{className:"visually-hidden",children:"New alerts"})}):(0,r.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge bg-info-subtle border-primary-subtle p-1",children:(0,r.jsx)("span",{className:"visually-hidden",children:"New alerts"})})]})},t))):(0,r.jsx)("div",{className:"alert alert-info",role:"alert",children:"No more issues to show"})}),(0,r.jsxs)("p",{className:"text-center",children:["Page ",d]}),(0,r.jsx)(n,{counter:d,setCounter:o,fetchIssues:m,issuesLength:u}),s.map(((e,t)=>(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:`card m-2 mb-5 ${e.stateIndicator}`,children:[(0,r.jsxs)("div",{className:"card-header",children:[(0,r.jsxs)("h3",{id:`issue${e.number}`,className:"card-title",children:[(0,r.jsxs)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:["#",e.number]}),": ",e.title]}),(0,r.jsxs)("span",{children:["State: ",e.state]})," \u2013 ",(0,r.jsxs)("span",{children:["Created: ",e.created_at]})," \u2013",e.timeSinceLastUpdate.days>100&&"open"===e.state?(0,r.jsxs)("span",{className:"alert alert-danger p-1",children:["Updated: ",e.updated_at]}):(0,r.jsxs)("span",{children:["Updated: ",e.updated_at]})]}),(0,r.jsx)("div",{className:"card-body",dangerouslySetInnerHTML:{__html:e.body?e.body.substring(0,300)+"\u2026":"No content."}})]})},t)))]}),(0,r.jsxs)("p",{className:"text-center",children:["Page ",d]}),(0,r.jsx)(n,{counter:d,setCounter:o,fetchIssues:m,issuesLength:u})]})},u=e=>(0,r.jsx)(i.A,{fallback:(0,r.jsx)("div",{className:"alert alert-info",role:"alert",children:"Loading\u2026"}),children:()=>(0,r.jsx)(o,{...e})})}}]);