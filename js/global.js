var path=location.pathname;
var filename=path.split("/")[path.split("/").length-1];
var level_id=filename.split(".")[0];
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++){
		var c = ca[i].trim();
		if (c.indexOf(name)==0){
			return c.substring(name.length,c.length);
		}
	}
	return "";        
}
$.ajax({
	url:"js/"+level_id+".js",
	dataType:"script"
});