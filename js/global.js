var path=location.pathname;
var level;
if(path=="/"){
	location.pathname="/index.html";
}
var filename=path.split("/")[path.split("/").length-1];
var level_id=filename.split(".")[0];
var global={
	getCookie:function(cname){
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++){
			var c = ca[i].trim();
			if (c.indexOf(name)==0){
				return c.substring(name.length,c.length);
			}
		}
		return "";        
	},
	notice:function(msg,err){
		if(err){
			$("#middle").css("color","#f00");
		}else{
			$("#middle").css("color","unset");
		}
		$("#middle").html(msg);
	}
}
$.ajax({
	url:"/js/"+level_id+".js",
	dataType:"script",
	success:function(){
		if(level){
			$("#middle").html(level);
		}
	}
});