function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}

// 函数定义区域===


//代码区域===

rNumber = Math.floor(Math.random() * 10);
if (getCookie("oNumber") == 1) {
    alert(getCookie("rNumber"))
}
else {
    alert(rNumber) //操作
    setCookie("oNumber",1,0) //实际使用将0改成7
    setCookie("rNumber",rNumber,0) //实际使用将0改成7

}