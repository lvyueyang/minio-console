"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[247],{40247:function(e,a,n){n.r(a);var t=n(29439),s=n(1413),l=n(72791),i=n(75952),o=n(61889),r=n(11135),c=n(25787),d=n(23814),u=n(21435),m=n(56028),Z=n(81207),g=n(38734),p=n(87995),f=n(25469),h=n(80184);a.default=(0,c.Z)((function(e){return(0,r.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},d.DF),d.ID),d.bK))}))((function(e){var a=e.modalOpen,n=e.currentTags,r=e.onCloseAndUpdate,c=e.bucketName,d=e.classes,x=(0,f.TL)(),v=(0,l.useState)(""),b=(0,t.Z)(v,2),j=b[0],N=b[1],k=(0,l.useState)(""),C=(0,t.Z)(k,2),w=C[0],T=C[1],y=(0,l.useState)(!1),B=(0,t.Z)(y,2),S=B[0],E=B[1];return(0,h.jsx)(m.Z,{modalOpen:a,title:"Add New Tag ",onClose:function(){r(!1)},titleIcon:(0,h.jsx)(g.OCT,{}),children:(0,h.jsxs)(o.ZP,{container:!0,children:[(0,h.jsxs)("div",{className:d.spacerBottom,children:[(0,h.jsx)("strong",{children:"Bucket"}),": ",c]}),(0,h.jsx)(o.ZP,{item:!0,xs:12,className:d.formFieldRow,children:(0,h.jsx)(u.Z,{value:j,label:"New Tag Key",id:"newTagKey",name:"newTagKey",placeholder:"Enter New Tag Key",onChange:function(e){N(e.target.value)}})}),(0,h.jsx)(o.ZP,{item:!0,xs:12,className:d.formFieldRow,children:(0,h.jsx)(u.Z,{value:w,label:"New Tag Label",id:"newTagLabel",name:"newTagLabel",placeholder:"Enter New Tag Label",onChange:function(e){T(e.target.value)}})}),(0,h.jsxs)(o.ZP,{item:!0,xs:12,className:d.modalButtonBar,children:[(0,h.jsx)(i.z,{id:"clear",type:"button",variant:"regular",onClick:function(){T(""),N("")},label:"Clear"}),(0,h.jsx)(i.z,{id:"save-add-bucket-tag",type:"submit",variant:"callAction",color:"primary",disabled:""===w.trim()||""===j.trim()||S,onClick:function(){E(!0);var e={};e[j]=w;var a=(0,s.Z)((0,s.Z)({},n),e);Z.Z.invoke("PUT","/api/v1/buckets/".concat(c,"/tags"),{tags:a}).then((function(e){E(!1),r(!0)})).catch((function(e){x((0,p.zb)(e)),E(!1)}))},label:"Save"})]})]})})}))},56028:function(e,a,n){var t=n(29439),s=n(1413),l=n(72791),i=n(60364),o=n(13400),r=n(55646),c=n(5574),d=n(65661),u=n(39157),m=n(11135),Z=n(25787),g=n(23814),p=n(25469),f=n(29823),h=n(28057),x=n(87995),v=n(80184);a.Z=(0,Z.Z)((function(e){return(0,m.Z)((0,s.Z)((0,s.Z)({},g.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},g.sN))}))((function(e){var a=e.onClose,n=e.modalOpen,m=e.title,Z=e.children,g=e.classes,b=e.wideLimit,j=void 0===b||b,N=e.noContentPadding,k=e.titleIcon,C=void 0===k?null:k,w=(0,p.TL)(),T=(0,l.useState)(!1),y=(0,t.Z)(T,2),B=y[0],S=y[1],E=(0,i.v9)((function(e){return e.system.modalSnackBar}));(0,l.useEffect)((function(){w((0,x.MK)(""))}),[w]),(0,l.useEffect)((function(){if(E){if(""===E.message)return void S(!1);"error"!==E.type&&S(!0)}}),[E]);var K=j?{classes:{paper:g.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},L="";return E&&(L=E.detailedErrorMsg,(""===E.detailedErrorMsg||E.detailedErrorMsg.length<5)&&(L=E.message)),(0,v.jsxs)(c.Z,(0,s.Z)((0,s.Z)({open:n,classes:g},K),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&a()},className:g.root,children:[(0,v.jsxs)(d.Z,{className:g.title,children:[(0,v.jsxs)("div",{className:g.titleText,children:[C," ",m]}),(0,v.jsx)("div",{className:g.closeContainer,children:(0,v.jsx)(o.Z,{"aria-label":"close",id:"close",className:g.closeButton,onClick:a,disableRipple:!0,size:"small",children:(0,v.jsx)(f.Z,{})})})]}),(0,v.jsx)(h.Z,{isModal:!0}),(0,v.jsx)(r.Z,{open:B,className:g.snackBarModal,onClose:function(){S(!1),w((0,x.MK)(""))},message:L,ContentProps:{className:"".concat(g.snackBar," ").concat(E&&"error"===E.type?g.errorSnackBar:"")},autoHideDuration:E&&"error"===E.type?1e4:5e3}),(0,v.jsx)(u.Z,{className:N?"":g.content,children:Z})]}))}))}}]);
//# sourceMappingURL=247.6ff1fc3d.chunk.js.map