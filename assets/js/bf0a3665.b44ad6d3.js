"use strict";(self.webpackChunkkeridoc=self.webpackChunkkeridoc||[]).push([[2714],{6508:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var s=i(4848),r=i(8453);const n={status:"pre-final"},o="Load weboftrust glossary in weboftrust github page",l={id:"how-we-did/glossary/load-glossary-weboftrust-in-docusaurus",title:"Load weboftrust glossary in weboftrust github page",description:"Why how-we-did this: We'ld like to have a straightforward editting tool that authenticates users that Create Update and/or Delete the content of the terms repo. With the use of git it will register all changes and done by whom, which facilitates curation and adds reputation.",source:"@site/docs/how-we-did/03_glossary/load-glossary-weboftrust-in-docusaurus.md",sourceDirName:"how-we-did/03_glossary",slug:"/how-we-did/glossary/load-glossary-weboftrust-in-docusaurus",permalink:"/keridoc/docs/how-we-did/glossary/load-glossary-weboftrust-in-docusaurus",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{status:"pre-final"},sidebar:"tutorialSidebar",previous:{title:"Fill out terms in the WebofTrust wiki",permalink:"/keridoc/docs/how-we-did/glossary/fill-out-terms-toip-wiki"},next:{title:"Cheat sheet: writing a page inside /docs",permalink:"/keridoc/docs/how-we-did/keridoc/cheat-sheet-writing-page"}},a={},h=[{value:"Inputkeridoc/",id:"inputkeridoc",level:2},{value:"Strongly recommended",id:"strongly-recommended",level:2},{value:"In Sync with original ToIP ACDC glossary?",id:"in-sync-with-original-toip-acdc-glossary",level:2},{value:"Why would we sync with ToIP glossary",id:"why-would-we-sync-with-toip-glossary",level:3},{value:"Why sync with ToIP glossary and not something else",id:"why-sync-with-toip-glossary-and-not-something-else",level:3},{value:"Software environmentkeridoc/",id:"software-environmentkeridoc",level:2},{value:"Steps",id:"steps",level:2},{value:"Legacy Steps",id:"legacy-steps",level:2},{value:"Legacy Pull the WebofTrust wiki by hand",id:"legacy-pull-the-weboftrust-wiki-by-hand",level:3},{value:"Legacy: Initial clone of the WOT-terms.wiki repo to local",id:"legacy-initial-clone-of-the-wot-termswiki-repo-to-local",level:4},{value:"Legacy: Refresh the WOT-terms.wiki repo to localkeridoc/",id:"legacy-refresh-the-wot-termswiki-repo-to-localkeridoc",level:4},{value:"Legacy: Copy the WebofTrust glossary resources into the Docusaurus file structure",id:"legacy-copy-the-weboftrust-glossary-resources-into-the-docusaurus-file-structure",level:3},{value:"Github Action Script deploy.yml to put WOT-terms sheet into JSON structure",id:"github-action-script-deployyml-to-put-wot-terms-sheet-into-json-structure",level:3},{value:"Constraint on WOT-terms sheetkeridoc/",id:"constraint-on-wot-terms-sheetkeridoc",level:3},{value:"Level",id:"level",level:4},{value:"Github Repo",id:"github-repo",level:4},{value:"Static pages generator",id:"static-pages-generator",level:4},{value:"Result",id:"result",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"load-weboftrust-glossary-in-weboftrust-github-page",children:"Load weboftrust glossary in weboftrust github page"}),"\n",(0,s.jsxs)(t.p,{children:["Why ",(0,s.jsx)(t.em,{children:"how-we-did"})," this: We'ld like to have a straightforward editting tool that authenticates users that Create Update and/or Delete the content of the terms repo. With the use of ",(0,s.jsx)(t.code,{children:"git"})," it will register all changes and done by whom, which facilitates curation and adds reputation.",(0,s.jsx)(t.br,{}),"\n","While the input is a rather basic operation in the wiki, we'ld like to enjoy all the extra's that a front-end technical dodumentation site can offer:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"levels of understanding"}),"\n",(0,s.jsx)(t.li,{children:"categories"}),"\n",(0,s.jsx)(t.li,{children:"pop-up"}),"\n",(0,s.jsx)(t.li,{children:"formatting"}),"\n",(0,s.jsx)(t.li,{children:"fold-puts"}),"\n",(0,s.jsx)(t.li,{children:"etc\nAnd also add meta data to the terms definition using some kind of database table, which allows:"}),"\n",(0,s.jsx)(t.li,{children:"filtering"}),"\n",(0,s.jsx)(t.li,{children:"selection"}),"\n",(0,s.jsx)(t.li,{children:"sorting"}),"\n",(0,s.jsx)(t.li,{children:"checks"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For who: anyone who likes to see the results of wiki glossary input in the front-end ",(0,s.jsx)(t.code,{children:"github.io"})," website KERISSE."]}),"\n",(0,s.jsx)(t.p,{children:"Purpose: With regard to the glossary our weboftrust github page of the WOT-terms repo serves two clearly distinctive purposes:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"conform to the ToIP and eSSIF-lab standards of generating glossaries"}),"\n",(0,s.jsx)(t.li,{children:"create our own version of the glossary where we add meta data, levels, catogeries and change the layout and UI to fit the Docusaurus KERISSE image."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Result: Github actions script (2024: ",(0,s.jsx)(t.code,{children:"content-fetch-and-deploy-update-glossary.yml"}),") transforms the source in the ",(0,s.jsx)(t.a,{href:"https://github.com/weboftrustkeridoc/wiki",children:"wiki"})," to a Docusaurus webpage structure called 'Glossary' in the left menu, thereby extracting meta data from a Google sheet into a JSON file and furthermore integrating this data on the front-end of the website."]}),"\n",(0,s.jsx)(t.h2,{id:"inputkeridoc",children:"Inputkeridoc/"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["The WebofTrust glossary (all the .md files pulled from ",(0,s.jsx)(t.a,{href:"https://github.com/weboftrustkeridoc/wiki",children:"repo wiki"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Terms WOT manage ",(0,s.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/edit#gid=209150977",children:"Google Sheet"})]}),"\n",(0,s.jsx)(t.li,{children:"Version control (git & Github)"}),"\n"]}),"\n",(0,s.jsxs)("div",{class:"alert alert-info",role:"alert",children:[(0,s.jsx)(t.h2,{id:"strongly-recommended",children:"Strongly recommended"}),(0,s.jsxs)(t.p,{children:["Be sure to leave the following files in tact when overwriting glossary items in Docusaurus dir ",(0,s.jsx)(t.code,{children:"nn-glossary"})," (",(0,s.jsx)(t.code,{children:"nn"}),'  will be any sequence number before "glossary to instruct the order") from the source WOT-terms wiki:']}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"_category_.json"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"intro.md"})}),"\n"]}),(0,s.jsx)(t.p,{children:"These are vital for Docusaurus to offer links from various parts of the documentation straight to the glossary."})]}),"\n",(0,s.jsx)(t.h2,{id:"in-sync-with-original-toip-acdc-glossary",children:"In Sync with original ToIP ACDC glossary?"}),"\n",(0,s.jsxs)(t.p,{children:["Yes, the WebofTrust wiki glossary is the new home of our glossary. But we can sync with ToIP ",(0,s.jsx)(t.a,{href:"https://github.com/trustoverip/acdc/wiki",children:"acdc wiki"})," anytime. For example by offering PRs to the ToIP version or vice versa."]}),"\n",(0,s.jsxs)(t.p,{children:["We use local repo's or PR to sync Weboftrust ",(0,s.jsx)(t.code,{children:"WOT-terms.wiki"})," and TrustoverIP ",(0,s.jsx)(t.code,{children:"acdc.wiki"}),". Note that the wiki pages of a github repo are manifest in a seperate repo."]}),"\n",(0,s.jsx)(t.h3,{id:"why-would-we-sync-with-toip-glossary",children:"Why would we sync with ToIP glossary"}),"\n",(0,s.jsx)(t.p,{children:"The main reason is interoperability. We want to join in the effort to create cross-referencing concepts, terms and glossary resources at WebofTrust."}),"\n",(0,s.jsx)(t.h3,{id:"why-sync-with-toip-glossary-and-not-something-else",children:"Why sync with ToIP glossary and not something else"}),"\n",(0,s.jsx)(t.p,{children:"From our WebofTrust view ToIP is our umbrella organisation that has similar objectives and principles. ToIP has good working relations with the European umbrella organisation eSSIF-lab too, who in 2023 can be considered as the global front runners of getting the terminology sorted out for Self-Sovereign Identity."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:["How our own repo ",(0,s.jsx)(t.a,{href:"https://github.com/WebOfTrust",children:"WebofTrust"})," came to be"]}),"\nIn 2022 we reasoned:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["we would to have to build similar Github Actions tooling like ",(0,s.jsx)(t.a,{href:"https://wiki.trustoverip.org/display/HOME/Terms+Wikis",children:"ToIP"})," already has."]}),"\n",(0,s.jsxs)(t.li,{children:["we can't join the synchronization effort already taking place with ",(0,s.jsx)(t.a,{href:"https://essif-lab.github.io/framework",children:"eSSIF-lab"})]}),"\n",(0,s.jsx)(t.li,{children:"we would have to maintain these auxiliary which keeps us off okeridoc/ant work"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In 2023 we experienced:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"lagtime by ToIP and Linux Foundation internal github governance rules"}),"\n",(0,s.jsx)(t.li,{children:'the knowledge and skills needed to "roll our own" had been acquired'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Mid 2023 we decided:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["to start using ",(0,s.jsx)(t.a,{href:"https://github.com/WebOfTrustkeridoc/wiki",children:"Weboftrust wiki"})]}),"\n",(0,s.jsxs)(t.li,{children:["to sync at will with ",(0,s.jsx)(t.a,{href:"https://github.com/trustoverip/acdc/wiki",children:"ToIP wiki"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"software-environmentkeridoc",children:"Software environmentkeridoc/"}),"\n",(0,s.jsxs)(t.p,{children:["For Github pages Docusaurus runs locally and remotely (Github Actions). ",(0,s.jsx)(t.strong,{children:"Be sure to"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Have the same version of Docusaurus installed locally as Github currently uses remotely"}),"\n",(0,s.jsxs)(t.li,{children:["study ",(0,s.jsx)(t.a,{href:"https://docusaurus.io/docs/advanced/routing#file-paths-and-url-paths",children:"this guide"})," to avoid frustration with paths."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(t.p,{children:["Because the glossary is maintained in Github wiki using Github userinterface here: ",(0,s.jsx)(t.a,{href:"https://github.com/WebOfTrustkeridoc/wiki",children:"Weboftrust wiki"}),", the most recent version is a remote repo. We have to pull this wiki-repo (be sure to have the ",(0,s.jsx)(t.strong,{children:"wiki"}),' repo not the "normal" WOT-terms repo!) to local to be able to create our own glossary and Docusaurus static site from this. The static site is then run as a github project page (branch ',(0,s.jsx)(t.em,{children:"gh-pages"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"This is performed by this section in the Github Actions script [Deploy to GitHub Pages](WOT-terms/.github/workflows\n/deploy.yml):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"      ##############################\n      # Clones the wiki\n      ##############################\n\n      - name: Checkout wiki\n        run: |\n          git clone https://github.com/WebOfTrust/WOT-terms.wiki.git wiki\n\n      # Copies the wiki contents to the /docs/04_glossary/ directory\n      - name: Copy Wiki To Docusaurus Glossary directory\n        run: |\n          mkdir -p docs/04_glossary  # Create the directory if it doesn't exist\n          \n          # Files that are already in the /docs/04_glossary/ directory will not be overwritten\n          rsync -a wiki/ docs/04_glossary/  # Synchronize wiki contents to /docs/04_glossary/\n          keridoc/\n          # The /wiki directory is not needed anymore\n          rm -rf wiki/  # Remove the /wiki directory\n      ##############################\n"})}),"\n",(0,s.jsx)(t.h2,{id:"legacy-steps",children:"Legacy Steps"}),"\n",(0,s.jsx)(t.h3,{id:"legacy-pull-the-weboftrust-wiki-by-hand",children:"Legacy Pull the WebofTrust wiki by hand"}),"\n",(0,s.jsxs)(t.p,{children:["Because the glossary is maintained in Github wiki using Github userinterface here: ",(0,s.jsx)(t.a,{href:"https://github.com/WebOfTrustkeridoc/wiki",children:"Weboftrust wiki"}),", the most recent version is a remote repo. We used to pull this wiki-repo (and had to be sure to have the ",(0,s.jsx)(t.strong,{children:"wiki"}),' repo not the "normal" WOT-terms repo!) to local to be able to create our own glossary and Docusaurus static site from this. All done by hand.']}),"\n",(0,s.jsx)(t.h4,{id:"legacy-initial-clone-of-the-wot-termswiki-repo-to-local",children:"Legacy: Initial clone of the WOT-terms.wiki repo to local"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"git clone https://github.com/weboftrust/WOT-terms.wiki.git\ncd WOT-terms.wiki\ngit remote get-url origin\nls\n"})}),"\n",(0,s.jsx)("img",{src:i(8657).A,alt:"wiki-repo-ls-result"}),"\n",(0,s.jsx)(t.h4,{id:"legacy-refresh-the-wot-termswiki-repo-to-localkeridoc",children:"Legacy: Refresh the WOT-terms.wiki repo to localkeridoc/"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"git pull origin master\n"})}),"\n",(0,s.jsx)(t.h3,{id:"legacy-copy-the-weboftrust-glossary-resources-into-the-docusaurus-file-structure",children:"Legacy: Copy the WebofTrust glossary resources into the Docusaurus file structure"}),"\n",(0,s.jsxs)(t.p,{children:["To able to generate a tailor made explanation site we use two inputs (see full list of inputs ",(0,s.jsx)(t.a,{href:"#input",children:"here"}),"):"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["The WebofTrust glossary locally (all the .md files pulled from ",(0,s.jsx)(t.a,{href:"https://github.com/WebOfTrustkeridoc/wiki",children:"Weboftrust wiki"})]}),"\n",(0,s.jsx)(t.li,{children:"Terms WOT manage (xls or csv) table, currently maintained in Google Sheets (mid 2023)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Step into the Docusaurus dir structure to ",(0,s.jsx)(t.code,{children:"WOT-terms/docs/glossary"}),"\nand execute the command ",(0,s.jsx)(t.code,{children:"cp ../../../WOT-terms.wiki/*  ."})," to finish what we'd like to achieve: Copy the glossary resources into the Docusaurus file structure."]}),"\n",(0,s.jsx)(t.h3,{id:"github-action-script-deployyml-to-put-wot-terms-sheet-into-json-structure",children:"Github Action Script deploy.yml to put WOT-terms sheet into JSON structure"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"##############################\n      # Google sheet: WOT-terms, tab: Terms-WOT-manage\n      ##############################\n\n      # Fetches data from WOT-terms (Google sheet) and generates an overview file that takes all the terms and their definitions and puts them into a single file. \n      - name: Import Google Sheet \u201cWOT-terms\u201d, tab \u201cTerms-WOT-manage\u201d data into markdown file\n        run: node fetchExternalContent/fetchTermsWOTmanage/fetchTermsWOTmanage.js\n      ##############################\n"})}),"\n",(0,s.jsx)(t.p,{children:"Inner working:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"it reads the input file (2.) per line."}),"\n",(0,s.jsx)(t.li,{children:"each row describes a term and its resource file"}),"\n",(0,s.jsx)(t.li,{children:"we create a proper file name"}),"\n",(0,s.jsx)(t.li,{children:"we try to match the terms in the ToIP glossary resources and bind them"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Docusaurus takes care of"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["writing ",(0,s.jsx)(t.code,{children:".md"})," files with Front matter code and includes"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"constraint-on-wot-terms-sheetkeridoc",children:"Constraint on WOT-terms sheetkeridoc/"}),"\n",(0,s.jsx)(t.p,{children:"Columns"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"key"}),"\n",(0,s.jsx)(t.li,{children:"(WWWWW-key) multiple foreign keys"}),"\n",(0,s.jsx)(t.li,{children:"term"}),"\n",(0,s.jsx)(t.li,{children:"text"}),"\n",(0,s.jsx)(t.li,{children:"level"}),"\n",(0,s.jsx)(t.li,{children:"link"}),"\n",(0,s.jsx)(t.li,{children:"(Cat-CCCC) multiple categories"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Explanation"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"key"})," needs to be unique and once established it should not change."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Term"}),"s are words used in the resource,"]}),"\n",(0,s.jsxs)(t.li,{children:["you can provide a ",(0,s.jsx)(t.strong,{children:"link"})," to more explanation, mainly to the ",(0,s.jsx)(t.a,{href:"https://github.com/weboftrustkeridoc/wiki/",children:"WOT glossary"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Then the ",(0,s.jsx)(t.strong,{children:"level"})," of understanding at which this term might need explanation, and finally"]}),"\n",(0,s.jsxs)(t.li,{children:["a ",(0,s.jsx)(t.em,{children:"brief explanation"})," in field ",(0,s.jsx)(t.strong,{children:"text"})," of the term in the first column."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"level",children:"Level"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"As of mid 2023 temporarily disabled"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Since KERI Suite education starts off at the level of SSI-expert, a ",(0,s.jsx)(t.em,{children:"beginner"})," is not a layman, but somebody with a good common understanding of IT and digital identity."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"1=general digital identity expert"}),"\n",(0,s.jsx)(t.li,{children:"2=advanced self-sovereign identity expert"}),"\n",(0,s.jsx)(t.li,{children:"3=autonomic identifier & KERI experts"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"github-repo",children:"Github Repo"}),"\n",(0,s.jsx)(t.p,{children:"Push the locally updated files to the remote WebofTrust repo:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'git status\ngit add .\ngit commit -m "update the WebofTrust glossary"\ngit push <remote> gh-pages\n'})}),"\n",(0,s.jsx)(t.h4,{id:"static-pages-generator",children:"Static pages generator"}),"\n",(0,s.jsx)(t.p,{children:"The push will activate Github Actions and the resources will be input to a static site generator."}),"\n",(0,s.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,s.jsx)(t.p,{children:"This is the Github pages result from the step by step above:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../category/glossary",children:"glossary"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8657:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/wiki-repo-ls-68875431943122e705931e7a87d6d708.png"},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var s=i(6540);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);