level=1;
var next="2jfhs";
var tips="UNIX哲学：没有消息就是好消息\n直接点下一关就能通关了";
$("#next").click(function(){
	location.pathname="/game/"+next+".html";
});
$("#tips").click(function(){
	alert(tips);
});