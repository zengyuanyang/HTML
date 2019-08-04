// JavaScript Document
/*做onfucus和onblur*/

/*	var tt=document.getElementById("txxt");
tt.onfocus=function(){
	alert("onfocus");
	}*/
var userAndPsw=document.getElementById("userAndPsw");
userAndPsw.onclick=function(){
	//获取对象
	var loginId_son=document.getElementById("loginId_son");
	loginId_son.style.display="block";
	var loginPhone_son=document.getElementById("loginPhone_son");
	loginPhone_son.style.display="none";
	};
	
var loginPhone=document.getElementById("loginPhone");
loginPhone.onclick=function(){
	var loginPhone_son=document.getElementById("loginPhone_son");
	loginPhone_son.style.display="block";
	var loginId_son=document.getElementById("loginId_son");
	loginId_son.style.display="none";
	};
	
	//设账号密码登录的js
	//获取对象(输入框对象)
	var userNames=document.getElementById("userNames");
	userNames.onfocus=function(){
		var userNamesSpan=document.getElementById("userNamesSpan");
		userNamesSpan.innerHTML="请输入6位及以上有效账号";
		userNamesSpan.style.color="green";
		userNamesSpan.style.fontSize="14px";
		userNames.onblur=function(){
			//判断是不是六位以上
			if(userNames.value.length>=6){
			userNamesSpan.innerHTML="";
			}
			else{
				userNamesSpan.innerHTML="用户名必须六位及以上";
				userNamesSpan.style.color="red";
				userNamesSpan.style.fontSize="14px";
				}
			};
		};
	
	//密码
	var pass=document.getElementById("pass");
	pass.onfocus=function(){
		var passSpan=document.getElementById("passSpan");
		passSpan.innerHTML="请输入六位以上密码";
		passSpan.style.color="green";
		passSpan.style.fontSize="14px";
		//输入完成鼠标离开输入框
		pass.onblur=function(){
			//判断用户输入的长度
			if(pass.value.length<6){
				passSpan.innerHTML="密码长度不足";
				passSpan.style.color="red";
				passSpan.style.fontSize="14px";
				}else{
					passSpan.innerHTML="";
					}
			};
		};
	
	//设置手机动态码登录js
	//1.动态码
	var activeCode=document.getElementById("activeCode");
	activeCode.onfocus=function(){
		var activeCodeSpan=document.getElementById("activeCodeSpan");
		activeCodeSpan.innerHTML="请输入四位验证码";
		activeCodeSpan.style.color="green";
		activeCodeSpan.style.fontSize="14px";
		};
		activeCode.onblur=function(){
			var activeCodeSpan=document.getElementById("activeCodeSpan");
			//判断
			if(activeCode.value.length!=4){
				activeCodeSpan.innerHTML="验证码有误";
				activeCodeSpan.style.color="red";
				activeCodeSpan.style.fontSize="14px";
				}
				else{
					activeCodeSpan.innerHTML="";
					}
			};
			
			/*
regEmail : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,   //....邮箱

regName : /^[a-z0-9_-]{3,16}$/,                       //....用户名

regMobile : /^0?1[3|4|5|8][0-9]\d{8}$/,                 //....手机

regTel : /^0[\d]{2,3}-[\d]{7,8}$/                     //....电话
			*/
	//2.手机号
	var regMobile = /^0?1[3|4|5|8][0-9]\d{8}$/;//手机
	var tele=document.getElementById("tele");
	tele.onfocus=function(){
		var teleSpan=document.getElementById("teleSpan");
		teleSpan.innerHTML="请输入11位手机号";
		teleSpan.style.color="green";
		teleSpan.style.fontSize="14px";
		};
		tele.onblur=function(){
			var teleSpan=document.getElementById("teleSpan");
			//判断
			if(regMobile.test(tele.value)){
				//走到这里说明是合法手机号
				teleSpan.innerHTML="";
				}else{
					teleSpan.innerHTML="非法手机号";
					teleSpan.style.color="red";
					teleSpan.style.fontSize="14px";
					}
			};
	
	
	
	
	
	
	