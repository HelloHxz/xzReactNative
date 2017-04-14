
import * as pagesBridge from "../../bridges/pageConfigBridge";


export let config = {
	root:"index",
	mode:"dev",
}
config.url = "http://192.168.2.125:5555/server/demo/"+config.mode+"/index.js";


export function init(success){
	pagesBridge.addPlugin("index",require("./logic/index"));

	pagesBridge.addPage("index",require("./pages/index"));

	pagesBridge.loadBundle(config.url,function(){
		success();
	});

}
