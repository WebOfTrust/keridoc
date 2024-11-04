"use strict";(self.webpackChunkkeridoc=self.webpackChunkkeridoc||[]).push([[6602],{1828:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=i(4848),t=i(8453);const a={},r="Cheat sheet: writing a page inside /docs",l={id:"how-we-did/keridoc/cheat-sheet-writing-page",title:"Cheat sheet: writing a page inside /docs",description:"What is this: A few rules about headings, internal linking, images and more that we kept in mind. It's how we did it.",source:"@site/docs/how-we-did/04_keridoc/cheat-sheet-writing-page.md",sourceDirName:"how-we-did/04_keridoc",slug:"/how-we-did/keridoc/cheat-sheet-writing-page",permalink:"/keridoc/docs/how-we-did/keridoc/cheat-sheet-writing-page",draft:!1,unlisted:!1,editUrl:"https://github.com/WebOfTrust/keridoc/tree/main/docs/how-we-did/04_keridoc/cheat-sheet-writing-page.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Load weboftrust glossary in weboftrust github page",permalink:"/keridoc/docs/how-we-did/glossary/load-glossary-weboftrust-in-docusaurus"},next:{title:"Check and accept PR production KERISSE site locally",permalink:"/keridoc/docs/how-we-did/keridoc/check-and-accept-pr-production-edusite-locally"}},o={},d=[{value:"Strongly recommended",id:"strongly-recommended",level:2},{value:"General",id:"general",level:2},{value:"Headings",id:"headings",level:2},{value:"Links: Internal linking in the <code>docs</code> section",id:"links-internal-linking-in-the-docs-section",level:2},{value:"Warnings",id:"warnings",level:3},{value:"Linking from page to page",id:"linking-from-page-to-page",level:3},{value:"Create links to anchors in the same page",id:"create-links-to-anchors-in-the-same-page",level:3},{value:"Linking to an anchor in another page",id:"linking-to-an-anchor-in-another-page",level:3},{value:"Links: External linking",id:"links-external-linking",level:2},{value:"Inserting and styling images",id:"inserting-and-styling-images",level:2},{value:"How to insert images in your text",id:"how-to-insert-images-in-your-text",level:3},{value:"To insert a local image",id:"to-insert-a-local-image",level:4},{value:"To insert a local image that is a link",id:"to-insert-a-local-image-that-is-a-link",level:4},{value:"To insert a remote image",id:"to-insert-a-remote-image",level:4},{value:"To insert a remote image that is a link",id:"to-insert-a-remote-image-that-is-a-link",level:4},{value:"How to style images",id:"how-to-style-images",level:3},{value:"How to link to the image",id:"how-to-link-to-the-image",level:3},{value:"Naming conventions",id:"naming-conventions",level:2},{value:"Files and Directories",id:"files-and-directories",level:3},{value:"Media (images, video etc)",id:"media-images-video-etc",level:3},{value:"Sidebar Menu",id:"sidebar-menu",level:2},{value:"Ordering",id:"ordering",level:3},{value:"Final note",id:"final-note",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"cheat-sheet-writing-a-page-inside-docs",children:["Cheat sheet: writing a page inside ",(0,s.jsx)(n.code,{children:"/docs"})]})}),"\n",(0,s.jsxs)(n.p,{children:["What is this: A few rules about headings, internal linking, images and more that we kept in mind. It's ",(0,s.jsx)(n.em,{children:"how we did"})," it."]}),"\n",(0,s.jsx)(n.p,{children:"For who: Anyone documenting in the KERI Suite and WOT-terms repo specifically."}),"\n",(0,s.jsx)(n.p,{children:"What problem does it solve: Everything that is important to do the right way, but you keep forgetting how to do it. Here's the cheat sheet to remind you and assist you."}),"\n",(0,s.jsx)(n.p,{children:"What's the result: The KERI Suite uses Docusaurus to generate enhanced technical documentation. Complying with the rules in this cheat sheet means optimal readability, less broken links, well-styled images, etc."}),"\n",(0,s.jsxs)("div",{className:"alert alert-info",role:"alert",children:[(0,s.jsx)(n.h2,{id:"strongly-recommended",children:"Strongly recommended"}),(0,s.jsxs)(n.p,{children:["Use an editor that fixes markdown links when changing file names or moving files. We recommend ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"https://code.visualstudio.com",children:"Visual Studio Code"})}),"."]}),(0,s.jsx)(n.p,{children:"Change default setting in Visual Studio Code:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go to preferences"}),"\n",(0,s.jsx)(n.li,{children:"Type in search field: \u201cmarkdown link update\u201d"}),"\n",(0,s.jsx)(n.li,{children:"Set to \u201cprompt\u201d or \u201calways\u201d"}),"\n"]}),(0,s.jsxs)(n.p,{children:["(",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=3hcN0yfOAzQ",children:"This video"})," explains."]})]}),"\n",(0,s.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,s.jsx)(n.p,{children:"Use empty lines between every block:"}),"\n",(0,s.jsx)(n.p,{children:"Right:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Main title\n\n## Subtitle\n\nA paragraph text\n\nAnother paragraph text\n"})}),"\n",(0,s.jsx)(n.p,{children:"Wrong:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Main title\n## Subtitle\nA paragraph text\nAnother paragraph text\n"})}),"\n",(0,s.jsx)(n.h2,{id:"headings",children:"Headings"}),"\n",(0,s.jsxs)(n.p,{children:["Start a page with a ",(0,s.jsx)(n.code,{children:"#"})," followed by a space."]}),"\n",(0,s.jsxs)(n.p,{children:["(If you start with a ",(0,s.jsx)(n.code,{children:"##"})," then Docusaurus will ad a ",(0,s.jsx)(n.code,{children:"#"})," based on the file name. Not desirable.)"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"# Main title"})}),"\n",(0,s.jsxs)(n.p,{children:["This will result in a ",(0,s.jsx)(n.code,{children:"<h1>"})," in the final html after the Markdown is parsed."]}),"\n",(0,s.jsxs)(n.p,{children:["Add structure to your document by adding ",(0,s.jsx)(n.code,{children:"<h2>"}),", in Markdown a ",(0,s.jsx)(n.code,{children:"##"})," followed by a space."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Main title\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n## Subtitle 1\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium\n\n## Subtitle 2\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"links-internal-linking-in-the-docs-section",children:["Links: Internal linking in the ",(0,s.jsx)(n.code,{children:"docs"})," section"]}),"\n",(0,s.jsxs)("div",{className:"alert alert-info",role:"alert",children:[(0,s.jsx)(n.h3,{id:"warnings",children:"Warnings"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Unlike a CMS like Wordpress, Docusaurus is file based. Renaming a file means that a link to this file no longer works if the file name is not also changed inside the link."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"After renaming a file or directory you will have to restart the localserver to take effect. Also it is recommended to use an incognito browser to avoid caching issues. (And even then it looks like sometimes it may take while before links start to work.)"}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"linking-from-page-to-page",children:"Linking from page to page"}),"\n",(0,s.jsx)(n.p,{children:"Internal linking is not easy in most content management systems. In Docusaurus it's difficult to keep all links working after renaming files. Here you will find best practise."}),"\n",(0,s.jsx)(n.p,{children:"General rules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"use relative links"}),"\n",(0,s.jsxs)(n.li,{children:["use the ",(0,s.jsx)(n.code,{children:".md"})," extension at the end"]}),"\n",(0,s.jsxs)(n.li,{children:["use the ",(0,s.jsx)(n.strong,{children:"file"}),"name, not what you see in the browser address bar (numbers at the beginning of a file are used for ordering and removed in the url. You should use the file name with numbers in it)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Let's take this file system:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 concepts\n\u2502   \u251c\u2500\u2500 concepts.md\n\u2502   \u2514\u2500\u2500 keri-dev-env.md\n\u251c\u2500\u2500 education\n\u2502   \u251c\u2500\u2500 intro.md\n"})}),"\n",(0,s.jsx)(n.p,{children:"To create a link inside education/intro.md TO concepts/concepts.md write the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[Link to concepts](../concepts/concepts.md)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you do it this way, you can make Visual Studio Code ",(0,s.jsx)(n.a,{href:"#strongly-recommended",children:"work for you"})," and update the links if you move or rename files."]}),"\n",(0,s.jsxs)(n.p,{children:["There are more ways to create links, read about it on ",(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/links",children:"https://docusaurus.io/docs/markdown-features/links"}),", but this is how we do it here."]}),"\n",(0,s.jsx)(n.h3,{id:"create-links-to-anchors-in-the-same-page",children:"Create links to anchors in the same page"}),"\n",(0,s.jsx)(n.p,{children:"To create a link to an anchor in the same page:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[anchor link inside the same page](#foo)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"linking-to-an-anchor-in-another-page",children:"Linking to an anchor in another page"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[Link to concepts](../concepts/concepts.md#foo)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"links-external-linking",children:"Links: External linking"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[link text](https://www.example.com)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"inserting-and-styling-images",children:"Inserting and styling images"}),"\n",(0,s.jsx)(n.h3,{id:"how-to-insert-images-in-your-text",children:"How to insert images in your text"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use html syntax (not markdown)"}),"\n",(0,s.jsxs)(n.li,{children:["however, use ",(0,s.jsx)(n.code,{children:"className"})," and not the normal ",(0,s.jsx)(n.code,{children:"class"})]}),"\n",(0,s.jsxs)(n.li,{children:["and use ",(0,s.jsx)(n.code,{children:"require"})," for local images"]}),"\n",(0,s.jsxs)(n.li,{children:["do not add html attributes like ",(0,s.jsx)(n.code,{children:"width"})," or ",(0,s.jsx)(n.code,{children:"height"})," and do not use ",(0,s.jsx)(n.code,{children:"style='\u2026'"})]}),"\n",(0,s.jsxs)(n.li,{children:["always use an ",(0,s.jsx)(n.code,{children:"alt"})," attribute. If the image is decorative leave it empty (",(0,s.jsx)(n.code,{children:'alt=""'}),"), else write something as if you explain the image to someone on the phone"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can copy these examples and use it (there is a copy button available at the right):"}),"\n",(0,s.jsx)(n.h4,{id:"to-insert-a-local-image",children:"To insert a local image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<img className="inline-small-start" src={require(\'/static/img/foo.png\').default} alt="Foo" />\n'})}),"\n",(0,s.jsx)(n.h4,{id:"to-insert-a-local-image-that-is-a-link",children:"To insert a local image that is a link"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<a href="https://www.example.com"><img className="inline-small-start" src={require(\'/static/img/foo.png\').default} alt="Foo" /></a>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"to-insert-a-remote-image",children:"To insert a remote image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<img className="inline-small-start" src=\'https://www.example.dom/img/foo.png\' alt="Foo" />\n'})}),"\n",(0,s.jsx)(n.h4,{id:"to-insert-a-remote-image-that-is-a-link",children:"To insert a remote image that is a link"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<a href="https://www.example.com"><img className="inline-small-start" src=\'https://www.example.dom/img/foo.png\' alt="Foo" /></a>\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can insert images using Markdown but you cannot style these images using classes (CSS). So that is not very usable. That is why we use html syntax."}),"\n",(0,s.jsx)(n.h3,{id:"how-to-style-images",children:"How to style images"}),"\n",(0,s.jsx)(n.p,{children:"Images are styled via CSS."}),"\n",(0,s.jsx)(n.p,{children:"The following classes are available for styling (there is a copy button available at the right):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"inline-thumb-start\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"inline-thumb-end\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"inline-small-start\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"inline-small-end\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"inline-medium-start\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"inline-medium-end\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start means \u201cto the left\u201d (in left-to-right languages)."}),"\n",(0,s.jsx)(n.p,{children:"When no class is added the image will be 100% width."}),"\n",(0,s.jsx)(n.h3,{id:"how-to-link-to-the-image",children:"How to link to the image"}),"\n",(0,s.jsx)(n.p,{children:"TBW"}),"\n",(0,s.jsxs)(n.p,{children:["More info: ",(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/assets#images",children:"https://docusaurus.io/docs/markdown-features/assets#images"})]}),"\n",(0,s.jsx)(n.h2,{id:"naming-conventions",children:"Naming conventions"}),"\n",(0,s.jsx)(n.h3,{id:"files-and-directories",children:"Files and Directories"}),"\n",(0,s.jsx)(n.p,{children:"Use"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Naming_convention_(programming)#Delimiter-separated_words",children:"kebab-case"})}),"\n",(0,s.jsxs)(n.li,{children:["all lower case (except\u2026 in the glossary, where you will find files like ",(0,s.jsx)(n.code,{children:"ACDC.md"})," etc. These abbreviations need to be uppercase)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This is how it is done in a default Docusaurus install."}),"\n",(0,s.jsx)(n.p,{children:"Examples:"}),"\n",(0,s.jsxs)(n.p,{children:["Directory: ",(0,s.jsx)(n.code,{children:"tutorial-basics"})]}),"\n",(0,s.jsxs)(n.p,{children:["File: ",(0,s.jsx)(n.code,{children:"create-a-page.md"})]}),"\n",(0,s.jsxs)(n.p,{children:["Combined: ",(0,s.jsx)(n.code,{children:"tutorial-basics/create-a-page.md"})]}),"\n",(0,s.jsx)(n.h3,{id:"media-images-video-etc",children:"Media (images, video etc)"}),"\n",(0,s.jsx)(n.p,{children:"No conventions (yet), except two:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"remove spaces and replace with dash, underscore or nothing."}),"\n",(0,s.jsxs)(n.li,{children:["put all media files in ",(0,s.jsx)(n.code,{children:"/static"})," (and not in an image dir somewhere in ",(0,s.jsx)(n.code,{children:"/doc"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sidebar-menu",children:"Sidebar Menu"}),"\n",(0,s.jsx)(n.h3,{id:"ordering",children:"Ordering"}),"\n",(0,s.jsx)(n.p,{children:"The sidebar menu is autogenerated and sorted alphanumerically."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 concepts\n\u2502   \u251c\u2500\u2500 concepts.md\n\u2502   \u2514\u2500\u2500 keri-dev-env.md\n\u251c\u2500\u2500 education\n\u2502   \u251c\u2500\u2500 intro.md\n"})}),"\n",(0,s.jsx)(n.p,{children:"The directories \u201cconcepts\u201d and \u201ceducation\u201d are called \u201ccategories\u201d in Docusaurus. To give them a custom order, do as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 02_concepts\n\u2502   \u251c\u2500\u2500 concepts.md\n\u2502   \u2514\u2500\u2500 keri-dev-env.md\n\u251c\u2500\u2500 01_education\n\u2502   \u251c\u2500\u2500 intro.md\n"})}),"\n",(0,s.jsx)(n.p,{children:"As a bonus effect, the Visual Studio File Explorer will rearrange the directories, so will other systems like MacOS Finder etc. It is simple, effective (and intuitive for most people)."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"01_"})," and ",(0,s.jsx)(n.code,{children:"02_"})," are removed and not visible in the browser. Renumbering will change paths in internal links but Visual Studio Code will fix these paths for you if you ",(0,s.jsx)(n.a,{href:"#strongly-recommended",children:"have configured it to do so"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"final-note",children:"Final note"}),"\n",(0,s.jsx)(n.p,{children:"Thank you for going all the way down the cheat sheet. Have a great time writing!"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);