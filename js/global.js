var path=location.pathname;
var filename=path.split("/")[path.split("/").length-1];
var level_id=filename.split(".")[0];
alert(level_id);
$.ajax({
	url:"js/"+level_id+".js",
	dataType:"script"
});