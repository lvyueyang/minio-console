"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[5079],{55079:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(65043),s=n(25448),o=n(58661),r=n(89923),l=n(64159),c=n(21383),i=n(70579);const d=e=>{let{deleteOpen:t,currentTags:n,selectedTag:d,onCloseAndUpdate:u,bucketName:p}=e;const b=(0,c.jL)(),[g,h]=d,[w,f]=(0,s.A)((()=>u(!0)),(e=>b((0,l.C9)(e))));if(!d)return null;return(0,i.jsx)(o.A,{title:"Delete Tag",confirmText:"Delete",isOpen:t,titleIcon:(0,i.jsx)(r.xWY,{}),isLoading:w,onConfirm:()=>{const e={...n};delete e[g],f("PUT","/api/v1/buckets/".concat(p,"/tags"),{tags:e})},onClose:()=>u(!1),confirmationContent:(0,i.jsxs)(a.Fragment,{children:["Are you sure you want to delete the tag"," ",(0,i.jsxs)("b",{style:{maxWidth:200,whiteSpace:"normal",wordWrap:"break-word"},children:[g," : ",h]})," ","?"]})})}}}]);
//# sourceMappingURL=5079.118cae1f.chunk.js.map