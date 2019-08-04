// JavaScript Document
//一直null报错,原因:引入外部js放在了头部,解决:放在最下边
var userName=document.getElementById("userName");
userName.onfocus=function(){
	//判断是否有有6位数
/*	if(userName.length>=6){
		userNameSpan.innerHTML="合理用户名";
		userNameSpan.style.color="green";
		userNameSpan.style.fontSize="14px";
		}else{
			userNameSpan.innerHTML="不合理用户名";
			userNameSpan.style.color="red";
			userNameSpan.style.fontSize="14px";
			}
			*/
			//如果长度小于6才出现onblur效果
	
	
	if(userName.value.length<6){
	userName.onblur=function(){
	var userNameSpan=document.getElementById("userNameSpan");
	userNameSpan.innerHTML="请输入6位数字或字母";
	userNameSpan.style.color="red";
	userNameSpan.style.fontSize="14px";
	}
	}
	else{
		userName.onblur=function(){
		var userNameSpan=document.getElementById("userNameSpan");
		userNameSpan.innerHTML="";
		userNameSpan.style.color="green";
		userNameSpan.style.fontSize="14px";
		}
	}
	};
	
	//手机号onfocus
	var tele=document.getElementById("tele");
	tele.onfocus=function(){
		var teleSpan=document.getElementById("teleSpan")
		//获取长度
		if(tele.value.length!=11){
			teleSpan.innerHTML="请输入十一位数的手机号";
			teleSpan.style.color="red";
			teleSpan.style.fontSize="14px";
			}else{
				teleSpan.innerHTML="";
				teleSpan.style.color="red";
				teleSpan.style.fontSize="14px";
				}
		};
		
		//动态码
		var reg = /[\u4e00-\u9fa5]/g;//判断是否有除了数字英文符号外的其他字符(中文或者其他)
		var activeCode=document.getElementById("activeCode");
		var activeCodeSpan=document.getElementById("activeCodeSpan");
		activeCode.onfocus=function(){
			if(reg.test(activeCode.value)){
				//走到这里说明有中文
				activeCodeSpan.innerHTML="含有非法字符";
				activeCodeSpan.style.color="red";
				activeCodeSpan.style.fontSize="14px";
				}else{
					activeCodeSpan.innerHTML="";
					}
			};
		
		//登录密码
		var pass =document.getElementById("pass");
		pass.onfocus=function(){
			var passSpan=document.getElementById("passSpan");
			if(pass.value.length>=6){
				passSpan.innerHTML="";
				}else{
					passSpan.innerHTML="长度至少为6";
					passSpan.style.fontSize="14px";
					passSpan.style.color="red";
					}
			};
			
		//确定密码
		var surepsw=document.getElementById("surepsw"); 
		var surepswSpan=document.getElementById("surepswSpan");
		//比较密码和现在的输入
		surepsw.onblur=function(){
		if(pass.value==surepsw.value){
			surepswSpan.innerHTML="";
			}
			else{
				surepswSpan.innerHTML="两次输入不一致,请重新输入";
				surepswSpan.style.color="red";
				surepswSpan.style.fontSize="14px";
				}
		};