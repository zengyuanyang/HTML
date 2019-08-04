// JavaScript Document
//显示图片，每3.5秒自动转换一张
/*window.onload=function(){
var li=window.document.getElementsByClassName("banner");//得到li对象（数组）
var index=0;
var timer=setInterval(function(){
	if(index==li.length){
		index=0;
		}
		else{
			for(var i=0;i<li.length;i++){
				if(i==index){//保证每次只显示index所在的左边，需要block和none
					li[index].style.display="block";
					}
					else{
						li[i].style.display="none";
						}
						
				}
			}
			index++;
},3500);
}//只有第一个循环是从0-3，后面循环都是从1-3；
*/