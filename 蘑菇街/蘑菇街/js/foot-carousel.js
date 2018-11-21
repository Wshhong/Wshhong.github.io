var oFoot=document.getElementById("foot-carousel");
var oUL=document.getElementsByClassName("wsh");
var oLi=oUL[0].getElementsByTagName('li')
console.log(oLi)
var oLast=document.getElementsByClassName("left-but")[0];
var oNext=document.getElementsByClassName("right-but")[0];
var Length=oLi.length;
var nowIndex=0;
var prevIndex=0;

//上一次的轮播
oLast.onclick=function(){
	prevIndex=nowIndex;
	nowIndex--;
	if(nowIndex<0){
		nowIndex=3;
	}
	change();
	console.log(oLast)
}

//下一次的轮播
oNext.onclick=function(){
	prevIndex=nowIndex;
	nowIndex++;
	if(nowIndex>Length-1){
		nowIndex=0;
	}
	change();
}

function change(){
	oLi[prevIndex].className="";
	oLi[nowIndex].className="active";
}
