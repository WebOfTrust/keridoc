"use strict";(self.webpackChunkkeridoc=self.webpackChunkkeridoc||[]).push([[5015],{2261:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(4848),s=n(8453);const r={},d=void 0,a={id:"resources/mdfiles/draft-pfeairheller-ptel",title:"draft-pfeairheller-ptel",description:'title: "Public Transaction Event Logs (PTEL)"',source:"@site/docs/05_resources/mdfiles/draft-pfeairheller-ptel.md",sourceDirName:"05_resources/mdfiles",slug:"/resources/mdfiles/draft-pfeairheller-ptel",permalink:"/keridoc/docs/resources/mdfiles/draft-pfeairheller-ptel",draft:!1,unlisted:!1,editUrl:"https://github.com/WebOfTrust/keridoc/tree/main/docs/05_resources/mdfiles/draft-pfeairheller-ptel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"draft-pfeairheller-did-keri",permalink:"/keridoc/docs/resources/mdfiles/draft-pfeairheller-did-keri"},next:{title:"draft-ssmith-acdc",permalink:"/keridoc/docs/resources/mdfiles/draft-ssmith-acdc"}},l={},c=[{value:"author",id:"author",level:2},{value:"Transaction Event Log",id:"transaction-event-log",level:2},{value:"Verifiable Credential Registry",id:"verifiable-credential-registry",level:2},{value:"Management TEL",id:"management-tel",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Registry Inception Event",id:"registry-inception-event",level:3},{value:"Registry Rotation Event",id:"registry-rotation-event",level:3},{value:"Verifiable Credential TELs",id:"verifiable-credential-tels",level:2},{value:"Self Addressing Identifiers",id:"self-addressing-identifiers",level:3},{value:"Derivation Process",id:"derivation-process",level:3},{value:"Self-Addressing Identifiers in a TEL",id:"self-addressing-identifiers-in-a-tel",level:2},{value:"Credential Issuance/Revocation TEL",id:"credential-issuancerevocation-tel",level:2},{value:"Simple Credential Issuance Event",id:"simple-credential-issuance-event",level:3},{value:"Simple Credential Revocation Event",id:"simple-credential-revocation-event",level:3},{value:"Credential Issuance Event",id:"credential-issuance-event",level:3},{value:"Credential Revocation Event",id:"credential-revocation-event",level:3},{value:"Use Case",id:"use-case",level:2},{value:"Security Considerations",id:"security-considerations",level:2}];function o(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:'title: "Public Transaction Event Logs (PTEL)"\nabbrev: "PTEL"\ndocname: draft-pfeairheller-ptel-latest\ncategory: info'}),"\n",(0,t.jsx)(i.p,{children:"ipr: trust200902\narea: TODO\nworkgroup: TODO Working Group\nkeyword: Internet-Draft"}),"\n",(0,t.jsx)(i.p,{children:"stand_alone: yes\nsmart_quotes: no\npi: [toc, sortrefs, symrefs]"}),"\n",(0,t.jsx)(i.h2,{id:"author",children:"author"}),"\n",(0,t.jsxs)(i.p,{children:["name: Phil Feairheller\norganization: GLEIF\nemail: ",(0,t.jsx)(i.a,{href:"mailto:Philip.Feairheller@gleif.org",children:"Philip.Feairheller@gleif.org"})]}),"\n",(0,t.jsx)(i.p,{children:"normative:"}),"\n",(0,t.jsx)(i.p,{children:"informative:"}),"\n",(0,t.jsx)(i.p,{children:"--- abstract"}),"\n",(0,t.jsx)(i.p,{children:"TODO Abstract"}),"\n",(0,t.jsx)(i.p,{children:"--- middle"}),"\n",(0,t.jsx)(i.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"Transaction Event Log"})," (TEL) is a hash linked data structure of transactions that can be used to track state. A\n",(0,t.jsx)(i.em,{children:"Public Verifiable Credential Registry"})," can be represented in several TELs to establish issuance or revocation state of\na Verifiable Credential (VC). The KEL is used to establish control authority over the keys used to commit to the events\nof the TEL and sign the VC. The events of the TEL are used to establish the issuance or revocation state of the VCs\nissued by the controller of the identifier represented by the KEL. This document specifies a design for ",(0,t.jsx)(i.em,{children:"public"}),"\nVCs only. The use of a hash digest of the VC contents as the identifier of that VC or an attribute in a TEL event allows\nfor correlation of uses of the VC."]}),"\n",(0,t.jsx)(i.h2,{id:"transaction-event-log",children:"Transaction Event Log"}),"\n",(0,t.jsx)(i.p,{children:"A KERI KEL can control a TEL by anchoring the TEL to key events of the KEL with the following:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Create the inception event for the TEL with the TEL specific unique identifier."}),"\n",(0,t.jsx)(i.li,{children:"Generate a hash digest of the serialized content of the TEL inception event."}),"\n",(0,t.jsx)(i.li,{children:"Attach anchoring seals from the KEL events to the TEL events they are authorizing."}),"\n",(0,t.jsx)(i.li,{children:"Sign the KEL event as usual to commit to the digest of the serialized TEL event."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Any validator can cryptographically verify the authoritative state by validating the signatures of the referenced KEL.\nThe TEL events do not have to be signed as the commitment to the event is in the form of the digest in the seal in the\nanchoring KEL event and the signatures on that event. Like KEL events, all TEL events have the fields ",(0,t.jsx)(i.code,{children:"i"}),", ",(0,t.jsx)(i.code,{children:"s"}),", and\n",(0,t.jsx)(i.code,{children:"t"}),". However, the ",(0,t.jsx)(i.code,{children:"s"}),' or sequence number field in TEL events represents the "clock" for that transaction set. Each\ntransaction set can have its own "clock" (e.g. bitcoin block height, wall clock, etc) and is independent of the sequence\nnumber of the KEL events. In the case of the Verifiable Credential Registry, the ',(0,t.jsx)(i.code,{children:"s"})," field is simply a monotonically\nincreasing integer."]}),"\n",(0,t.jsx)(i.p,{children:"The events are anchored back to the KEL using Event Source Seals whose JSON representation is as follows."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'{\n "s": "3",\n "d": "ELvaU6Z-i0d8JJR2nmwyYAZAoTNZH3UfSVPzhzS6b5CM"\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"For TEL events, this seal back to the KEL will be delivered as an attachment of event source seal triples in duple of\n(s, d)."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"-GAB\n0AAAAAAAAAAAAAAAAAAAAAAw\nELvaU6Z-i0d8JJR2nmwyYAZAoTNZH3UfSVPzhzS6b5CM\n"})}),"\n",(0,t.jsx)(i.p,{children:"Event source seal attachment example (line feeds added for readability)"}),"\n",(0,t.jsx)(i.h2,{id:"verifiable-credential-registry",children:"Verifiable Credential Registry"}),"\n",(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.em,{children:"Public Verifiable Credential Registry"})," (Registry) is a form of a ",(0,t.jsx)(i.em,{children:"Verifiable Data Registry"})," that tracks the\nissuance/revocation state of credentials issued by the controller of the KEL. Two types of TELs will be used for this\npurpose. The first type of TEL is the management TEL and will signal the creation of the Registry and track the list of\nRegistrars that will act as Backers for the individual TELs for each VC. The second type of TEL is the VC TEL which will\ntrack the issued or revoked state of each VC and will contain a reference to it's corresponding management TEL."]}),"\n",(0,t.jsx)(i.p,{children:"The following events will be used to create and maintain the TELs for the Registry."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ilk"}),(0,t.jsx)(i.th,{children:"TEL"}),(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"vcp"}),(0,t.jsx)(i.td,{children:"Management"}),(0,t.jsx)(i.td,{children:"Registry Inception Event"}),(0,t.jsx)(i.td,{children:"Inception statement for the Registry"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"vrt"}),(0,t.jsx)(i.td,{children:"Management"}),(0,t.jsx)(i.td,{children:"Registry Rotation Event"}),(0,t.jsx)(i.td,{children:"Rotation event for updating Backers"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"iss"}),(0,t.jsx)(i.td,{children:"VC"}),(0,t.jsx)(i.td,{children:"Simple Credential Issuance Event"}),(0,t.jsx)(i.td,{children:"Issue credential with no Backers"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"rev"}),(0,t.jsx)(i.td,{children:"VC"}),(0,t.jsx)(i.td,{children:"Simple Credential Revocation Event"}),(0,t.jsx)(i.td,{children:"Revoke previously issued credential with no Backers"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"bis"}),(0,t.jsx)(i.td,{children:"VC"}),(0,t.jsx)(i.td,{children:"Credential Issuance Event"}),(0,t.jsx)(i.td,{children:"Issue credential"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"brv"}),(0,t.jsx)(i.td,{children:"VC"}),(0,t.jsx)(i.td,{children:"Credential Revocation Event"}),(0,t.jsx)(i.td,{children:"Revoke previously issued credential"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"iis"}),(0,t.jsx)(i.td,{children:"VC"}),(0,t.jsx)(i.td,{children:"Simple Credential Issuance Event with VC Hash"}),(0,t.jsx)(i.td,{children:"Issue credential with no Backers, VC Hash as separate field"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"irv"}),(0,t.jsx)(i.td,{children:"VC"}),(0,t.jsx)(i.td,{children:"Simple Credential Revocation Event with VC Hash"}),(0,t.jsx)(i.td,{children:"Revoke previously issued credential with no Backers, VC Hash as separate field"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ibs"}),(0,t.jsx)(i.td,{children:"VC"}),(0,t.jsx)(i.td,{children:"Credential Issuance Event with VC Hash"}),(0,t.jsx)(i.td,{children:"Issue credential, VC Hash as separate field"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ibr"}),(0,t.jsx)(i.td,{children:"VC"}),(0,t.jsx)(i.td,{children:"Credential Revocation Event with VC Hash"}),(0,t.jsx)(i.td,{children:"Revoke previously issued credential, VC Hash as separate field"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"management-tel",children:"Management TEL"}),"\n",(0,t.jsxs)(i.p,{children:["The state tracked by the Management TEL will be the list of Registrar identifiers that serve as backers for each TEL\nunder its provenance. This list of Registrars can be rotated with events specific to this type of TEL. In this way,\nRegistrar lists are analogous to Backer lists in KERI KELs. Additional metadata can be tracked in this TEL, for example\nreferences to Schema. The Management TEL will have two events: ",(0,t.jsx)(i.code,{children:"vcp"})," for Registry inception and ",(0,t.jsx)(i.code,{children:"vrt"}),"\nfor rotation of the list or Registrars. The events will reference the controlling identifier in the ",(0,t.jsx)(i.code,{children:"ii"})," field and be\nanchored to the KEL with an event seal triple attachment."]}),"\n",(0,t.jsxs)(i.p,{children:["The Registry specific identifier will be self-addressing (see ",(0,t.jsx)(i.a,{href:"#self-addressing-identifiers",children:"below"}),"\nfor definition) using its inception data for its derivation. This requires a commitment to the anchor in the controlling\nKEL and necessitates the event location seal be included in the event. The derived identifier is then set in the ",(0,t.jsx)(i.code,{children:"i"}),"\nfield of the events in the management TEL."]}),"\n",(0,t.jsx)(i.p,{children:"Though it is possible for a given identifier KEL to issue multiple types of credentials, it is anticipated that there\nwill be relatively few (usually one) Management TELs anchored to a given KEL. A more scalable approach to issuing\nmultiple credential types from a single identifier would be to use delegated identifiers for the different types of\ncredentials to be issued."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Label"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Notes"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"v"}),(0,t.jsx)(i.td,{children:"version string"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"i"}),(0,t.jsx)(i.td,{children:"namespaced identifier of Registry"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"s"}),(0,t.jsx)(i.td,{children:"sequence number of event"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"t"}),(0,t.jsx)(i.td,{children:"message type  of event"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"p"}),(0,t.jsx)(i.td,{children:"prior event digest"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"c"}),(0,t.jsx)(i.td,{children:"list of Configuration Traits/Modes"}),(0,t.jsx)(i.td,{children:"allows for config of no backer registry"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"a"}),(0,t.jsx)(i.td,{children:"digest seal of attachment meta-data for registry"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ii"}),(0,t.jsx)(i.td,{children:"issuer identifier"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"vi"}),(0,t.jsx)(i.td,{children:"hash digest of VC contents"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"b"}),(0,t.jsx)(i.td,{children:"list of backer identifiers for credentials associated with this registry"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"bt"}),(0,t.jsx)(i.td,{children:"backer threshold"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ba"}),(0,t.jsx)(i.td,{children:"list of backers to add (ordered backer set)"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"br"}),(0,t.jsx)(i.td,{children:"list of backers to remove (ordered backer set)"}),(0,t.jsx)(i.td,{})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["The simplest (and most common) case for Registries relies on the witnesses of the controlling KEL and their receipts of\nthe KEL events instead of Registry specific backers. To accommodate this case, the ",(0,t.jsx)(i.code,{children:"c"})," element is added to the\nmanagement TEL inception event with the configuration option ",(0,t.jsx)(i.code,{children:"NB"}),"  to specify that the Registry will never have backers\nconfigured in the management TEL. In this case, there will only be one event in the management TEL for this Registry and\nthe simple events ",(0,t.jsx)(i.code,{children:"iss"}),"\nand ",(0,t.jsx)(i.code,{children:"rev"}),' will be used for "simple issue" and "simple revoke" respectively in the VC specific TELs. For these events,\nthe ',(0,t.jsx)(i.code,{children:"ri"})," field will be the simple identifier referencing the management TEL."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Notes"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"NB"}),(0,t.jsx)(i.td,{children:"No Backers"}),(0,t.jsx)(i.td,{children:"No registry specific backers will be configured for this Registry"})]})})]}),"\n",(0,t.jsx)(i.h3,{id:"registry-inception-event",children:"Registry Inception Event"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'{\n "v" : "KERI10JSON00011c_",\n "i" : "ELh3eYC2W_Su1izlvm0xxw01n3XK8bdV2Zb09IqlXB7A",\n "ii": "EJJR2nmwyYAfSVPzhzS6b5CMZAoTNZH3ULvaU6Z-i0d8",\n "s" : "0",\n "t" : "vcp",\n "b" : ["BbIg_3-11d3PYxSInLN-Q9_T2axD6kkXd3XRgbGZTm6s"],\n "c" : []\n "a" : {\n     "d": "EEBp64Aw2rsjdJpAR0e2qCq3jX7q7gLld3LjAwZgaLXU"\n  }\n}-GAB0AAAAAAAAAAAAAAAAAAAAABwEOWdT7a7fZwRz0jiZ0DJxZEM3vsNbLDPEUk-ODnif3O0\n'})}),"\n",(0,t.jsx)(i.p,{children:"Registry inception event for establishing the list of Backers"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'{\n "v" : "KERI10JSON00011c_",\n "i" : "ELh3eYC2W_Su1izlvm0xxw01n3XK8bdV2Zb09IqlXB7A",\n "ii": "EJJR2nmwyYAfSVPzhzS6b5CMZAoTNZH3ULvaU6Z-i0d8",\n "s" : "0",\n "t" : "vcp",\n "b" : [],\n "c" : ["NB"]\n}-GAB0AAAAAAAAAAAAAAAAAAAAABwEOWdT7a7fZwRz0jiZ0DJxZEM3vsNbLDPEUk-ODnif3O0\n'})}),"\n",(0,t.jsx)(i.p,{children:'Registry inception event for "backer-less" configuration'}),"\n",(0,t.jsx)(i.h3,{id:"registry-rotation-event",children:"Registry Rotation Event"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'{\n "v" : "KERI10JSON00011c_",\n "i" : "ELh3eYC2W_Su1izlvm0xxw01n3XK8bdV2Zb09IqlXB7A",\n "p" : "EY2L3ycqK9645aEeQKP941xojSiuiHsw4Y6yTW-PmsBg",\n "s" : "1",\n "t" : "vrt",\n "ba" : ["BXhpfP_H41hw8f-LluTidLfXxmC4EPwaENHI6CuruE6g"],\n "br" : ["BbIg_3-11d3PYxSInLN-Q9_T2axD6kkXd3XRgbGZTm6s"]\n}-GAB0AAAAAAAAAAAAAAAAAAAAACQEOWdT7a7fZwRz0jiZ0DJxZEM3vsNbLDPEUk-ODnif3O0\n'})}),"\n",(0,t.jsx)(i.p,{children:"Registrar rotation event updates the list of Backers"}),"\n",(0,t.jsx)(i.h2,{id:"verifiable-credential-tels",children:"Verifiable Credential TELs"}),"\n",(0,t.jsxs)(i.p,{children:["The binary state (issued or revoked) of each verifiable credential (VC) will be tracked in individual TELs associated\nwith each VC. The state changes will be represented by 4 sets of 2 events: ",(0,t.jsx)(i.code,{children:"iss"})," for simple VC issuance and ",(0,t.jsx)(i.code,{children:"rev"}),"\nfor simple revocation, ",(0,t.jsx)(i.code,{children:"bis"})," for the issuance of the VCs with backers and ",(0,t.jsx)(i.code,{children:"brv"})," for revocation of the VCs with backers\nand corresponding events ",(0,t.jsx)(i.code,{children:"iis"}),", ",(0,t.jsx)(i.code,{children:"irv"})," and ",(0,t.jsx)(i.code,{children:"ibs"}),", ",(0,t.jsx)(i.code,{children:"ibr"})," to be used when the identifier of the VC is not the\nself-addressing identifier of the VC and that identifier must be included is the separate ",(0,t.jsx)(i.code,{children:"vi"})," field in the event. The\nevents will be anchored to the KEL with an event seal triple attachment signified by the grouping counter ",(0,t.jsx)(i.code,{children:"-e##"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"self-addressing-identifiers",children:"Self Addressing Identifiers"}),"\n",(0,t.jsx)(i.p,{children:"The advantage of a content addressable identifier is that it is cryptographically bound to the contents. It provides a\nsecure root-of-trust. Any cryptographic commitment to a content addressable identifier is functionally equivalent (given\ncomparable cryptographic strength) to a cryptographic commitment to the content itself."}),"\n",(0,t.jsx)(i.p,{children:"A self-addressing identifier is a special class content-addressable identifier that is also self-referential. The\nspecial class is distinguished by a special derivation method or process to generate the self-addressing identifier.\nThis derivation method is determined by the combination of both a derivation code prefix included in the identifier and\nthe context in which the identifier appears. The reason for a special derivation method is that a naive cryptographic\ncontent addressable identifier must not be self-referential, i.e. the identifier must not appear within the contents\nthat it is identifying. This is because the naive cryptographic derivation process of a content addressable identifier\nis a cryptographic digest of the serialized content. Changing one bit of the serialization content will result in a\ndifferent digest. A special derivation method or process is required."}),"\n",(0,t.jsx)(i.h3,{id:"derivation-process",children:"Derivation Process"}),"\n",(0,t.jsx)(i.p,{children:"This process is as follows:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"replace the value of the id field in the content that will hold the self-addressing identifier with a dummy string of\nthe same length as the eventually derived self-addressing identifier"}),"\n",(0,t.jsx)(i.li,{children:"compute the digest of the content with the dummy value for the id field"}),"\n",(0,t.jsx)(i.li,{children:"prepend the derivation code to the digest and encode appropriately to create the final derived self-addressing\nidentifier replace the dummy value with the self-addressing identifier"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"As long as any verifier recognizes the derivation method, the 'self-addressing` identifier is a cryptographically secure\ncommitment to the contents in which it is embedded. It is a cryptographically verifiable self-referential content\naddressable identifier."}),"\n",(0,t.jsx)(i.p,{children:"Because a self-addressing identifier is both self-referential and cryptographically bound to the contents it identifies,\nanyone can validate this binding if they follow the binding protocol outlined above."}),"\n",(0,t.jsx)(i.p,{children:"To elaborate, this approach of deriving self-referential identifiers from the contents they identify, we call\nself-addressing. It allows a verifier to verify or re-derive the self-referential identifier given the contents it\nidentifies. To clarify, a self-addressing identifier is different from a standard content address or content addressable\nidentifier in that a standard content addressable identifier may not be included inside the contents it addresses. The\nstandard content addressable identifier is computed on the finished immutable contents and therefore is not\nself-referential."}),"\n",(0,t.jsx)(i.h2,{id:"self-addressing-identifiers-in-a-tel",children:"Self-Addressing Identifiers in a TEL"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"ii"})," issuer identifier is the controller prefix is self-certifying and may be also self-addressing (but may not be) wrt\nto its inception event  (For GLEIF TELS the issuer identifier must be self-addressing)"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"ri"}),", ",(0,t.jsx)(i.code,{children:"i"})," registry identifier is self-addressing wrt the registry inception event ",(0,t.jsx)(i.code,{children:"i"})," VC identifier is self-addressing\nwrt to the VC itself"]}),"\n",(0,t.jsxs)(i.p,{children:["There are two options for including a cryptographic commitment to the VC in the TEL VC events. The identifier of the VC\ncan self-addressing using the same technique KERI uses for self-addressing identifiers. The VC identifier can be created\nby padding the VC ",(0,t.jsx)(i.code,{children:"id"})," field and taking a hash digest of the serialized contents of the VC. This form of self-addressing\nidentifier can be used as the ",(0,t.jsx)(i.code,{children:"i"})," field in the TEL ",(0,t.jsx)(i.code,{children:"iss"}),", ",(0,t.jsx)(i.code,{children:"rev"}),", ",(0,t.jsx)(i.code,{children:"bis"})," and ",(0,t.jsx)(i.code,{children:"brv"})," events and no other reference to the VC\nis required. When the identifier of the VC is derived from some other method, the TEL events ",(0,t.jsx)(i.code,{children:"iis"}),", ",(0,t.jsx)(i.code,{children:"irv"}),", ",(0,t.jsx)(i.code,{children:"ibs"})," and\n",(0,t.jsx)(i.code,{children:"ibr"})," are used, and a hash digest of the contents of the VC is placed in the ",(0,t.jsx)(i.code,{children:"vi"})," field."]}),"\n",(0,t.jsx)(i.p,{children:"The VC identifier can be namespaced using DID syntax. In this case, the VC identifier in the TEL events would be the\nmethod specific identifier of the full DID. For informational purposes, the fully qualified DID can be included as an\nattachment to the TEL events."}),"\n",(0,t.jsxs)(i.p,{children:["The list of backers needed to sign each VC TEL event is maintained by the management TEL. Since that list can change\nover time with the ",(0,t.jsx)(i.code,{children:"rot"})," management events listed above, the non-simple VC events (",(0,t.jsx)(i.code,{children:"bis"}),", ",(0,t.jsx)(i.code,{children:"brv"}),") must be anchored to the\nevent in the management TEL at the point when the VC event is published with the ",(0,t.jsx)(i.code,{children:"ra"})," field. This way, the backer\nsignatures can be indexed into the proper list of backers at the time of issuance or revocation."]}),"\n",(0,t.jsx)(i.h2,{id:"credential-issuancerevocation-tel",children:"Credential Issuance/Revocation TEL"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Label"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Notes"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"v"}),(0,t.jsx)(i.td,{children:"version string"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"i"}),(0,t.jsx)(i.td,{children:"namespaced identifier of VC"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"s"}),(0,t.jsx)(i.td,{children:"sequence number of event"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"t"}),(0,t.jsx)(i.td,{children:"message type  of event"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dt"}),(0,t.jsx)(i.td,{children:"issuer system data/time in iso format"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"p"}),(0,t.jsx)(i.td,{children:"prior event digest"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ri"}),(0,t.jsx)(i.td,{children:"registry identifier from management TEL"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ra"}),(0,t.jsx)(i.td,{children:"registry anchor to management TEL"}),(0,t.jsx)(i.td,{})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"simple-credential-issuance-event",children:"Simple Credential Issuance Event"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'{\n "v" : "KERI10JSON00011c_",\n "i" : "Ezpq06UecHwzy-K9FpNoRxCJp2wIGM9u2Edk-PLMZ1H4",\n "s" : "0",\n "t" : "iss",\n "dt": "2021-05-27T19:16:50.750302+00:00",\n "ri": "ELh3eYC2W_Su1izlvm0xxw01n3XK8bdV2Zb09IqlXB7A"\n}-GAB0AAAAAAAAAAAAAAAAAAAAAAwELvaU6Z-i0d8JJR2nmwyYAZAoTNZH3UfSVPzhzS6b5CM\n'})}),"\n",(0,t.jsx)(i.h3,{id:"simple-credential-revocation-event",children:"Simple Credential Revocation Event"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'{\n "v" : "KERI10JSON00011c_",\n "i" : "Ezpq06UecHwzy-K9FpNoRxCJp2wIGM9u2Edk-PLMZ1H4",\n "s" : "1",\n "t" : "rev",\n "dt": "2021-05-27T19:16:50.750302+00:00",\n "p" : "EY2L3ycqK9645aEeQKP941xojSiuiHsw4Y6yTW-PmsBg"\n}-GAB0AAAAAAAAAAAAAAAAAAAAABAELvaU6Z-i0d8JJR2nmwyYAZAoTNZH3UfSVPzhzS6b5CM\n'})}),"\n",(0,t.jsx)(i.h3,{id:"credential-issuance-event",children:"Credential Issuance Event"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'{\n "v" : "KERI10JSON00011c_",\n "i" : "Ezpq06UecHwzy-K9FpNoRxCJp2wIGM9u2Edk-PLMZ1H4",\n "s" : "0",\n "t" : "bis",\n "dt": "2021-05-27T19:16:50.750302+00:00",\n "ra": {\n    "i": "ELh3eYC2W_Su1izlvm0xxw01n3XK8bdV2Zb09IqlXB7A",\n    "s": "2",\n    "d": "Ezpq06UecHwzy-K9FpNoRxCJp2wIGM9u2Edk-PLMZ1H4"\n  }\n}-GAB0AAAAAAAAAAAAAAAAAAAAAAwELvaU6Z-i0d8JJR2nmwyYAZAoTNZH3UfSVPzhzS6b5CM\n'})}),"\n",(0,t.jsx)(i.h3,{id:"credential-revocation-event",children:"Credential Revocation Event"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'{\n "v" : "KERI10JSON00011c_",\n "i" : "Ezpq06UecHwzy-K9FpNoRxCJp2wIGM9u2Edk-PLMZ1H4",\n "s" : "1",\n "t" : "brv",\n "dt": "2021-05-27T19:16:50.750302+00:00",\n "p" : "EY2L3ycqK9645aEeQKP941xojSiuiHsw4Y6yTW-PmsBg",\n "ra": {\n    "i": "ELh3eYC2W_Su1izlvm0xxw01n3XK8bdV2Zb09IqlXB7A",\n    "s": "4",\n    "d": "Ezpq06UecHwzy-K9FpNoRxCJp2wIGM9u2Edk-PLMZ1H4"\n  }\n}-GAB0AAAAAAAAAAAAAAAAAAAAABAELvaU6Z-i0d8JJR2nmwyYAZAoTNZH3UfSVPzhzS6b5CM\n'})}),"\n",(0,t.jsx)(i.h2,{id:"use-case",children:"Use Case"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"Verifiable Legal Entity Identifier"})," (vLEI) provides a lightweight, easy to understand use case for a ",(0,t.jsx)(i.em,{children:"Transaction\nEvent Log"})," as a ",(0,t.jsx)(i.em,{children:"Verifiable Credential Registry"}),". Issuing a VC has been described above. Verification of a VC will start\nwith the presentation of a vLEI VC as proof (all vLEI VCs are public and therefore proof presentation will include the\nentire vLEI VC). The verifier will extract the DID of the issuer from the VC, and calculate the hash digest of the\nserialized contents of the VC. By parsing the namespaced identifier of the VC, the verifier will perform the following\nsteps:"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Retrieve the key state from the KERI did method (or appropriate DID method tunnel) using the controller identifier\nembedded in the VC identifier"}),"\n",(0,t.jsx)(i.li,{children:"Retrieve and verify the KEL against the key state of the issuer"}),"\n",(0,t.jsx)(i.li,{children:"Retrieve the management TEL using the Registry identifier embedded in the VC identifier and determine the Registrars\nto use to retrieve the VC TEL."}),"\n",(0,t.jsx)(i.li,{children:"Retrieve the VC TEL and calculate the issuance/revocation state of the VC from the events in the TEL."}),"\n",(0,t.jsxs)(i.li,{children:["Using the keys from the KERI event to which the ",(0,t.jsx)(i.code,{children:"iss"})," event is anchored, verify the signature on the VC."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"To avoid DDoS attack by flooding an Endorser with TEL events that are not associated with any identifiers they are\nassociated with, TEL events need to be placed in escrow until an anchoring KEL event is seen for the TEL identifier."}),"\n"]}),"\n",(0,t.jsx)(i.h1,{id:"iana-considerations",children:"IANA Considerations"}),"\n",(0,t.jsx)(i.p,{children:"This document has no IANA actions."}),"\n",(0,t.jsx)(i.p,{children:"--- back"}),"\n",(0,t.jsx)(i.h1,{id:"acknowledgments",children:"Acknowledgments"}),"\n",(0,t.jsxs)(i.p,{children:["(",":numbered",'="false")']}),"\n",(0,t.jsx)(i.p,{children:"TODO acknowledge."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>a});var t=n(6540);const s={},r=t.createContext(s);function d(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);