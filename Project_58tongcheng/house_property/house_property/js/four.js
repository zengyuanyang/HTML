//获取close对象
/*var guan=window.document.getElementById("guanbi");
guan.onclick() = function(){
	alert("true");
	//获取用户是否关闭
	var flag=confirm("确定关闭？");
	if(flag){
		//获取动态字的外层对象（一个对象）
	var ad=document.getElementById("ad");
	ad.style.display="none";
	}
	};一个网页中不能有两个onload,只能i把其中一个放在另外一个中
	*/
	//1.onload
	//获取第四部分对象
window.onload=function(){
	var li=window.document.getElementsByClassName("banner");//得到li对象（数组）
	var inde=0;
	var timer=setInterval(function(){
	if(inde==li.length){
		inde=0;
		}
		else{
			for(var i=0;i<li.length;i++){
				if(i==inde){//保证每次只显示index所在的左边，需要block和none
					li[inde].style.display="block";
					}
					else{
						li[i].style.display="none";
						}
						
				}
			}
			inde++;
	},3500);
}//只有第一个循环是从0-3，后面循环都是从1-3；

	var arr = document.getElementsByClassName("hovers");
	var index=0;//初始化数组下标
	var timer=setInterval(function(){
		if(index==arr.length){
			index=-1;
			}
			else{
				for(var i=0;i<arr.length;i++){
			if(i==index){
			arr[index].style.color="#000";
			arr[index].style.fontSize="18px";
			arr[index].style.fontWeight="bold";
			}
			else{
				arr[i].style.color="inherit";
				arr[i].style.fontSize="inherit";
				arr[i].style.fontWeight="inherit";
				}
				}
			
				}
			index++;
		},2500);
	
	
	//2.onclick
	var guanbi=document.getElementById("guanbi");
	guanbi.onclick = function(){
		//判断是否删除
		var flag=confirm("确定关闭？");
		if(flag==true){
		//获取第四部分广告的对象
		var ad=document.getElementById("ad");
		//关闭
		ad.style.display="none";
		}
		//显示图片，每3.5秒自动转换一张
}

//onmousover--鼠标放上去
//获取广告对象
var adver = document.getElementsByClassName("hovers");//数组span对象
adver.onmouseover=function(){
for(var i=0;i<adver.length;i++){
	if(adver[i].onmouseover()){
		adver[i].style.color="#000";
			ader[i].style.fontSize="18px";
			ader[i].style.fontWeight="bold";
		}else{
				arr[i].style.color="inherit";
				arr[i].style.fontSize="inherit";
				arr[i].style.fontWeight="inherit";
			}
	
	}
};


