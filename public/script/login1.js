function tovaild(){
	let userlength =document.getElementById("user").value.length;
	let passvalue =document.getElementById("pass").value;
	if (userlength <=6) {document.getElementById("user_err").innerHTML="用户名长度必须大于6"
		return false;
	} else{
		document.getElementById("user_err").innerHTML="";
		
	}
     if (passvalue.length <=6) {document.getElementById("pass_err").innerHTML="密码长度必须大于6"
		return false;
	} else{
		document.getElementById("pass_err").innerHTML="";
	}		
	return true;
	}
