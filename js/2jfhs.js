level=2;
var next="3ozur";
var tips="Ctrl+C\nCtrl+V";
$("#next").click(function(){
	if($("#answer").val()=="ihsvyudfabhnasubdc"){
		location.pathname="/game/"+next+".html";
	}else{
		global.notice("Incorrect!",true);
	}
});
$("#tips").click(function(){
	alert(tips);
});