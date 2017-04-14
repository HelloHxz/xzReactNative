import * as Helper from '../common/utils';

//pageRegistrator
var page_configs_dict = {

};


var pagemiddleware_dict = {

};






export function loadPageConfigFile(url,pagekey,preUrl,success,errorCallBack){
  if(page_configs_dict[pagekey]){
    success(page_configs_dict[pagekey]);
    return;
  }

  fetch(url)
  .then((response) => response.text())
  .then((obj) => {

    // page_configs_dict[pagekey] =  Helper.processPageConfig(eval("("+obj+")"));
    addPage(pagekey,eval("("+obj+")"));
    let pageConfig = Object.assign({},page_configs_dict[pagekey]);
    loadPagePluginFile(preUrl,pagekey,function(){
      success(pageConfig);
    },function(e){
      console.log(e);
    });

    
  })
  .catch((error) => {
     errorCallBack(error);
  });

}

function processWhenDev(pages,success,url,obj){
  var preUrl = url.split("/dev/index.js")[0];
  var seed = 0;
  for(var i=0,j=pages.length;i<j;i++){
    var pagekey = pages[i];
    loadPageConfigFile(preUrl+"/pages/"+pagekey+".js",pagekey,preUrl,function(pageConfig){
        seed+=1;
        if(seed ===pages.length){
          success(obj);
        }
     },function(e){
       alert("开发错误:加载应用文件失败,todo 失败页面"+e);
      });
  }
}

function processWhenDist(pages,success){
  // 适配zhua hua
  alert("todo  processWhenDist method");
}
/*
  dist 格式 {pages:{},plugins:{}}
*/
export function loadBundle(url,successCallBack,errorCallBack){
  fetch(url)
  .then((response) => response.text())
  .then((obj) => {
     obj = eval("("+obj+")");
     if(!obj.plugins){
       processWhenDev(obj.pages,successCallBack,url,obj);
     }else{
      processWhenDist(obj.pages,successCallBack,obj);
     }
  })
  .catch((error) => {
    alert(error);
  });
}

export function loadPagePluginFile(preUrl,pagekey,success,errorCallBack){
  if(pagemiddleware_dict[pagekey]){
    success(pagemiddleware_dict[pagekey]);
    return;
  }
  var url = preUrl+"/logic/"+pagekey+".js";
  fetch(url)
  .then((response) => response.text())
  .then((obj) => {
     addPlugin(pagekey,eval("("+obj+")"));
     success(pagemiddleware_dict[pagekey]);
  })
  .catch((error) => {
  });
}


export function dict(pagename){
  return page_configs_dict;
}
export function getPageConfigByPageKey(pagename){
  var Re = page_configs_dict[pagename];
  if(Re){
    return Object.assign({},Re);
  }
  return null;
}

export function addPage(pagename,pageConfig){
   page_configs_dict[pagename]= Helper.processPageConfig(pageConfig);
}



export function getPluginByPageKey(pagename,config){
  var p = pagemiddleware_dict[pagename];
  if(p){
    return new p(config);
  }
  return null;
}

export function addPlugin(pagename,middleware){
   pagemiddleware_dict[pagename]=middleware;
}

//远程加载的 如果需要做版本检测 都持久化存放一下
