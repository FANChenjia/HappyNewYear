//函数定义区域
//Cookie基本函数
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
//Colokie基本函数===

// 函数定义区域===

//代码区域

//rNumber:0-9随机数
//根据rNumber不同显示不同页面
//oNumber用户打开页面次数
var rNumber = Math.floor(Math.random() * 10);
var rSites = '{ "sites":[' +
'{"title": "上上签", "text": "时来运转 和乐平安"},' +
'{"title": "上上签", "text": "喜气盈门 岁且更始"},' +
'{"title": "上吉签", "text": "岁岁平安 年年有余"},' +
'{"title": "上吉签", "text": "四时如意 万事遂心"},' +
'{"title": "大吉签", "text": "吉庆有余 福享新春"},' +
'{"title": "大吉签", "text": "心想事成 五福临门"},' +
'{"title": "中吉签", "text": "满院春光 庆云跃日"},' +
'{"title": "中吉签", "text": "门凝瑞霭 户发春光"},' +
'{"title": "中吉签", "text": "时乃日新 三阳开泰"},' +
'{"title": "中吉签", "text": "金玉满堂 喜气洋洋"} ]}';
var obj = JSON.parse(rSites);
//oNumber=1时
if (getCookie("coNumber") == 1) { //已经打开过了
    var cookieRnumber = Number(getCookie("crNumber"))+1;
    document.getElementById("rTitle").innerHTML = obj.sites[cookieRnumber].title;
    document.getElementById("rMain").innerHTML = obj.sites[cookieRnumber].text;
}
else { //未打开过
    var cookieRnumber = rNumber+1;
    document.getElementById("rTitle").innerHTML = obj.sites[cookieRnumber].title;
    document.getElementById("rMain").innerHTML = obj.sites[cookieRnumber].text;
    setCookie("coNumber", 1, 7); //实际使用将0改成7
    setCookie("crNumber", rNumber, 7); //实际使用将0改成7
}

setCookie("coNumber", 0, 0); //实际使用将0改成7
setCookie("crNumber", rNumber, 0); //实际使用将0改成7