export function modifyProperty( payload ) {
  var targetPageName = payload.page;
  if(!targetPageName){
    console.log("action 没有制定目标页面名称｛page:pagename,component:componentref,.....｝");
  }
  var targetComponent = payload.component;
  // payload.isModifyPageProperty = targetComponent==null||targetComponent=="";
  return { type: "modifyproperty", payload:payload }
}