"use strict";(self.webpackChunkkeridoc=self.webpackChunkkeridoc||[]).push([[555],{7752:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=n(4848),r=n(8453);const t={},o="Create Omnigraffle infographic and convert to SVG",a={id:"how-we-did/create-omnigraffle-infographic-and-convert-to-svg",title:"Create Omnigraffle infographic and convert to SVG",description:"Why this doc: to show how-we-did create SVG files to serve as infographics on the site",source:"@site/docs/how-we-did/create-omnigraffle-infographic-and-convert-to-svg.md",sourceDirName:"how-we-did",slug:"/how-we-did/create-omnigraffle-infographic-and-convert-to-svg",permalink:"/keridoc/docs/how-we-did/create-omnigraffle-infographic-and-convert-to-svg",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Check and accept PR production KERISSE site locally",permalink:"/keridoc/docs/how-we-did/check-and-accept-pr-production-edusite-locally"},next:{title:"Create a search index",permalink:"/keridoc/docs/how-we-did/create-search-index"}},c={},d=[{value:"1. Omnigraffle app",id:"1-omnigraffle-app",level:2},{value:"2. Script fixOmnigraffleSvgOutput",id:"2-script-fixomnigrafflesvgoutput",level:2},{value:"Brief Description",id:"brief-description",level:3},{value:"Detailed Description",id:"detailed-description",level:3},{value:"3. Incoperate resulting svg in a Docusaurus page",id:"3-incoperate-resulting-svg-in-a-docusaurus-page",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"create-omnigraffle-infographic-and-convert-to-svg",children:"Create Omnigraffle infographic and convert to SVG"}),"\n",(0,s.jsx)(i.p,{children:"Why this doc: to show how-we-did create SVG files to serve as infographics on the site"}),"\n",(0,s.jsx)(i.p,{children:"For who: anyone handy with clickable images and eager to contribute or update infographics"}),"\n",(0,s.jsx)(i.p,{children:"Result: semi-automaticly (re)generated SVG files in the right spot."}),"\n",(0,s.jsx)(i.p,{children:"Three steps:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Use Omnigraffle app"}),"\n",(0,s.jsxs)(i.li,{children:["Run ",(0,s.jsx)(i.code,{children:"node maintenance/fixOmnigraffleSvgOutput.js"})," to fix the svg for our Docusaurus purposes. This script enhances the compatibility and display of OmniGraffle-produced SVGs."]}),"\n",(0,s.jsx)(i.li,{children:"Incoperate resulting svg in a Docusaurus page"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"1-omnigraffle-app",children:"1. Omnigraffle app"}),"\n",(0,s.jsxs)(i.p,{children:["Commercial app available here: ",(0,s.jsx)(i.a,{href:"https://www.omnigroup.com/download",children:"https://www.omnigroup.com/download"}),". We've used version 7."]}),"\n",(0,s.jsx)(i.p,{children:"Sub steps"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Create or adjust your drawing and links in the drawing"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Export to svg in the right directory: ",(0,s.jsx)(i.code,{children:"[root]/static/img"}),"\n",(0,s.jsx)(i.img,{src:n(6713).A+"",width:"776",height:"1170"}),"\n",(0,s.jsx)(i.img,{src:n(5767).A+"",width:"1940",height:"1062"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Set the background to transparent, tick the box in the Omnigraffle UI\n",(0,s.jsx)(i.img,{src:n(6581).A+"",width:"1602",height:"896"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Save or replace file\n",(0,s.jsx)(i.img,{src:n(8968).A+"",width:"514",height:"522"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["Step 2 below expects the svg file to be in ",(0,s.jsx)(i.code,{children:"/static/img"})," but must be run from the ",(0,s.jsx)(i.code,{children:"[root]"})]})}),"\n",(0,s.jsx)(i.h2,{id:"2-script-fixomnigrafflesvgoutput",children:"2. Script fixOmnigraffleSvgOutput"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"In short, this script enhances the compatibility and display of OmniGraffle-produced SVGs."})}),"\n",(0,s.jsxs)(i.p,{children:["Run ",(0,s.jsx)(i.code,{children:"node maintenance/fixOmnigraffleSvgOutput.js"})," to fix the svg for our Docusaurus purposes. This script enhances the compatibility and display of OmniGraffle-produced SVGs."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["Run this script from the ",(0,s.jsx)(i.code,{children:"[root]"})," of your project, it expects your files to be in dir ",(0,s.jsx)(i.code,{children:"[root]/static/img"})]})}),"\n",(0,s.jsx)(i.h3,{id:"brief-description",children:"Brief Description"}),"\n",(0,s.jsx)(i.p,{children:"This Node.js script is for dealing with SVG files generated by OmniGraffle in a Docusaurus project. It tackles common OmniGraffle SVG inconsistencies, corrects namespaces and linking attributes, and adjusts SVGs for flexible, responsive use by removing fixed dimensions."}),"\n",(0,s.jsx)(i.p,{children:"The script also fixes relative URLs in anchor tags to ensure correct linking within the Docusaurus project and rearranges specific SVG elements for optimal rendering."}),"\n",(0,s.jsx)(i.h3,{id:"detailed-description",children:"Detailed Description"}),"\n",(0,s.jsx)(i.p,{children:"This Node.js script is for OmniGraffle-generated SVGs. OmniGraffle, a diagramming and digital illustration application, often uses non-standard or deprecated attributes in its SVG output, which this script addresses to improve compatibility."}),"\n",(0,s.jsxs)(i.p,{children:["The script defines replacements to rectify common OmniGraffle SVG output issues, including the removal of SVG DOCTYPE declaration and XML version tag, and correction of the 'xl:' namespace and 'xl",":href","' attributes to 'xmlns",":xlink","' and 'xlink",":href","' respectively."]}),"\n",(0,s.jsx)(i.p,{children:"The script reads all files in the specified directory (../static/img), and for each '.svg' file, it performs the following:"}),"\n",(0,s.jsx)(i.p,{children:"Applies the predefined replacement rules"}),"\n",(0,s.jsx)(i.p,{children:"Checks for 'viewBox' attribute on the SVG element using the 'cheerio' library, and if found, removes the 'width' and 'height' attributes for responsive scaling"}),"\n",(0,s.jsx)(i.p,{children:"For each anchor ('a') element, it corrects relative URLs and rearranges rectangle ('rect') elements within the anchor for optimal rendering"}),"\n",(0,s.jsx)(i.p,{children:"Modified SVG data is then saved back to the file. Error handling is implemented at several stages to address potential issues during directory scanning, file reading, and writing."}),"\n",(0,s.jsx)(i.p,{children:"In essence, this script is a tool for preprocessing OmniGraffle-produced SVGs for better usability, compatibility, and display."}),"\n",(0,s.jsx)(i.h2,{id:"3-incoperate-resulting-svg-in-a-docusaurus-page",children:"3. Incoperate resulting svg in a Docusaurus page"}),"\n",(0,s.jsxs)(i.p,{children:["In a markdown file that is in the build-able reach within the Docusaurus tree, e.g. under the ",(0,s.jsx)(i.code,{children:"docs"})," directory, say for example\n",(0,s.jsx)(i.code,{children:"import Scraping from '/img/scraping.svg'; "})]}),"\n",(0,s.jsxs)(i.p,{children:["where ",(0,s.jsx)(i.code,{children:"Scraping"})," is a React object that you have to call with ",(0,s.jsx)(i.code,{children:"<scraping />"})," so that DS can conjure up the image on the screen behind the scenes. and ",(0,s.jsx)(i.code,{children:"scraping.svg"})," is the updated or newly produced svg in the above-described process."]}),"\n",(0,s.jsxs)(i.p,{children:["See detailed instructions here:\n",(0,s.jsx)(i.a,{href:"https://docusaurus.io/docs/markdown-features/assets#inline-svgs",children:"https://docusaurus.io/docs/markdown-features/assets#inline-svgs"})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6713:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/hwd-export-297bf7dff5defb82b88eec607835d703.png"},6581:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/hwd-inrightdir-7957f10160b5f3f77471f505cb4776a0.png"},8968:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/hwd-replace-14c649c65956bbb795f10a5e9f28a863.png"},5767:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/hwd-svgexport-473e1ef66fbc03876310f8163d8e8642.png"},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var s=n(6540);const r={},t=s.createContext(r);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);