var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jsonminify = require('gulp-jsonminify'),
    del = require('del'),
    gulpSequence = require('gulp-sequence'),
    fs= require('fs');  

    gulp.task('minifyjs', function() {
    return gulp.src('logic/*.js')
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('temp/logic'));  //输出
});

    gulp.task('minifyJSON', function () {
    return gulp.src(['pages/*.js'])
        .pipe(jsonminify())
        .pipe(gulp.dest('temp/pages'));
});


function start(){
	    var devIndexPath = "./dev/index.js";
    fs.readFile(devIndexPath,'utf-8',function(err,data){  
	    if(err){  
	        console.log("====!!!打包失败 加载"+devIndexPath+"失败");  
	    }else{  
	    	var obj = JSON.parse(data);
	    	gulpSequence(['minifyJSON','minifyjs'], function(){
				buildBundleFile(obj.root);
			})
	    }  
	})  
}

gulp.task('default', function (cb) {
	start();
})

function buildBundleFile(root){
	var pagesDir = "./temp/pages";
	var logicDir = "./temp/logic";
	var bundleObj = {
		root:root,
		pages:{},
		plugins:{}
	};
	var pages = fs.readdirSync(pagesDir);
	var len = pages.length;
	var seed = 0;
    for (var i = 0, j = len; i < j; i++) {
        var pagename =pages[i];
        pagename = pagename.split(".js")[0];
        console.log(pagename);
        loadFile(pagename,pagesDir+"/"+pagename+".js",bundleObj.pages,function(){
        	seed+=1;
        	loadSuccess(seed,len*2,bundleObj);
        });
        loadFile(pagename,logicDir+"/"+pagename+".js",bundleObj.plugins,function(){
        	seed+=1;
        	loadSuccess(seed,len*2,bundleObj);
        });
    }
}

gulp.task('clean', function(cb) {
			    del(['./temp'], cb);
			    console.log("打包成功！");
			});

function loadSuccess(curCount,SumCount,bundleObj){
	if(curCount===SumCount){
		fs.writeFile('./dist/index.js', JSON.stringify(bundleObj), function (err) {
		  if (err) {
		  	throw err
		  }else{
		  	console.log("----");
		  	gulp.start("clean");
		  }
		  
		});
	}
}

function loadFile(pagename,path,bundleObj,success){
	fs.readFile(path,'utf-8',function(err,data){  
	    if(err){  
	        console.log("====!!!打包失败 加载"+path+"失败");  
	    }else{  
	    	bundleObj[pagename] = data;
	    	success();
	    }  
	})  
}

