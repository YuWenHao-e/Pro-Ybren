function tovalid(){
    let userlength = document.getElementById("user").value.length;
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass2").value;
    if(userlength < 6)
    {document.getElementById("user-err").innerHTML = "用户名长度不少于6";
        return false;}
    else
        document.getElementById("user-err").innerHTML = "";
    if(pass.length < 6)
    {document.getElementById("pass-err").innerHTML = "密码长度不少于6";
        return false;}
    else
        document.getElementById("pass-err").innerHTML = "";
    if(pass != pass2)
    {document.getElementById("pass2-err").innerHTML = "两次输入密码必须一致";
        return false;}
    else
        document.getElementById("pass2-err").innerHTML = "";
    return true;
}