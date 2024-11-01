(self.webpackChunkkeridoc=self.webpackChunkkeridoc||[]).push([[536],{5413:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(n=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===n.Tag||e.type===n.Script||e.type===n.Style},t.Root=n.Root,t.Text=n.Text,t.Directive=n.Directive,t.Comment=n.Comment,t.Script=n.Script,t.Style=n.Style,t.Tag=n.Tag,t.CDATA=n.CDATA,t.Doctype=n.Doctype},1141:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0;var o=n(5413),a=n(6957);i(n(6957),t);var l={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},s=function(){function e(e,t,n){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"==typeof t&&(n=t,t=l),"object"==typeof e&&(t=e,e=void 0),this.callback=null!=e?e:null,this.options=null!=t?t:l,this.elementCB=null!=n?n:null}return e.prototype.onparserinit=function(e){this.parser=e},e.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},e.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},e.prototype.onerror=function(e){this.handleCallback(e)},e.prototype.onclosetag=function(){this.lastNode=null;var e=this.tagStack.pop();this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(e)},e.prototype.onopentag=function(e,t){var n=this.options.xmlMode?o.ElementType.Tag:void 0,r=new a.Element(e,t,void 0,n);this.addNode(r),this.tagStack.push(r)},e.prototype.ontext=function(e){var t=this.lastNode;if(t&&t.type===o.ElementType.Text)t.data+=e,this.options.withEndIndices&&(t.endIndex=this.parser.endIndex);else{var n=new a.Text(e);this.addNode(n),this.lastNode=n}},e.prototype.oncomment=function(e){if(this.lastNode&&this.lastNode.type===o.ElementType.Comment)this.lastNode.data+=e;else{var t=new a.Comment(e);this.addNode(t),this.lastNode=t}},e.prototype.oncommentend=function(){this.lastNode=null},e.prototype.oncdatastart=function(){var e=new a.Text(""),t=new a.CDATA([e]);this.addNode(t),e.parent=t,this.lastNode=e},e.prototype.oncdataend=function(){this.lastNode=null},e.prototype.onprocessinginstruction=function(e,t){var n=new a.ProcessingInstruction(e,t);this.addNode(n)},e.prototype.handleCallback=function(e){if("function"==typeof this.callback)this.callback(e,this.dom);else if(e)throw e},e.prototype.addNode=function(e){var t=this.tagStack[this.tagStack.length-1],n=t.children[t.children.length-1];this.options.withStartIndices&&(e.startIndex=this.parser.startIndex),this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),t.children.push(e),n&&(e.prev=n,n.next=e),e.parent=t,this.lastNode=null},e}();t.DomHandler=s,t.default=s},6957:function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.hasChildren=t.isDocument=t.isDirective=t.isComment=t.isText=t.isCDATA=t.isTag=t.Element=t.Document=t.CDATA=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0;var a=n(5413),l=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),T(this,e)},e}();t.Node=l;var s=function(e){function t(t){var n=e.call(this)||this;return n.data=t,n}return i(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(l);t.DataNode=s;var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.ElementType.Text,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(s);t.Text=c;var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.ElementType.Comment,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(s);t.Comment=u;var p=function(e){function t(t,n){var r=e.call(this,n)||this;return r.name=t,r.type=a.ElementType.Directive,r}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(s);t.ProcessingInstruction=p;var d=function(e){function t(t){var n=e.call(this)||this;return n.children=t,n}return i(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e;return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(l);t.NodeWithChildren=d;var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.ElementType.CDATA,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(d);t.CDATA=f;var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=a.ElementType.Root,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(d);t.Document=h;var m=function(e){function t(t,n,r,i){void 0===r&&(r=[]),void 0===i&&(i="script"===t?a.ElementType.Script:"style"===t?a.ElementType.Style:a.ElementType.Tag);var o=e.call(this,r)||this;return o.name=t,o.attribs=n,o.type=i,o}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map((function(t){var n,r;return{name:t,value:e.attribs[t],namespace:null===(n=e["x-attribsNamespace"])||void 0===n?void 0:n[t],prefix:null===(r=e["x-attribsPrefix"])||void 0===r?void 0:r[t]}}))},enumerable:!1,configurable:!0}),t}(d);function y(e){return(0,a.isTag)(e)}function g(e){return e.type===a.ElementType.CDATA}function v(e){return e.type===a.ElementType.Text}function b(e){return e.type===a.ElementType.Comment}function x(e){return e.type===a.ElementType.Directive}function E(e){return e.type===a.ElementType.Root}function T(e,t){var n;if(void 0===t&&(t=!1),v(e))n=new c(e.data);else if(b(e))n=new u(e.data);else if(y(e)){var r=t?k(e.children):[],i=new m(e.name,o({},e.attribs),r);r.forEach((function(e){return e.parent=i})),null!=e.namespace&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=o({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=o({},e["x-attribsPrefix"])),n=i}else if(g(e)){r=t?k(e.children):[];var a=new f(r);r.forEach((function(e){return e.parent=a})),n=a}else if(E(e)){r=t?k(e.children):[];var l=new h(r);r.forEach((function(e){return e.parent=l})),e["x-mode"]&&(l["x-mode"]=e["x-mode"]),n=l}else{if(!x(e))throw new Error("Not implemented yet: ".concat(e.type));var s=new p(e.name,e.data);null!=e["x-name"]&&(s["x-name"]=e["x-name"],s["x-publicId"]=e["x-publicId"],s["x-systemId"]=e["x-systemId"]),n=s}return n.startIndex=e.startIndex,n.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(n.sourceCodeLocation=e.sourceCodeLocation),n}function k(e){for(var t=e.map((function(e){return T(e,!0)})),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}t.Element=m,t.isTag=y,t.isCDATA=g,t.isText=v,t.isComment=b,t.isDirective=x,t.isDocument=E,t.hasChildren=function(e){return Object.prototype.hasOwnProperty.call(e,"children")},t.cloneNode=T},5270:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES=void 0,t.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES.reduce((function(e,t){return e[t.toLowerCase()]=t,e}),{})},5496:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,u,p=e.match(o),d=p&&p[1]?p[1].toLowerCase():"";switch(d){case n:var h=c(e);if(!a.test(e))null===(t=null==(y=h.querySelector(r))?void 0:y.parentNode)||void 0===t||t.removeChild(y);if(!l.test(e))null===(u=null==(y=h.querySelector(i))?void 0:y.parentNode)||void 0===u||u.removeChild(y);return h.querySelectorAll(n);case r:case i:var m=s(e).querySelectorAll(d);return l.test(e)&&a.test(e)?m[0].parentNode.childNodes:m;default:return f?f(e):(y=s(e,i).querySelector(i)).childNodes;var y}};var n="html",r="head",i="body",o=/<([a-zA-Z]+[0-9]?)/,a=/<head[^]*>/i,l=/<body[^]*>/i,s=function(e,t){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},c=function(e,t){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},u="object"==typeof window&&window.DOMParser;if("function"==typeof u){var p=new u;s=c=function(e,t){return t&&(e="<".concat(t,">").concat(e,"</").concat(t,">")),p.parseFromString(e,"text/html")}}if("object"==typeof document&&document.implementation){var d=document.implementation.createHTMLDocument();s=function(e,t){if(t){var n=d.documentElement.querySelector(t);return n&&(n.innerHTML=e),d}return d.documentElement.innerHTML=e,d}}var f,h="object"==typeof document&&document.createElement("template");h&&h.content&&(f=function(e){return h.innerHTML=e,h.content.childNodes})},2471:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];var t=e.match(a),n=t?t[1]:void 0;return(0,o.formatDOM)((0,i.default)(e),null,n)};var i=r(n(5496)),o=n(7731),a=/<(![a-zA-Z\s]+)>/},7731:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatAttributes=o,t.formatDOM=function e(t,n,i){void 0===n&&(n=null);for(var l,s=[],c=0,u=t.length;c<u;c++){var p=t[c];switch(p.nodeType){case 1:var d=a(p.nodeName);(l=new r.Element(d,o(p.attributes))).children=e("template"===d?p.content.childNodes:p.childNodes,l);break;case 3:l=new r.Text(p.nodeValue);break;case 8:l=new r.Comment(p.nodeValue);break;default:continue}var f=s[c-1]||null;f&&(f.next=l),l.parent=n,l.prev=f,l.next=null,s.push(l)}i&&((l=new r.ProcessingInstruction(i.substring(0,i.indexOf(" ")).toLowerCase(),i)).next=s[0]||null,l.parent=n,s.unshift(l),s[1]&&(s[1].prev=s[0]));return s};var r=n(1141),i=n(5270);function o(e){for(var t={},n=0,r=e.length;n<r;n++){var i=e[n];t[i.name]=i.value}return t}function a(e){var t=function(e){return i.CASE_SENSITIVE_TAG_NAMES_MAP[e]}(e=e.toLowerCase());return t||e}},840:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){void 0===e&&(e={});var n={},c=Boolean(e.type&&l[e.type]);for(var u in e){var p=e[u];if((0,r.isCustomAttribute)(u))n[u]=p;else{var d=u.toLowerCase(),f=s(d);if(f){var h=(0,r.getPropertyInfo)(f);switch(o.includes(f)&&a.includes(t)&&!c&&(f=s("default"+d)),n[f]=p,h&&h.type){case r.BOOLEAN:n[f]=!0;break;case r.OVERLOADED_BOOLEAN:""===p&&(n[f]=!0)}}else i.PRESERVE_CUSTOM_ATTRIBUTES&&(n[u]=p)}}return(0,i.setStyleProp)(e.style,n),n};var r=n(4210),i=n(4958),o=["checked","value"],a=["input","select","textarea"],l={reset:!0,submit:!0};function s(e){return r.possibleStandardNames[e]}},308:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n){void 0===n&&(n={});for(var r=[],i="function"==typeof n.replace,c=n.transform||a.returnFirstArg,u=n.library||l,p=u.cloneElement,d=u.createElement,f=u.isValidElement,h=t.length,m=0;m<h;m++){var y=t[m];if(i){var g=n.replace(y,m);if(f(g)){h>1&&(g=p(g,{key:g.key||m})),r.push(c(g,y,m));continue}}if("text"!==y.type){var v=y,b={};s(v)?((0,a.setStyleProp)(v.attribs.style,v.attribs),b=v.attribs):v.attribs&&(b=(0,o.default)(v.attribs,v.name));var x=void 0;switch(y.type){case"script":case"style":y.children[0]&&(b.dangerouslySetInnerHTML={__html:y.children[0].data});break;case"tag":"textarea"===y.name&&y.children[0]?b.defaultValue=y.children[0].data:y.children&&y.children.length&&(x=e(y.children,n));break;default:continue}h>1&&(b.key=m),r.push(c(d(y.name,b,x),y,m))}else{var E=!y.data.trim().length;if(E&&y.parent&&!(0,a.canTextBeChildOfNode)(y.parent))continue;if(n.trim&&E)continue;r.push(c(y.data,y,m))}}return 1===r.length?r[0]:r};var i=n(6540),o=r(n(840)),a=n(4958),l={cloneElement:i.cloneElement,createElement:i.createElement,isValidElement:i.isValidElement};function s(e){return a.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&(0,a.isCustomComponent)(e.name,e.attribs)}},442:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.htmlToDOM=t.domToReact=t.attributesToProps=t.Text=t.ProcessingInstruction=t.Element=t.Comment=void 0,t.default=function(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];return(0,a.default)((0,i.default)(e,(null==t?void 0:t.htmlparser2)||s),t)};var i=r(n(2471));t.htmlToDOM=i.default;var o=r(n(840));t.attributesToProps=o.default;var a=r(n(308));t.domToReact=a.default;var l=n(1141);Object.defineProperty(t,"Comment",{enumerable:!0,get:function(){return l.Comment}}),Object.defineProperty(t,"Element",{enumerable:!0,get:function(){return l.Element}}),Object.defineProperty(t,"ProcessingInstruction",{enumerable:!0,get:function(){return l.ProcessingInstruction}}),Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return l.Text}});var s={lowerCaseAttributeNames:!1}},4958:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.returnFirstArg=t.canTextBeChildOfNode=t.ELEMENTS_WITH_NO_TEXT_CHILDREN=t.PRESERVE_CUSTOM_ATTRIBUTES=void 0,t.isCustomComponent=function(e,t){if(!e.includes("-"))return Boolean(t&&"string"==typeof t.is);if(a.has(e))return!1;return!0},t.setStyleProp=function(e,t){if("string"!=typeof e)return;if(!e.trim())return void(t.style={});try{t.style=(0,o.default)(e,l)}catch(n){t.style={}}};var i=n(6540),o=r(n(5229)),a=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);var l={reactCompat:!0};t.PRESERVE_CUSTOM_ATTRIBUTES=Number(i.version.split(".")[0])>=16,t.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);t.canTextBeChildOfNode=function(e){return!t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(e.name)};t.returnFirstArg=function(e){return e}},9788:e=>{var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,s=/^\s+|\s+$/g,c="";function u(e){return e?e.replace(s,c):c}e.exports=function(e,s){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];s=s||{};var p=1,d=1;function f(e){var t=e.match(n);t&&(p+=t.length);var r=e.lastIndexOf("\n");d=~r?e.length-r:d+e.length}function h(){var e={line:p,column:d};return function(t){return t.position=new m(e),b(),t}}function m(e){this.start=e,this.end={line:p,column:d},this.source=s.source}m.prototype.content=e;var y=[];function g(t){var n=new Error(s.source+":"+p+":"+d+": "+t);if(n.reason=t,n.filename=s.source,n.line=p,n.column=d,n.source=e,!s.silent)throw n;y.push(n)}function v(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function b(){v(r)}function x(e){var t;for(e=e||[];t=E();)!1!==t&&e.push(t);return e}function E(){var t=h();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;c!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,c===e.charAt(n-1))return g("End of comment missing");var r=e.slice(2,n-2);return d+=2,f(r),e=e.slice(n),d+=2,t({type:"comment",comment:r})}}function T(){var e=h(),n=v(i);if(n){if(E(),!v(o))return g("property missing ':'");var r=v(a),s=e({type:"declaration",property:u(n[0].replace(t,c)),value:r?u(r[0].replace(t,c)):c});return v(l),s}}return b(),function(){var e,t=[];for(x(t);e=T();)!1!==e&&(t.push(e),x(t));return t}()}},4210:(e,t,n)=>{"use strict";function r(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}const i={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach((e=>{i[e]=new r(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((([e,t])=>{i[e]=new r(e,1,!1,t,null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((e=>{i[e]=new r(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((e=>{i[e]=new r(e,2,!1,e,null,!1,!1)})),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach((e=>{i[e]=new r(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((e=>{i[e]=new r(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((e=>{i[e]=new r(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((e=>{i[e]=new r(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((e=>{i[e]=new r(e,5,!1,e.toLowerCase(),null,!1,!1)}));const o=/[\-\:]([a-z])/g,a=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach((e=>{const t=e.replace(o,a);i[t]=new r(t,1,!1,e,null,!1,!1)})),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach((e=>{const t=e.replace(o,a);i[t]=new r(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((e=>{const t=e.replace(o,a);i[t]=new r(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((e=>{i[e]=new r(e,1,!1,e.toLowerCase(),null,!1,!1)}));i.xlinkHref=new r("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((e=>{i[e]=new r(e,1,!1,e.toLowerCase(),null,!0,!0)}));const{CAMELCASE:l,SAME:s,possibleStandardNames:c}=n(6811),u=RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")),p=Object.keys(c).reduce(((e,t)=>{const n=c[t];return n===s?e[t]=t:n===l?e[t.toLowerCase()]=t:e[t]=n,e}),{});t.BOOLEAN=3,t.BOOLEANISH_STRING=2,t.NUMERIC=5,t.OVERLOADED_BOOLEAN=4,t.POSITIVE_NUMERIC=6,t.RESERVED=0,t.STRING=1,t.getPropertyInfo=function(e){return i.hasOwnProperty(e)?i[e]:null},t.isCustomAttribute=u,t.possibleStandardNames=p},6811:(e,t)=>{t.SAME=0;t.CAMELCASE=1,t.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1}},5229:function(e,t,n){"use strict";var r=(this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(n(1133)),i=n(8917);function o(e,t){var n={};return e&&"string"==typeof e?((0,r.default)(e,(function(e,r){e&&r&&(n[(0,i.camelCase)(e,t)]=r)})),n):n}o.default=o,e.exports=o},8917:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.camelCase=void 0;var n=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,i=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,l=function(e,t){return t.toUpperCase()},s=function(e,t){return"".concat(t,"-")};t.camelCase=function(e,t){return void 0===t&&(t={}),function(e){return!e||i.test(e)||n.test(e)}(e)?e:(e=e.toLowerCase(),(e=t.reactCompat?e.replace(a,s):e.replace(o,s)).replace(r,l))}},1133:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=null;if(!e||"string"!=typeof e)return n;var r=(0,i.default)(e),o="function"==typeof t;return r.forEach((function(e){if("declaration"===e.type){var r=e.property,i=e.value;o?t(r,i,e):i&&((n=n||{})[r]=i)}})),n};var i=r(n(9788))},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>a,x:()=>l});var r=n(6540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}},900:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>i});var r=n(442);const i=r.default||r}}]);