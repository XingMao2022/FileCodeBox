import{s as g,S as V,j as U,f as c}from"./request-a021215b.js";import{E as z,a as w}from"./el-form-item-2fe3c695.js";import"./el-tag-dd3968dc.js";import{E as S,a as x}from"./el-select-23d98a6a.js";import"./el-popper-15248ae0.js";import{d as h,Q as E,h as C,a as B,w as o,o as f,q as e,u as n,J as v,D as i,H as m,F as M,G as N}from"./index-5b6c21e5.js";import"./_baseClone-2081d916.js";const D={style:{"margin-left":"0.4rem"}},I={style:{"margin-left":"0.4rem"}},A={key:0},F={style:{display:"flex",height:"38px"}},q={style:{"margin-right":"0.4rem"}},K={style:{width:"200px","margin-left":"0.4rem"}},T={style:{display:"flex",height:"38px"}},j={style:{width:"3rem","margin-right":"0.4rem"}},G={style:{width:"200px","margin-left":"0.4rem"}},H={style:{display:"flex",height:"38px"}},J={style:{"margin-right":"0.4rem"}},O={style:{width:"200px","margin-left":"0.4rem"}},Q={style:{display:"flex",height:"38px"}},L={style:{width:"3rem","margin-right":"0.4rem"}},P={style:{width:"200px","margin-left":"0.4rem"}},te=h({__name:"SettingView",setup(R){const{t:s}=E(),l=C({name:"",description:"",file_storage:"",admin_token:"",keywords:"",openUpload:1,uploadSize:1,uploadMinute:1,s3_access_key_id:"",background:"",s3_secret_access_key:"",aws_session_token:"",s3_bucket_name:"",s3_endpoint_url:"",s3_hostname:"",uploadCount:1,errorMinute:1,errorCount:1});(()=>{g({url:"/admin/config/get",method:"get"}).then(r=>{l.value=r.detail})})();const b=()=>{g({url:"/admin/config/update",method:"patch",data:l.value}).then(r=>{r.code==200?V.success(s("admin.settings.saveSuccess")):V.error(r.message)})};return(r,a)=>{const u=U,d=w,p=S,_=x,y=c,k=z;return f(),B(k,null,{default:o(()=>[e(d,{size:"large",label:n(s)("admin.settings.name")},{default:o(()=>[e(u,{modelValue:l.value.name,"onUpdate:modelValue":a[0]||(a[0]=t=>l.value.name=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(d,{size:"large",label:n(s)("admin.settings.description")},{default:o(()=>[e(u,{modelValue:l.value.description,"onUpdate:modelValue":a[1]||(a[1]=t=>l.value.description=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(d,{size:"large",label:n(s)("admin.settings.keywords"),style:{"letter-spacing":"0.3rem"}},{default:o(()=>[e(u,{modelValue:l.value.keywords,"onUpdate:modelValue":a[2]||(a[2]=t=>l.value.keywords=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(d,{size:"large",label:n(s)("admin.settings.background")},{default:o(()=>[e(u,{modelValue:l.value.background,"onUpdate:modelValue":a[3]||(a[3]=t=>l.value.background=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(d,{size:"large",label:n(s)("admin.settings.admin_token")},{default:o(()=>[e(u,{type:"password",modelValue:l.value.admin_token,"onUpdate:modelValue":a[4]||(a[4]=t=>l.value.admin_token=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(d,{size:"large",label:n(s)("admin.settings.uploadSize")},{append:o(()=>[v("Bytes")]),default:o(()=>[e(u,{type:"number",modelValue:l.value.uploadSize,"onUpdate:modelValue":a[5]||(a[5]=t=>l.value.uploadSize=t)},null,8,["modelValue"]),i("small",null,m(n(s)("admin.settings.uploadSizeNote")),1)]),_:1},8,["label"]),e(d,{size:"large",label:n(s)("admin.settings.openUpload.title")},{default:o(()=>[e(_,{modelValue:l.value.openUpload,"onUpdate:modelValue":a[6]||(a[6]=t=>l.value.openUpload=t)},{default:o(()=>[e(p,{label:n(s)("admin.settings.openUpload.open"),value:1},null,8,["label"]),e(p,{label:n(s)("admin.settings.openUpload.close"),value:0},null,8,["label"])]),_:1},8,["modelValue"]),i("small",D,m(n(s)("admin.settings.openUpload.note")),1)]),_:1},8,["label"]),e(d,{size:"large",label:n(s)("admin.settings.file_storage.title")},{default:o(()=>[e(_,{modelValue:l.value.file_storage,"onUpdate:modelValue":a[7]||(a[7]=t=>l.value.file_storage=t)},{default:o(()=>[e(p,{label:n(s)("admin.settings.file_storage.local"),value:"local"},null,8,["label"]),e(p,{label:n(s)("admin.settings.file_storage.s3"),value:"s3"},null,8,["label"])]),_:1},8,["modelValue"]),i("small",I,m(n(s)("admin.settings.file_storage.note")),1)]),_:1},8,["label"]),l.value.file_storage==="s3"?(f(),M("div",A,[e(d,{size:"large",label:"S3 AccessKeyId"},{default:o(()=>[e(u,{modelValue:l.value.s3_access_key_id,"onUpdate:modelValue":a[8]||(a[8]=t=>l.value.s3_access_key_id=t)},null,8,["modelValue"])]),_:1}),e(d,{size:"large",label:"S3 SecretAccessKey"},{default:o(()=>[e(u,{modelValue:l.value.s3_secret_access_key,"onUpdate:modelValue":a[9]||(a[9]=t=>l.value.s3_secret_access_key=t)},null,8,["modelValue"])]),_:1}),e(d,{size:"large",label:"S3 BucketName"},{default:o(()=>[e(u,{modelValue:l.value.s3_bucket_name,"onUpdate:modelValue":a[10]||(a[10]=t=>l.value.s3_bucket_name=t)},null,8,["modelValue"])]),_:1}),e(d,{size:"large",label:"S3 EndpointUrl"},{default:o(()=>[e(u,{modelValue:l.value.s3_endpoint_url,"onUpdate:modelValue":a[11]||(a[11]=t=>l.value.s3_endpoint_url=t)},null,8,["modelValue"])]),_:1}),e(d,{size:"large",label:"S3 hostname"},{default:o(()=>[e(u,{modelValue:l.value.s3_hostname,"onUpdate:modelValue":a[12]||(a[12]=t=>l.value.s3_hostname=t)},null,8,["modelValue"])]),_:1}),e(d,{size:"large",label:"Aws Session Token"},{default:o(()=>[e(u,{modelValue:l.value.aws_session_token,"onUpdate:modelValue":a[13]||(a[13]=t=>l.value.aws_session_token=t)},null,8,["modelValue"])]),_:1})])):N("",!0),e(d,{size:"large",label:n(s)("admin.settings.name")},{default:o(()=>[i("span",F,[i("span",q,m(n(s)("admin.settings.mei")),1),e(u,{type:"number",modelValue:l.value.uploadMinute,"onUpdate:modelValue":a[14]||(a[14]=t=>l.value.uploadMinute=t)},null,8,["modelValue"]),i("span",K,m(n(s)("admin.settings.minute")),1)]),i("span",T,[i("span",j,m(n(s)("admin.settings.upload")),1),e(u,{type:"number",modelValue:l.value.uploadCount,"onUpdate:modelValue":a[15]||(a[15]=t=>l.value.uploadCount=t)},null,8,["modelValue"]),i("span",G,m(n(s)("admin.settings.files")),1)])]),_:1},8,["label"]),e(d,{size:"large",label:n(s)("admin.settings.name")},{default:o(()=>[i("span",H,[i("span",J,m(n(s)("admin.settings.mei")),1),e(u,{type:"number",modelValue:l.value.errorMinute,"onUpdate:modelValue":a[16]||(a[16]=t=>l.value.errorMinute=t)},null,8,["modelValue"]),i("span",O,m(n(s)("admin.settings.minute")),1)]),i("span",Q,[i("span",L,m(n(s)("admin.settings.allow")),1),e(u,{type:"number",modelValue:l.value.errorCount,"onUpdate:modelValue":a[17]||(a[17]=t=>l.value.errorCount=t)},null,8,["modelValue"]),i("span",P,m(n(s)("admin.settings.errors")),1)])]),_:1},8,["label"]),e(d,null,{default:o(()=>[e(y,{onClick:b,type:"primary",style:{margin:"auto"}},{default:o(()=>[v(m(n(s)("admin.settings.save")),1)]),_:1})]),_:1})]),_:1})}}});export{te as default};
