"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[2372],{71102:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(65043),i=n(89923),a=n(70579);const l=e=>{let{timeStart:t,setTimeStart:n,timeEnd:l,setTimeEnd:o,triggerSync:r,label:c="Filter:",startLabel:d="Start Time:",endLabel:m="End Time:"}=e;return(0,a.jsx)(i.xA9,{item:!0,xs:12,sx:{"& .filter-date-input-label, .end-time-input-label":{display:"none"},"& .MuiInputBase-adornedEnd.filter-date-date-time-input":{width:"100%",border:"1px solid #eaeaea",paddingLeft:"8px",paddingRight:"8px",borderRadius:"1px"},"& .MuiInputAdornment-root button":{height:"20px",width:"20px",marginRight:"5px"},"& .filter-date-input-wrapper":{height:"30px",width:"100%","& .MuiTextField-root":{height:"30px",width:"90%","& input.Mui-disabled":{color:"#000000",WebkitTextFillColor:"#101010"}}}},children:(0,a.jsxs)(i.azJ,{sx:{display:"grid",height:40,alignItems:"center",gridTemplateColumns:"auto 2fr auto",padding:0,[`@media (max-width: ${i.nmC.sm}px)`]:{padding:5},[`@media (max-width: ${i.nmC.md}px)`]:{gridTemplateColumns:"1fr",height:"auto"},gap:"5px"},children:[(0,a.jsx)(i.azJ,{sx:{fontSize:"14px",fontWeight:500,marginRight:"5px"},className:"muted",children:c}),(0,a.jsxs)(i.azJ,{customBorderPadding:"0px",sx:{display:"grid",height:40,alignItems:"center",gridTemplateColumns:"1fr 1fr",gap:"8px",paddingLeft:"8px",paddingRight:"8px",[`@media (max-width: ${i.nmC.md}px)`]:{height:"auto",gridTemplateColumns:"1fr"}},children:[(0,a.jsx)(i.e8j,{value:t,onChange:n,id:"stTime",secondsSelector:!1,pickerStartComponent:(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(i.b1c,{}),(0,a.jsx)("span",{children:d})]})}),(0,a.jsx)(i.e8j,{value:l,onChange:o,id:"endTime",secondsSelector:!1,pickerStartComponent:(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(i.b1c,{}),(0,a.jsx)("span",{children:m})]})})]}),r&&(0,a.jsx)(i.azJ,{sx:{alignItems:"flex-end",display:"flex",justifyContent:"flex-end"},children:(0,a.jsx)(i.$nd,{id:"sync",type:"button",variant:"callAction",onClick:r,icon:(0,a.jsx)(i.Fjq,{}),label:"Sync"})})]})})}},94141:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(65043),i=n(22166),a=n(89923),l=n(21383),o=n(64159),r=n(49555),c=n(70579);const d=e=>{let{onClose:t,modalOpen:n,title:d,children:m,wideLimit:u=!0,titleIcon:x=null,iconColor:p="default",sx:h}=e;const g=(0,l.jL)(),[j,b]=(0,s.useState)(!1),f=(0,i.d4)((e=>e.system.modalSnackBar));(0,s.useEffect)((()=>{g((0,o.h0)(""))}),[g]),(0,s.useEffect)((()=>{if(f){if(""===f.message)return void b(!1);"error"!==f.type&&b(!0)}}),[f]);let _="";return f&&(_=f.detailedErrorMsg,(""===_||_&&_.length<5)&&(_=f.message)),(0,c.jsxs)(a.ngX,{onClose:t,open:n,title:d,titleIcon:x,widthLimit:u,sx:h,iconColor:p,children:[(0,c.jsx)(r.A,{isModal:!0}),(0,c.jsx)(a.qb_,{onClose:()=>{b(!1),g((0,o.h0)(""))},open:j,message:_,mode:"inline",variant:"error"===f.type?"error":"default",autoHideDuration:"error"===f.type?10:5,condensed:!0}),m]})}},52372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var s=n(65043),i=n(33097),a=n.n(i),l=n(22166),o=n(89923),r=n(56483);const c={time:"Timestamp",api_name:"API Name",access_key:"Access Key",bucket:"Bucket",object:"Object",remote_host:"Remote Host",request_id:"Request ID",user_agent:"User Agent",response_status:"Response Status",response_status_code:"Response Status Code",request_content_length:"Request Content Length",response_content_length:"Response Content Length",time_to_response_ns:"Time to Response NS"};var d=n(99161),m=n(64159),u=n(46537),x=n(21383),p=n(77938),h=n(20649),g=n(70579);const j=e=>{let{label:t,onChange:n,value:i,placeholder:a="",id:l,name:r}=e;return(0,g.jsx)(s.Fragment,{children:(0,g.jsxs)(o.azJ,{sx:{flexGrow:1,margin:"0 15px"},children:[(0,g.jsx)(o.l1Y,{children:t}),(0,g.jsx)(o.cl_,{placeholder:a,id:l,name:r,label:"",onChange:e=>{n(e.target.value)},sx:{"& input":{height:30}},value:i})]})})};var b=n(94141);const f=e=>{let{modalOpen:t,logSearchElement:n,onClose:i}=e;const l=Object.keys(n);return(0,g.jsx)(s.Fragment,{children:(0,g.jsx)(b.A,{modalOpen:t,title:"Full Log Information",onClose:()=>{i()},children:(0,g.jsxs)(o.xA9,{container:!0,children:[(0,g.jsx)(o.xA9,{item:!0,xs:12,children:(0,g.jsx)("table",{children:(0,g.jsx)("tbody",{children:l.map(((e,t)=>(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{style:{fontWeight:700,paddingRight:"10px",textAlign:"left"},children:a()(c,e,`${e}`)}),(0,g.jsx)("td",{children:a()(n,e,"")})]},`logSearch-${t.toString()}`)))})})}),(0,g.jsx)(o.xA9,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,g.jsx)(o.$nd,{id:"close-log-search",variant:"callAction",color:"primary",onClick:i,label:"Close"})})]})})})};var _=n(71102);const C=e=>{let{iconComponent:t,entity:n,documentationLink:i}=e;return(0,g.jsx)(o.xA9,{container:!0,sx:{justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,g.jsx)(o.xA9,{item:!0,xs:8,children:(0,g.jsx)(o.lVp,{title:`${n} not available`,iconComponent:t,help:(0,g.jsxs)(s.Fragment,{children:["This feature is not available.",(0,g.jsx)("br",{}),"Please configure"," ",(0,g.jsx)("a",{href:i,target:"_blank",rel:"noopener",children:n})," ","first to use this feature."]})})})})};var y=n(48793),S=n(88617);const k={display:"flex",justifyContent:"space-between",marginBottom:12},A=()=>{const e=(0,x.jL)(),t=(0,l.d4)(u.s$),[n,i]=(0,s.useState)(!0),[b,A]=(0,s.useState)(null),[v,$]=(0,s.useState)(null),[w,E]=(0,s.useState)(!1),[T,F]=(0,s.useState)([]),[I,L]=(0,s.useState)(""),[q,R]=(0,s.useState)(""),[z,K]=(0,s.useState)(""),[O,J]=(0,s.useState)(""),[B,M]=(0,s.useState)(""),[D,N]=(0,s.useState)(""),[P,H]=(0,s.useState)(""),[W,U]=(0,s.useState)("DESC"),[G,Y]=(0,s.useState)(["time","api_name","access_key","bucket","object","remote_host","request_id","user_agent","response_status"]),[V,Q]=(0,s.useState)(0),[X,Z]=(0,s.useState)(!1),[ee,te]=(0,s.useState)(!1),[ne,se]=(0,s.useState)(null);let ie=null;const ae=t&&t.includes("log-search"),le=(0,s.useCallback)((()=>{if(!X&&ae){Z(!0);let t=`${""!==I?`&fp=bucket:${I}`:""}${""!==B?`&fp=object:${B}`:""}${""!==q?`&fp=api_name:${q}`:""}${""!==z?`&fp=access_key:${z}`:""}${""!==D?`&fp=request_id:${D}`:""}${""!==O?`&fp=user_agent:${O}`:""}${""!==P?`&fp=response_status:${P}`:""}`;t=t.trim(),t.endsWith(",")&&(t=t.slice(0,-1)),h.A.invoke("GET",`/api/v1/logs/search?q=reqinfo${""!==t?`${t}`:""}&pageSize=100&pageNo=${V}&order=${"DESC"===W?"timeDesc":"timeAsc"}${null!==b?`&timeStart=${b.toUTC().toISO()}`:""}${null!==v?`&timeEnd=${v.toUTC().toISO()}`:""}`).then((e=>{const t=e.results||[];i(!1),Z(!1),F(t),Q(V+1),null!==ie&&ie()})).catch((t=>{i(!1),Z(!1),e((0,m.C9)(t))}))}else i(!1),Z(!1)}),[X,ae,I,B,q,z,D,O,P,V,W,b,v,ie,e]);(0,s.useEffect)((()=>{n&&(F([]),le())}),[n,W,le]);return(0,s.useEffect)((()=>{e((0,m.ph)("audit_logs"))}),[]),(0,g.jsxs)(s.Fragment,{children:[ee&&null!==ne&&(0,g.jsx)(f,{logSearchElement:ne,modalOpen:ee,onClose:()=>{se(null),te(!1)}}),(0,g.jsx)(y.A,{label:"Audit Logs",actions:(0,g.jsx)(S.A,{})}),(0,g.jsx)(o.Mxu,{children:ae?(0,g.jsxs)(s.Fragment,{children:[" ",(0,g.jsxs)(o.azJ,{withBorders:!0,sx:{marginBottom:15},children:[(0,g.jsxs)(o.xA9,{item:!0,xs:12,sx:{display:"flex",padding:15,[`@media (max-width: ${o.nmC.lg}px)`]:{flexFlow:"column"}},children:[(0,g.jsx)(o.azJ,{children:(0,g.jsx)(_.A,{setTimeEnd:e=>$(e),setTimeStart:e=>A(e),timeEnd:v,timeStart:b})}),(0,g.jsx)(o.azJ,{sx:{display:"flex",alignItems:"center"},children:(0,g.jsx)(o.J2w,{label:(w?"Hide":"Show")+" advanced Filters",open:w,onClick:()=>{E(!w)}})})]}),(0,g.jsxs)(o.xA9,{item:!0,xs:12,sx:{display:w?"block":"none",overflowY:"hidden",marginBottom:w?12:0},children:[(0,g.jsxs)(o.azJ,{sx:{marginLeft:15,marginBottom:15,fontSize:12,color:"#9C9C9C"},children:["Enable your preferred options to get filtered records.",(0,g.jsx)("br",{}),"You can use '*' to match any character, '.' to signify a single character or '\\' to scape an special character (E.g. mybucket-*)"]}),(0,g.jsxs)(o.azJ,{sx:k,children:[(0,g.jsx)(j,{onChange:L,value:I,label:"Bucket",id:"bucket",name:"bucket"}),(0,g.jsx)(j,{onChange:R,value:q,label:"API Name",id:"api_name",name:"api_name"}),(0,g.jsx)(j,{onChange:K,value:z,label:"Access Key",id:"access_key",name:"access_key"}),(0,g.jsx)(j,{onChange:J,value:O,label:"User Agent",id:"user_agent",name:"user_agent"})]}),(0,g.jsxs)(o.azJ,{sx:k,children:[(0,g.jsx)(j,{onChange:M,value:B,label:"Object",id:"object",name:"object"}),(0,g.jsx)(j,{onChange:N,value:D,label:"Request ID",id:"request_id",name:"request_id"}),(0,g.jsx)(j,{onChange:H,value:P,label:"Response Status",id:"response_status",name:"response_status"})]})]}),(0,g.jsx)(o.xA9,{item:!0,xs:12,sx:{marginBottom:15,padding:"0 15px 0 15px",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,g.jsx)(o.$nd,{id:"get-information",type:"button",variant:"callAction",onClick:()=>{Q(0),i(!0)},label:"Get Information"})})]}),(0,g.jsx)(o.xA9,{item:!0,xs:12,children:(0,g.jsx)(p.R,{scopes:[d.OV.ADMIN_HEALTH_INFO],resource:d.Ms,errorProps:{disabled:!0},children:(0,g.jsx)(o.bQt,{columns:[{label:c.time,elementKey:"time",enableSort:!0},{label:c.api_name,elementKey:"api_name"},{label:c.access_key,elementKey:"access_key"},{label:c.bucket,elementKey:"bucket"},{label:c.object,elementKey:"object"},{label:c.remote_host,elementKey:"remote_host"},{label:c.request_id,elementKey:"request_id"},{label:c.user_agent,elementKey:"user_agent"},{label:c.response_status,elementKey:"response_status",renderFunction:e=>(0,g.jsx)(s.Fragment,{children:(0,g.jsxs)("span",{children:[e.response_status_code," (",e.response_status,")"]})}),renderFullObject:!0},{label:c.request_content_length,elementKey:"request_content_length",renderFunction:r.nO},{label:c.response_content_length,elementKey:"response_content_length",renderFunction:r.nO},{label:c.time_to_response_ns,elementKey:"time_to_response_ns",renderFunction:r.Wi,contentTextAlign:"right"}],isLoading:n,records:T,entityName:"Logs",customEmptyMessage:"There is no information with this criteria",idField:"request_id",columnsSelector:!0,columnsShown:G,onColumnChange:e=>{let t;t=G.findIndex((t=>t===e))>=0?G.filter((t=>t!==e)):[...G,e],Y(t)},customPaperHeight:w?"calc(100vh - 520px)":"calc(100vh - 320px)",sortEnabled:{currentSort:"time",currentDirection:W,onSortClick:e=>{const t=a()(e,"sortDirection","DESC");U(t),Q(0),i(!0)}},infiniteScrollConfig:{recordsCount:1e6,loadMoreRecords:e=>(le(),new Promise((e=>{ie=e})))},itemActions:[{type:"view",onClick:e=>{se(e),te(!0)}}],textSelectable:!0})})})]}):(0,g.jsx)(C,{entity:"Audit Logs",iconComponent:(0,g.jsx)(o.WIv,{}),documentationLink:"https://min.io/docs/minio/windows/operations/monitoring/minio-logging.html?ref=con"})})]})}}}]);
//# sourceMappingURL=2372.6b4933ca.chunk.js.map