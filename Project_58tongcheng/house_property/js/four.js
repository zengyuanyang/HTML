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



//反馈js
           //得到input对象
		var feedBack=document.getElementById("feedBack");//反馈总的框
		//得到“反馈”对象
		var feedBacks=document.getElementById("feedBacks");
		feedBacks.onclick=function(){
			//让反馈框出现dispaly：block；
			feedBack.style.display="block";
			//再关闭反馈框
			var feedBack_confirm=document.getElementById("feedBack_confirm");
			//点击弹出一个确定框
			feedBack_confirm.onclick=function(){
				//用来接受用户点击的返回值
				var flag=confirm("确定提交？");
				if(flag){
					//走到这说明用户点击的确定
					//关闭反馈框
					feedBack.style.display="none";
					}
					else{
						//走到这说明用户点击的取消，不关闭
						feedBack.style.display="block";
						}
				};
		};
		//每次打开都能看到运来输入的：可以做一个重置按钮
		var clear=document.getElementById("clears");
		clear.onclick=function(){
			//获取用户输入
			var $textArea=document.getElementById("textArea").value;//原生js
			var flag=confirm("确定清除吗？");
			if(flag==true){
				//走到这说明用户点击的确定
				//获取文本输入框对象
				var textArea=document.getElementById("textArea");
				textArea.innerHTML="";//赋值为空即可
				}else{
					//走到这，用户点击的不清楚
					//需要将原来有的值全部赋值给文本框,否则内容一样会被清除
					/*1.textArea.innerHTML=textArea.value;*/
					//这样不行，试试改变type
					/*2.clear.type="button";也不行*/
					//3.jquery
					
					/*var $textArea = $('#textArea').val();//这个就是用户输入的textarea的内容(jquery)*/
					var textArea=document.getElementById("textArea");
					textArea.innerHTML=$textArea;
					}
			
			};
