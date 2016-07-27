// JavaScript Document
//=========login===============

window.onload=function(){
	//获取页面元素
	var yongHu=document.getElementById('us');
	var kuaiJie=document.getElementById('login');
	var userN=document.getElementById('user');
	var kuick=document.getElementById('quick');
	
	var userName=document.getElementById('txtUserName');
	var phone=document.getElementById('txtPhone');
	yongHu.className="curr";
	//点击切换到快捷登录
	kuaiJie.onclick=function(){
		yongHu.className="";
		kuaiJie.className="curr";
		userN.style.display="none";
		quick.style.display="block";
		userName.value="";
	};
	//点击切换到普通用户登录
	yongHu.onclick=function(){
		yongHu.className="curr";
		kuaiJie.className="";
		userN.style.display="block";
		quick.style.display="none";
		phone.value="";	
	};
	//验证手机号
	
	userName.onblur=function(){
		checkPhone(userName);
	};
	phone.onblur=function(){
		checkPhone(phone);
	}
	
	function checkPhone(obj){
		var str=obj.value;
		//console.log(str);
		var reg=/^[1][0-9]{10}$/;
		
		if(reg.test(str)){
			document.getElementById('message').style.display="none";
			document.getElementById('em_1').style.display="block";
			document.getElementById('phoneMessage').style.display="none";
			document.getElementById('tips').style.display="block";
			
		}else{
			document.getElementById('message').style.display="block";
			document.getElementById('em_1').style.display="none";
			document.getElementById('phoneMessage').style.display="block";
			document.getElementById('tips').style.display="none";
		}	
	}
	






}





