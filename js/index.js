var tips="欢迎来到HEX GAME\n这是一个解密游戏\n这个游戏的灵感来自于Minecraft百道门解密游戏\n不过在这里不需要找拉杆\n而需要运用计算机基础知识来解答\n/*其实就是是用搜索引擎搜*/\n请独立完成每一个关卡\n请勿在任何平台上泄露游戏通关攻略\n玩家交流qq群：497504594";
var gc=global.getCookie("next");
var next;
if(gc){
	next=gc;
}else{
	next="1hfks";
}
$("#tips").click(function(){
	alert(tips);
});
$("#next").click(function(){
	location.pathname="/game/"+next+".html";
});