"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1581],{1581:function(e,t,a){a.r(t);var n=a(29439),s=a(1413),o=a(72791),i=a(60364),l=a(36151),c=a(40986),r=a(11135),d=a(25787),u=a(61889),m=a(45248),f=a(42649),Z=a(23814),h=a(37516),x=a(21435),p=a(56028),j=a(81207),g=a(85543),k=a(56578),b=a(80184),v=(0,i.$j)(null,{setModalErrorSnackMessage:f.zb});t.default=(0,d.Z)((function(e){return(0,r.Z)((0,s.Z)((0,s.Z)({},Z.DF),Z.ID))}))(v((function(e){var t=e.classes,a=e.open,s=e.enabled,i=e.cfg,r=e.selectedBucket,d=e.closeModalAndRefresh,f=e.setModalErrorSnackMessage,Z=(0,o.useState)(!1),v=(0,n.Z)(Z,2),S=v[0],C=v[1],M=(0,o.useState)(!1),N=(0,n.Z)(M,2),P=N[0],q=N[1],y=(0,o.useState)("1"),B=(0,n.Z)(y,2),E=B[0],_=B[1],w=(0,o.useState)("Ti"),z=(0,n.Z)(w,2),D=z[0],F=z[1];(0,o.useEffect)((function(){if(s&&(q(!0),i)){var e=(0,m.Am)(i.quota,!1,!1,!0);_(e.total.toString()),F(e.unit)}}),[s,i]);return(0,b.jsx)(p.Z,{modalOpen:a,onClose:function(){d()},title:"Enable Bucket Quota",titleIcon:(0,b.jsx)(g.Wq,{}),children:(0,b.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),function(){if(!S){var e={enabled:P,amount:parseInt((0,m.Pw)(E,D,!0)),quota_type:"hard"};j.Z.invoke("PUT","/api/v1/buckets/".concat(r,"/quota"),e).then((function(){C(!1),d()})).catch((function(e){C(!1),f(e)}))}}()},children:(0,b.jsxs)(u.ZP,{container:!0,children:[(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.formScrollable,children:[(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(h.Z,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:P,onChange:function(e){q(e.target.checked)},label:"Enabled"})}),P&&(0,b.jsx)(o.Fragment,{children:(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,b.jsx)(u.ZP,{container:!0,children:(0,b.jsx)(u.ZP,{item:!0,xs:12,children:(0,b.jsx)(x.Z,{id:"quota_size",name:"quota_size",onChange:function(e){e.target.validity.valid&&_(e.target.value)},pattern:"[0-9]*",label:"Quota",value:E,required:!0,min:"1",overlayObject:(0,b.jsx)(k.Z,{id:"quota_unit",onUnitChange:function(e){F(e)},unitSelected:D,unitsList:(0,m.zQ)(["Ki"]),disabled:!1})})})})})})]}),(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,b.jsx)(l.Z,{type:"button",variant:"outlined",color:"primary",disabled:S,onClick:function(){d()},children:"Cancel"}),(0,b.jsx)(l.Z,{type:"submit",variant:"contained",color:"primary",disabled:S,children:"Save"})]}),S&&(0,b.jsx)(u.ZP,{item:!0,xs:12,children:(0,b.jsx)(c.Z,{})})]})})})})))},56028:function(e,t,a){var n=a(29439),s=a(1413),o=a(72791),i=a(60364),l=a(13400),c=a(55646),r=a(5574),d=a(65661),u=a(39157),m=a(11135),f=a(25787),Z=a(23814),h=a(42649),x=a(29823),p=a(28057),j=a(80184),g=(0,i.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:h.MK});t.Z=(0,f.Z)((function(e){return(0,m.Z)((0,s.Z)((0,s.Z)({},Z.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},Z.sN))}))(g((function(e){var t=e.onClose,a=e.modalOpen,i=e.title,m=e.children,f=e.classes,Z=e.wideLimit,h=void 0===Z||Z,g=e.modalSnackMessage,k=e.noContentPadding,b=e.setModalSnackMessage,v=e.titleIcon,S=void 0===v?null:v,C=(0,o.useState)(!1),M=(0,n.Z)(C,2),N=M[0],P=M[1];(0,o.useEffect)((function(){b("")}),[b]),(0,o.useEffect)((function(){if(g){if(""===g.message)return void P(!1);"error"!==g.type&&P(!0)}}),[g]);var q=h?{classes:{paper:f.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},y="";return g&&(y=g.detailedErrorMsg,(""===g.detailedErrorMsg||g.detailedErrorMsg.length<5)&&(y=g.message)),(0,j.jsxs)(r.Z,(0,s.Z)((0,s.Z)({open:a,classes:f},q),{},{scroll:"paper",onClose:function(e,a){"backdropClick"!==a&&t()},className:f.root,children:[(0,j.jsxs)(d.Z,{className:f.title,children:[(0,j.jsxs)("div",{className:f.titleText,children:[S," ",i]}),(0,j.jsx)("div",{className:f.closeContainer,children:(0,j.jsx)(l.Z,{"aria-label":"close",id:"close",className:f.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,j.jsx)(x.Z,{})})})]}),(0,j.jsx)(p.Z,{isModal:!0}),(0,j.jsx)(c.Z,{open:N,className:f.snackBarModal,onClose:function(){P(!1),b("")},message:y,ContentProps:{className:"".concat(f.snackBar," ").concat(g&&"error"===g.type?f.errorSnackBar:"")},autoHideDuration:g&&"error"===g.type?1e4:5e3}),(0,j.jsx)(u.Z,{className:k?"":f.content,children:m})]}))})))}}]);
//# sourceMappingURL=1581.cbc3b85a.chunk.js.map