"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1705],{71705:function(e,n,t){t.r(n);var l=t(29439),s=t(72791),c=t(26181),a=t.n(c),o=t(29945),u=t(56087),i=t(38442),r=t(87995),d=t(81551),p=t(9505),f=t(75578),x=t(80184),T=(0,f.Z)(s.lazy((function(){return Promise.all([t.e(911),t.e(4549),t.e(817),t.e(247)]).then(t.bind(t,40247))}))),h=(0,f.Z)(s.lazy((function(){return t.e(2763).then(t.bind(t,22763))})));n.default=function(e){var n=e.bucketName,t=(0,d.TL)(),c=(0,s.useState)(null),f=(0,l.Z)(c,2),v=f[0],_=f[1],S=(0,s.useState)(!1),j=(0,l.Z)(S,2),b=j[0],g=j[1],C=(0,s.useState)([]),G=(0,l.Z)(C,2),k=G[0],m=G[1],A=(0,s.useState)(["",""]),N=(0,l.Z)(A,2),U=N[0],Z=N[1],I=(0,s.useState)(!1),P=(0,l.Z)(I,2),E=P[0],F=P[1],w=(0,p.Z)((function(e){if(e&&null!=(null===e||void 0===e?void 0:e.details)){var n,t;if(e.details.tags)return _(null===e||void 0===e||null===(n=e.details)||void 0===n?void 0:n.tags),void m(Object.keys(null===e||void 0===e||null===(t=e.details)||void 0===t?void 0:t.tags));_([]),m([])}}),(function(e){t((0,r.Ih)(e))})),y=(0,l.Z)(w,2),O=y[0],B=y[1],K=function(){B("GET","/api/v1/buckets/".concat(n))};return(0,s.useEffect)((function(){K()}),[n]),(0,x.jsxs)(o.xuv,{children:[O?(0,x.jsx)(o.aNw,{style:{width:16,height:16}}):null,(0,x.jsx)(i.s,{scopes:[u.Ft.S3_GET_BUCKET_TAGGING,u.Ft.S3_GET_ACTIONS],resource:n,children:(0,x.jsx)(o.xuv,{sx:{display:"flex",flexFlow:"column",marginTop:5},children:(0,x.jsxs)(o.xuv,{sx:{display:"flex",gap:8,flexWrap:"wrap"},children:[k&&k.map((function(e,t){var l=a()(v,"".concat(e),"");return""!==l?(0,x.jsx)(i.s,{scopes:[u.Ft.S3_PUT_BUCKET_TAGGING,u.Ft.S3_PUT_ACTIONS],resource:n,matchAll:!0,errorProps:{deleteIcon:null,onDelete:null},children:(0,x.jsx)(o.Vp9,{label:"".concat(e," : ").concat(l),id:"tag-".concat(e,"-").concat(l),onDelete:function(){!function(e,n){Z([e,n]),F(!0)}(e,l)}})},"chip-".concat(t)):null})),(0,x.jsx)(i.s,{scopes:[u.Ft.S3_PUT_BUCKET_TAGGING,u.Ft.S3_PUT_ACTIONS],resource:n,errorProps:{disabled:!0,onClick:null},children:(0,x.jsx)(o.Vp9,{label:"Add tag",icon:(0,x.jsx)(o.dtP,{}),id:"create-tag",variant:"outlined",onClick:function(){g(!0)},sx:{cursor:"pointer",maxWidth:90}})})]})})}),b&&(0,x.jsx)(T,{modalOpen:b,currentTags:v,bucketName:n,onCloseAndUpdate:function(e){g(!1),e&&K()}}),E&&(0,x.jsx)(h,{deleteOpen:E,currentTags:v,bucketName:n,onCloseAndUpdate:function(e){F(!1),e&&K()},selectedTag:U})]})}}}]);
//# sourceMappingURL=1705.7cfab911.chunk.js.map