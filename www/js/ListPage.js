currentPage={};

currentPage.init=function(){
	console.log("ListPage::init");
};

currentPage.loadPage=function(pageIndex){
	alert("LoadPage::init");
	console.log("ListPage::loadPage::pageIndex:"+ pageIndex);
	$("body").load(path + "pages/"+ pageIndex+".html");
		$.getScript(path + "js/"+ pageIndex +".js",function(){
			if(currentPage.init){
				currentPage.init();
			}
		});
	
};